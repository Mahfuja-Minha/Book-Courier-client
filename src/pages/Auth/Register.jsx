import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import {  useState } from "react";
import useAuth from "../../hooks/useAuth";


const Register = () => {
  const [show, setShow] = useState(false);
  const {
    user,
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithGoogleFunc,
    setLoading,
    setUser,
  } = useAuth()

  const navigate = useNavigate();

  if (user) {
    navigate("/");
    return;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters.",
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then(() => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setLoading(false);
            setUser({ email, displayName, photoURL });
            toast.success("Signup successful");
          })
          .catch((e) => toast.error(e.message));
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleSignin = () => {
    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-10 p-8 lg:p-10">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lime-500">
            Create Your Account
          </h1>
          <p className="mt-4 text-lg text-base-content">
            Set up your account to manage your profile, preferences, and
            settings with ease.
          </p>
        </div>

        <div
          className="w-full max-w-md 
  bg-white/90 dark:bg-black/40
  border border-black/10 dark:border-white/20
  shadow-xl rounded-2xl p-8 backdrop-blur-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-base-content">
            Register
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-base-content">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full bg-base-100 text-base-content"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-base-content">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL here"
                className="input input-bordered w-full bg-base-100 text-base-content"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-base-content">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-base-100 text-base-content"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1 text-base-content">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-base-100 text-base-content"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50 text-base-content"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-lime-500 hover:bg-lime-600 text-white font-semibold"
            >
              Register
            </button>

            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-base-300"></div>
              <span className="text-sm text-base-content">or</span>
              <div className="h-px w-16 bg-base-300"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="flex items-center justify-center gap-2 border border-lime-500 text-lime-500 px-5 py-2 rounded-lg w-full font-semibold hover:bg-base-200"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-base-content mt-3">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-lime-500 hover:text-lime-600 underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;