import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Link, useNavigate } from "react-router-dom";
import { googleLogin, loginUser } from "../redux/features/user/userSlice";
import { useEffect } from "react";
import { FcGoogle } from 'react-icons/fc';
import imglog from "../assets/Mobile login-bro.png";
interface LoginFormInputs {
  email: string;
  password: string;
}
const Login = () => {
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const {user,isLoading}= useAppSelector(state=>state.user)
  const dispatch =useAppDispatch()

  const navigate =useNavigate()
  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(loginUser({email:data.email,password:data.password}))
  };

  const handleGoogleLogin=()=>{
       dispatch(googleLogin())
  };
  useEffect(()=>{
     if(user.email && !isLoading){
      navigate('/');
     }
  },[user.email, isLoading, navigate])
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <img src={imglog} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input  id="email"
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
              autoComplete="password"
              {...register('password', { required: 'Password is required' })} className="input input-bordered" required />
          
           {errors.password && <p>{errors.password.message}</p>}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div style={{display:'flex',justifyContent:'center'}}>
           <h1>Don't have any account?</h1>
            <Link to="/signup">Signup</Link>
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

export default Login