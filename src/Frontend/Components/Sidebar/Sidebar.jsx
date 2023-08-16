import { Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";
import { useData } from "../../..";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  const {
    state: { users },
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const navigate = useNavigate();

  const LoggedInUser = users.find((e) => e.username === socialUser.username);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("socialUser");
  };

  return (
    <div className=" flex justify-between flex-col h-90v mx-2">
      <div className="flex flex-col items-start gap-4">
        <Link
          to="/"
          className="no-underline text-black font-semibold text-2xl flex items-center gap-2 hover:text-blue-700"
        >
          <HiHome />
          Home
        </Link>
        <Link
          to="/explore"
          className="no-underline text-black font-semibold text-2xl flex items-center gap-2 hover:text-blue-700"
        >
          <MdOutlineExplore />
          Explore
        </Link>
        <Link
          to="/bookmark"
          className="no-underline text-black font-semibold text-2xl flex items-center gap-2 hover:text-blue-700"
        >
          <BsBookmarksFill />
          BookMarks
        </Link>
        <Link
          to="/login"
          onClick={handleLogOut}
          className="no-underline font-semibold text-2xl flex items-center gap-2 text-red-700"
        >
          <AiOutlineLogout className="text-red-700" />
          Log Out
        </Link>
      </div>

      <div
        className="flex items-center shadow-d1 hover:shadow-d2 cursor-pointer hover:bg-blue-700 rounded-md bg-slate-500 p-2 text-white"
        onClick={() => navigate("/profile")}
      >
        <div>
          <img
            src={LoggedInUser?.profilePic}
            alt="profile"
            className="h-8 w-8 rounded-3xl object-cover"
          />
        </div>
        <div>
          <p>
            {LoggedInUser?.firstName} {LoggedInUser?.lastName}
          </p>
          <p>@{LoggedInUser?.userHandler}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
