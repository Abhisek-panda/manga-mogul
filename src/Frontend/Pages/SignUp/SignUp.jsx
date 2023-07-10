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
    <div>
      <HelmetTitle title="Sign Up" />
      <div>
        <label htmlFor="">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, firstName: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, username: e.target.value })
            }
          />
        </label>
        <label htmlFor="">
          <input
            type="password"
            placeholder="Your Password"
            onChange={(e) =>
              setSignUpDetails({ ...signUpDetails, password: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      <div>
        <Link to="/login">Already Have an Account?</Link>
      </div>
    </div>
  );
};

export default SignUp;
