
import { Toaster } from 'react-hot-toast'
import MainLayout from './layouts/MainLayout'
import { useAppDispatch } from './redux/hook';
import { useEffect } from 'react';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
   const dispatch=useAppDispatch();
  useEffect(()=>{
    dispatch(setLoading(true))
  onAuthStateChanged(auth,(user)=>{
    if(user){
      console.log(user)
      dispatch(setUser(user.email!));
      dispatch(setLoading(true));
    }
    else{
      dispatch(setLoading(false))
    }
  })
  },[dispatch])

  return (
    
      <div>
        <Toaster />
      <MainLayout />
      </div>
      
    
  )
}

export default App
