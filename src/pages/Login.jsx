import { FaFacebook } from "react-icons/fa";
import {GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className="text-center lg:text-left">
        <img src="/images/login/login.svg"/>
    </div>
    <div className="card shrink-0 w-full max-w-sm bg-base-100 border border-black">
      <form className="card-body">
      <h1 className="text-3xl font-semibold text-center mb-5">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p className="text-center mt-4 text-sm">Or Sign In with</p>
        <div className="flex justify-center gap-5 mt-2">
            <FaFacebook className="text-2xl text-blue-600" role="button"/>
            <GrLinkedin  className="text-2xl text-blue-700" role="button"/>
            <FcGoogle className="text-2xl" role="button"/>
        </div>
        <p className="text-center text-sm mt-4">Already have an account? <Link to='/signup'><span className="text-common-color font-semibold">Register</span></Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;