import { NavLink, useNavigate } from "react-router-dom";
import animationData from "../images/lottie/Animation.json";
import { FaGoogle } from "react-icons/fa6";
import Lottie from "react-lottie";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useMyWorks from "../Hooks/useMyWorks";

function Signup() {
  const { Signup, updateProfil, GoogleLogIn } = useContext(AuthContext);
const Navigate = useNavigate();
const { addusers } = useMyWorks();

const [errors, setErrors] = useState({}); // নতুন

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.Password.value;
  const photourl = form.photourl.value.trim();
  const category = form.category.value;

  const newErrors = {};
  if (!category) newErrors.category = "একটি বিভাগ নির্বাচন করুন";
  if (!name) newErrors.name = "নাম আবশ্যক";
  if (!email.includes("@")) newErrors.email = "বৈধ ইমেইল দিন";
  if (password.length < 6) newErrors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
  if (!photourl) newErrors.photourl = "ছবির URL আবশ্যক";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // signup
  Signup(email, password).then(() => {
    updateProfil(name, photourl).then(() => {
      const userInfo = { name, email, password, photourl, category };
      addusers(userInfo);
      Navigate("/");
    });
  });
};


  const handleGoogleLogin = () => {
    GoogleLogIn();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className=" hero bg-base-200  pt-29  ">
        <div className="md:flex">
          <div>
            <div className=" text-center  lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!!</h1>
            </div>
            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
          </div>
          <div className="hero-content flex-col  ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="card-body">
                <fieldset className="fieldset">
                <label className="fieldset-label">Select A catagory</label>
                  <select name="category" defaultValue=" " className="select">
                    <option  disabled={true} >  </option>
                    <option>contactor</option>
                    <option>hazira</option>
                    <option>baton</option>
                    <option>protaction</option>
                  </select>
                  {errors.category &&<p className="text-red-500 text-sm">{errors.name}</p>}
                  

                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  <label className="fieldset-label">Photo URL</label>
                  <input
                    type="text"
                    name="photourl"
                    className="input"
                    placeholder="Photo URL"
                  />
                {errors.photourl && <p className="text-red-500 text-sm">{errors.photourl}</p>}

                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="Password"
                    className="input"
                    placeholder="Password"
                  />
{errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  <button className="btn   btn-primary  mt-4">signup</button>
                </fieldset>
              </form>
              <div className=" "></div>
              <button
                onClick={handleGoogleLogin}
                className="btn w-[200px] mx-auto   btn-primary  mt-4">
                <FaGoogle></FaGoogle> Google
              </button>
              <p className="m-3">
                Already Have An Account Please{" "}
                <NavLink className="text-xl font-bold" to="/login">
                  log in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
