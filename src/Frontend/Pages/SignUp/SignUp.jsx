import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../Services/AuthServices";
import { useState } from "react";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  console.log(signUpDetails);
  const handleSignUp = () => {
    if (
      signUpDetails.firstName &&
      signUpDetails.lastName &&
      signUpDetails.username &&
      signUpDetails.password
    ) {
      signUpUser(signUpDetails);
      navigate("/login");
    }
  };

  return (
    <div className="h-screen w-full ">
      <HelmetTitle title="Sign Up" />
      <div className="flex gap-24">
        <div className="flex flex-col gap-4  rounded-lg border-2 p-4  border-solid border-black m-auto mx-5">
          <div className="flex flex-col items-start ">
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setSignUpDetails({
                  ...signUpDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, password: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className="p-1 text-sm bg-black border-none text-white rounded-sm hover:bg-red-700  cursor-pointer"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
          <div className="">
            <p>
              Already Have an Account?
              <Link
                to="/login"
                className="font-bold no-underline text-blue-700 hover:text-red-700"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
        <div className=" h-screen">
          <img
            src="https://images.alphacoders.com/131/1314427.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
