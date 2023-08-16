import { useState } from "react";
import { logInUser } from "../../Services/AuthServices";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";
import { useAuth } from "../../../index";

const LogIn = () => {
  const [logInDetails, setLogInDetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogIn = () => {
    if (logInDetails.username && logInDetails.password) {
      logInUser(logInDetails);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleGuestLogIn = () => {
    const creds = { username: "abhisekpanda789@gmail.com", password: "123" };
    logInUser(creds, setIsLoggedIn);
    setLogInDetails(creds);
    navigate("/");
  };

  return (
    <div className="flex h-screen ">
      <HelmetTitle title="Log In" />
      <div className="w-3/4 border-2 border-solid border-black">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Anime-Wallpaper-Desktop-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="border-2 border-solid border-black flex flex-col p-4  gap-5 m-auto rounded-lg items-center">
        <div className="flex flex-col items-start">
          <label htmlFor="">Email: </label>
          <input
            type="text"
            className="w-64"
            onChange={(e) =>
              setLogInDetails({ ...logInDetails, username: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col items-start ">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="w-64"
            onChange={(e) =>
              setLogInDetails({ ...logInDetails, password: e.target.value })
            }
          />
        </div>
        <div className="flex gap-5">
          <button
            className="p-1 text-sm bg-black border-none text-white rounded-sm hover:bg-blue-700  cursor-pointer"
            onClick={handleLogIn}
          >
            Log In
          </button>
          <button
            className="p-1 text-sm bg-black border-none text-white rounded-sm hover:bg-red-700  cursor-pointer"
            onClick={handleGuestLogIn}
          >
            Guest Login
          </button>
        </div>
        <div>
          <p className="text-lg ">
            Don't have an Account?{" "}
            <Link
              to="/signup"
              className="font-bold no-underline text-blue-700 hover:text-red-700"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
