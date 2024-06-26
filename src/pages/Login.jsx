import { FaFacebook } from "react-icons/fa";
import {GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {signInWithGoogle,signInWithFacebook,signInWithLinkedIn,signInHandler,loading,setLoading,user} = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signInHandler(email,password)
        .then(()=>{
          setLoading(false)
          toast.success('You have successfully signed in')
          setTimeout(()=>{
            navigate(location?.state ? location?.state : '/')
        },3000)
      })
      .catch(err=>{
        setLoading(false)
         if(err.message === 'Firebase: Error (auth/invalid-credential).'){
          toast.error('Your provided email or password is incorrect')

         }
         else{
          toast.error('Something went wrong')
         }
      })
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(()=>{
            setLoading(false)
            toast.success('You have successfully signed in')
            setTimeout(()=>{
              navigate(location?.state ? location?.state : '/')
          },3000)
        })
        .catch(()=>{
            setLoading(false)
            toast.error('Something went wrong')
        })
    }
    const handleFacebookSignIn = ()=>{
        signInWithFacebook()
        .then(()=>{
            setLoading(false)
            toast.success('You have successfully signed in')
            setTimeout(()=>{
                navigate(location?.state ? location?.state : '/')
            },3000)
        })
        .catch(()=>{
            setLoading(false)
            toast.error('Something went wrong')
        })
    }

    return (
        <div className="hero min-h-screen mt-20">
                <Helmet>
        <title>Car Doctor || Login</title>
      </Helmet>
          <ToastContainer/>
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className="text-center lg:text-left">
        <img src="/images/login/login.svg"/>
    </div>
    <div className="card shrink-0 w-full max-w-sm bg-base-100 border border-black">
      <form className="card-body" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-semibold text-center mb-5">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button disabled={loading? true : false}  className="btn bg-common-color text-white">{loading ? <span className="loading loading-bars loading-xs"></span> :'Sign In'}</button>
        </div>
        <p className="text-center mt-4 text-sm">Or Sign In with</p>
        <div className="flex justify-center gap-5 mt-2">
            <FaFacebook onClick={handleFacebookSignIn} className="text-2xl text-blue-600" role="button"/>
            <GrLinkedin  className="text-2xl text-blue-700" role="button"/>
            <FcGoogle onClick={handleGoogleSignIn} className="text-2xl" role="button"/>
        </div>
        <p className="text-center text-sm mt-4">Already have an account? <Link to='/signup'><span className="text-common-color font-semibold">Register</span></Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;

