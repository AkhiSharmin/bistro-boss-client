import { Helmet } from "react-helmet-async";
import loginImg from "../../../assets/others/authentication.gif";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User Profile info updated");
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200 bg">
        <div className="hero-content flex ">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-center">SingUp Now</h1>
            <p className="py-6">
              <img src={loginImg} alt="" />
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="photo"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter Your Photo Url"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 14,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase one lower case one number
                    and one special characters
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary uppercase"
                  type="submit"
                  value="SingUp"
                />
              </div>
            </form>
            <p className="p-4 text-center">
              <small>
                Already Have an Account ?
                <Link className="text-red-500" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
