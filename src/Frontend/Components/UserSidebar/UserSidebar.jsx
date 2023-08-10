import { useEffect } from "react";

import { useData } from "../../..";
import { getAllUsers, postFollowUser } from "../../Services/DataServices";
import { useNavigate } from "react-router";

const UserSidebar = () => {
  const {
    state: { users },
    dispatch,
  } = useData();
  const socialUser = JSON?.parse(localStorage.getItem("socialUser"));
  const token = localStorage?.getItem("token");
  const navigate = useNavigate();

  const loggedUser = users?.find((e) => e?.username === socialUser?.username);
  const followingUser = loggedUser?.following?.map((e) => e.username);
  const suggestUsers = users?.filter(
    (e) =>
      e.username !== socialUser?.username &&
      !followingUser?.includes(e.username)
  );

  const handleFollow = (id) => {
    postFollowUser(id, token, dispatch);
  };

  const handleUserLink = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };
  useEffect(() => {
    getAllUsers(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>User Suggestions</h2>
      {suggestUsers?.map((user) => {
        const { _id, firstName, lastName, userHandler, profilePic } = user;
        return (
          <div
            key={_id}
            className="flex  m-2 gap-2 items-center justify-between shadow-d1 hover:shadow-d2 p-3"
          >
            <div>
              <img
                src={profilePic}
                alt=""
                className="w-10 h-10 object-cover rounded-3xl cursor-pointer"
                onClick={() => handleUserLink(userHandler)}
              />
            </div>
            <div>
              <p>
                {firstName} {lastName}
              </p>
              <p>@{userHandler}</p>
            </div>
            <div>
              <button
                className="p-1 text-sm bg-black border-none text-white rounded-sm hover:bg-blue-700  cursor-pointer"
                onClick={() => handleFollow(_id)}
              >
                Follow
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserSidebar;
