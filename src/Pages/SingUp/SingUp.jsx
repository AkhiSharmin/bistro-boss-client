import { Link } from "react-router-dom";
import loginImg from "../../../assets/others/authentication.gif";
const SingUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg">
      <div className="hero-content flex ">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold text-center">SingUp Now</h1>
          <p className="py-6">
            <img src={loginImg} alt="" />
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          </form>
          <p className="text-center py-4 text-xl">
            <small>
              Already Have an Account?{" "}
              <Link className="text-red-600" to="/login">
                LogIn
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;