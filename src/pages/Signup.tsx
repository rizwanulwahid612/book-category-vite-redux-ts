import { useForm } from "react-hook-form";
import { createUser, googleLogin } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useEffect } from "react";
import regimg from "../assets/Security On-bro.png"
import { useUserRegistMutation } from "../redux/features/books/booksApi";
interface SignupFormInputs {
  displayName?:string;
  photoURL?:string;
  email: string;
  password: string;
}

const Signup = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
const {user,isLoading}= useAppSelector(state=>state.user)
const [userRegist]=useUserRegistMutation()
  const dispatch =useAppDispatch()
const navigate =useNavigate()
  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
   dispatch(createUser({email:data.email,password:data.password}))
   userRegist(data)
  };
   const handleGoogleLogin=()=>{
       dispatch(googleLogin())
  };
   useEffect(()=>{
     if(user.email && !isLoading){
      navigate('/login');
     }
  },[user.email, isLoading, navigate])
  return (
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
 <h1 className="text-5xl font-bold">Sign Up now!</h1>
     
      <img src={regimg} alt="" /> 

     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">


         <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  id="displayName"
              placeholder="displayName"
              defaultValue={ ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('displayName',{ required: 'displayName is required' })}
              className="input input-bordered" required/>
       {errors.displayName && <p>{errors.displayName.message}</p>}
       </div>
         <div className="form-control">
        <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input  id="photoURL"
              placeholder="photoURL"
              defaultValue={ ''}
              autoCapitalize="none"
              autoComplete=""
              autoCorrect="off"
              {...register('photoURL',{ required: 'photoURL is required' })}
              className="input input-bordered" required/>
       {errors.photoURL && <p>{errors.photoURL.message}</p>}
       </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })} className="input input-bordered" required />
               {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })} className="input input-bordered" required />
           {errors.password && <p>{errors.password.message}</p>}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <div style={{display:'flex',justifyContent:'center'}}>
           <h1>Already have an account?</h1>
            <Link to="/login">Login</Link>
      </div>
       <div className="form-control mt-6">
          <button 
        className="btn btn-primary"
        onClick={handleGoogleLogin}><FcGoogle /> Google</button>
        </div>
    </div>
  </div>
</div>
  )
}

export default Signup