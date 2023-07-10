import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import "./App.css";
import Home from "./Frontend/Pages/Home/Home";
import Explore from "./Frontend/Pages/Explore/Explore";
import LogIn from "./Frontend/Pages/LogIn/LogIn";
import SignUp from "./Frontend/Pages/SignUp/SignUp";
import PostDetails from "./Frontend/Pages/PostDetails/PostDetails";
import Profile from "./Frontend/Pages/Profile/Profile";
import OtherProfile from "./Frontend/Pages/OtherProfile/OtherProfile";
import Bookmark from "./Frontend/Pages/Bookmark/Bookmark";
import RequiresAuth from "./Frontend/Components/Auth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequiresAuth>
                <Explore />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<LogIn />} />
          <Route
            path="/post/:postId"
            element={
              <RequiresAuth>
                <PostDetails />
              </RequiresAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="/profile/:userHandler"
            element={
              <RequiresAuth>
                <OtherProfile />
              </RequiresAuth>
            }
          />
          <Route
            path="/bookmark"
            element={
              <RequiresAuth>
                <Bookmark />
              </RequiresAuth>
            }
          />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
