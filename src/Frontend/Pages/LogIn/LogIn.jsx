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
    }
  };

  console.log(localStorage.getItem("socialUserName"));
  const handleGuestLogIn = () => {
    const creds = { username: "abhisekpanda789@gmail.com", password: "123" };
    logInUser(creds, setIsLoggedIn);
    navigate("/");
    setLogInDetails(creds);
  };

  return (
    <div className="flex justify-center h-screen border-2 border-solid border-black">
      <HelmetTitle title="Log In" />
      <div className="border-2 border-solid border-black flex flex-col  gap-5 m-auto p-4 rounded items-center">
        <label htmlFor="" className="flex justify-between gap-3 ">
          <span>Email:</span>
          <input
            type="text"
            className="w-64"
            onChange={(e) =>
              setLogInDetails({ ...logInDetails, username: e.target.value })
            }
          />
        </label>
        <label htmlFor="" className="flex justify-between gap-3 ">
          <span>Password:</span>
          <input
            type="password"
            className="w-64"
            onChange={(e) =>
              setLogInDetails({ ...logInDetails, password: e.target.value })
            }
          />
        </label>
        <div>
          <button onClick={handleLogIn}>Log In</button>
          <button onClick={handleGuestLogIn}>Guest Login</button>
        </div>
        <div>
          <Link to="/signup">Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
