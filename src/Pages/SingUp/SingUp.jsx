import { Link } from "react-router-dom";
import loginImg from "../../../assets/others/authentication.gif";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
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
