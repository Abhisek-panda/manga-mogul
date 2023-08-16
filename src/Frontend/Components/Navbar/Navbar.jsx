import { MdOutlineSearch } from "react-icons/md";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { useData } from "../../..";
import { postFollowUser, postUnFollowUser } from "../../Services/DataServices";

const Navbar = () => {
  const { userHandler } = useParams();
  const {
    showModal,
    setShowModal,
    setSearch,
    searchValue,
    dispatch,
    state: { users },
  } = useData();
  const token = localStorage.getItem("token");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const suggestUsers = searchValue?.filter(
    (e) => e?.username !== socialUser?.username
  );
  const navigate = useNavigate();

  const loggedUser = users?.find((e) => e?.username === socialUser?.username);
  const toFollow = users?.find(
    (e) => e?._id?.toString() === userHandler?.toString()
  );
  const f = loggedUser?.following?.find(
    (e) => e?.username === toFollow?.username
  );

  const handleUserHandler = (userHandler) => {
    navigate(`/profile/${userHandler}`);
    setShowModal(false);
  };
  const handleFollow = (id) => {
    postFollowUser(id, token, dispatch);
  };
  const handleUnFollow = (id) => {
    postUnFollowUser(id, token, dispatch);
  };
  return (
    <div className="bg-blue-500 sticky top-0 p-2 mb-2 z-10">
      <div className="flex justify-between items-center">
        <NavLink
          to="/"
          className="no-underline text-black text-3xl hover:text-slate-700 "
        >
          Manga Mogul
        </NavLink>
        <MdOutlineSearch
          onClick={() => setShowModal(true)}
          className="text-3xl cursor-pointer hover:text-slate-500"
        />
        <Modal
          isOpen={showModal}
          styles={{
            width: "max-content",
            height: "max-content",
            margin: "auto",
          }}
          ariaHideApp={false}
          onRequestClose={() => setShowModal(false)}
        >
          <div className="flex items-center justify-between font-oxygen">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search By Username"
              className="w-[400px] h-[30px]"
            />
            <button
              className="text-sm rounded-sm border-none p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-900"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
          <div className="font-oxygen">
            {suggestUsers.map((user) => {
              const { _id, firstName, lastName, userHandler, profilePic } =
                user;
              return (
                <div
                  key={_id}
                  className="flex  m-2 gap-2 items-center justify-between shadow-d1 hover:shadow-d2 p-3"
                  onClick={() => handleUserHandler(userHandler)}
                >
                  <div>
                    <img
                      src={profilePic}
                      alt=""
                      className="w-8 h-8 object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p>
                      {firstName} {lastName}
                    </p>
                    <p>@{userHandler}</p>
                  </div>
                  <div>
                    {f ? (
                      <button
                        className="p-1 text-sm bg-black border-none text-white rounded-sm"
                        onClick={() => handleUnFollow(_id)}
                      >
                        UnFollow
                      </button>
                    ) : (
                      <button
                        className="p-1 text-sm bg-black border-none text-white rounded-sm"
                        onClick={() => handleFollow(_id)}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
