import { MdOutlineSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { useData } from "../../..";
import { postFollowUser } from "../../Services/DataServices";

const Navbar = () => {
  const { showModal, setShowModal, setSearch, searchValue, dispatch } =
    useData();
  const token = localStorage.getItem("token");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const suggestUsers = searchValue?.filter(
    (e) => e.username !== socialUser?.username
  );
  const handleFollow = (id) => {
    postFollowUser(id, token, dispatch);
  };

  return (
    <div className="bg-blue-500 sticky top-0 p-2 mb-2">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="no-underline text-black text-3xl ">
          Manga Mogul
        </NavLink>
        <MdOutlineSearch
          onClick={() => setShowModal(true)}
          className="text-3xl"
        />
        <Modal isOpen={showModal}>
          <div className="flex justify-between ">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search By Username"
            />
            <button
              className="text-lg rounded-lg border-none p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-900"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
          <div>
            {suggestUsers.map((user) => {
              const { _id, firstName, lastName, userHandler, profilePic } =
                user;
              return (
                <div
                  key={_id}
                  className="flex  m-2 gap-2 items-center justify-between shadow-d1 hover:shadow-d2 p-3"
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
                    <button
                      className="p-1 text-sm bg-black border-none text-white rounded-sm"
                      onClick={() => handleFollow(_id)}
                    >
                      Follow
                    </button>
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
