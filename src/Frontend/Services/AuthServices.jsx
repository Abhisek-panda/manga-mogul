import axios from "axios";

export const logInUser = async (creds, setIsLoggedIn) => {
  try {
    const {
      data: { encodedToken, foundUser },
      status,
    } = await axios.post("api/auth/login", {
      ...creds,
    });
    if (status === 200 || status === 201) {
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("socialUser", JSON.stringify(foundUser));

      setIsLoggedIn(true);
    }
  } catch (error) {
    console.error(error);
  }
};

export const signUpUser = async (creds) => {
  try {
    const {
      data: { encodedToken, createdUser },
      status,
    } = await axios.post("/api/auth/signup", { ...creds });

    if (status === 200 || status === 201) {
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(createdUser));
    }
  } catch (error) {
    console.error(error);
  }
};
