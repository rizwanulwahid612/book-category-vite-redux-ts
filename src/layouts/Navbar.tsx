import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/features/user/userSlice";


const Navbar = () => {
  const {user}=useAppSelector((state)=>state.user);
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
      </>
    }
    </ul>
  </div>
 
</div>
  )
}

export default Navbar