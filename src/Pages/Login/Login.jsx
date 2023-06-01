import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";

import loginImg from "../../../assets/others/authentication.gif";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisable] = useState(true);

  const { singIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 bg">
      <div className="hero-content flex ">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold text-center">Please Login</h1>
          <p className="py-6">
            <img src={loginImg} alt="" />
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
              />
              <button
                onClick={handelValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validated
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary uppercase"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center py-4 text-xl">
            <small>
              New Here?{" "}
              <Link className="text-red-600" to="/singup">
                Create an Account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
