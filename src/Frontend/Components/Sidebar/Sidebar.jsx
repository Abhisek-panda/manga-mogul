import { Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { BsBookmarksFill } from "react-icons/bs";
import { useData } from "../../..";

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
    <div className=" flex justify-between flex-col h-90v">
      <div className="flex flex-col items-start gap-4">
        <Link
          to="/"
          className="no-underline text-black font-semibold text-2xl flex items-center gap-2"
        >
          <HiHome />
          Home
        </Link>
        <Link
          to="/explore"
          className="no-underline text-black font-semibold text-2xl flex items-center gap-2"
        >
          <MdOutlineExplore />
          Explore
        </Link>
        <Link
          to="/bookmark"
          className="no-underline text-black font-semibold text-2xl flex items-center gap-2"
        >
          <BsBookmarksFill />
          BookMarks
        </Link>
        <Link to="/login" onClick={handleLogOut } className="no-underline text-black font-semibold text-2xl flex items-center gap-2">
          Log Out
        </Link>
      </div>

      <div
        className="flex items-center shadow-d1 hover:shadow-d2 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <div>
          <img
            src={LoggedInUser?.profilePic}
            alt="profile"
            className="h-10 w-10 rounded-3xl object-cover"
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
