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

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userHandler" element={<OtherProfile />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
