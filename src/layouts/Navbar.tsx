/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { setUser } from "../redux/features/user/userSlice";
import { useGetUsersQuery } from "../redux/features/books/booksApi";
import { useState } from "react";


const Navbar = () => {
const [imges,setImage]=useState()
  onAuthStateChanged(auth,(user)=>{
    if(user){
      //@ts-ignore
      setImage(user?.photoURL)
    }
  })



  const {user}=useAppSelector((state)=>state.user);
  const {data:users}=useGetUsersQuery(undefined,{refetchOnMountOrArgChange:true,pollingInterval:30000});

  console.log(user.email)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.log(users?.data?.map((u:any)=>u?.email))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userProfile= users?.data?.filter((us:any)=>{
    if(us.email ===user.email){
      return us;
    }
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usrImg=(userProfile?.map((uj:any)=>uj?.photoURL))
  const usrName=(userProfile?.map((uj:any)=>uj?.displayName))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userDataImage=users?.data?.map((u:any)=>u?.photoURL)
  console.log(userDataImage)
  const dispatch = useAppDispatch()
  const handleLogout =()=>{
    console.log('Logout');
    signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(setUser(null))
})
  }
  return (
    <div className="navbar  bg-base-content">
    
  <div className="flex-1">
    <Link to='/'>
    <a className="btn bg-base-300 text-xl">Book Category</a>
    </Link>
  </div>
  
   <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><button><Link to="/">Home</Link></button></li>
      <li><button><Link to="/allbooks">All Books</Link></button></li>
       <li><button><Link to="/createbook">Create Book</Link></button></li>
      {!user.email && (<>
      <li><button><Link to="/login">Login</Link></button></li>

      <li><button><Link to="/signup">Sign Up</Link></button></li>
    
      </>)}
      {
        user.email && <>
      <li><button onClick={handleLogout}><Link to="/signup">Logg Out</Link></button></li>
      <li><div>{usrName}</div></li>
      </>
    }
    </ul>
    <div className="avatar online">
  <div className="w-12 rounded-full">
  {user?.email && (
  <>
    {imges && <img src={imges} />} 
    {usrImg && <img src={usrImg} />}
   
  </>
)}
 
   
  </div>
</div>

  </div>
 
</div>
  )
}

export default Navbar