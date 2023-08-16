import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import SinglePost from "../SinglePost/SinglePost";
import Modal from "react-modal";
import {
  postFollowUser,
  postUnFollowUser,
  profileUpdate,
} from "../../Services/DataServices";
import { useData } from "../../..";
import { useParams } from "react-router";

const UserProfile = ({ profile, posts }) => {
  const [profileModal, setProfileModal] = useState(false);
  const {
    dispatch,
    state: { users },
  } = useData();
  const { userHandler } = useParams();

  const token = JSON.parse(localStorage.getItem("token"));
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const userToEdit = profile?.username === socialUser?.username;
  const loggedUser = users?.find((e) => e?.username === socialUser?.username);
  const toFollow = users?.find(
    (e) => e?.userHandler?.toString() === userHandler?.toString()
  );
  const f = loggedUser?.following?.find(
    (e) => e?.username === toFollow?.username
  );

  const [profileContent, setProfileContent] = useState({
    firstName: profile?.firstName,
    lastName: profile?.lastName,
    bio: profile?.bio,
    link: profile?.link,
  });
  const customStyles = {
    content: {
      width: "400px",
      height: "max-content",
      margin: "auto",
    },
  };

  const handleFollow = () => {
    postFollowUser(toFollow?._id, token, dispatch);
  };

  const handleUnFollow = () => {
    postUnFollowUser(toFollow?._id, token, dispatch);
  };
  const handleProfileUpdate = () => {
    const updatedProfile = {
      ...profile,
      firstName: profileContent?.firstName,
      lastName: profileContent?.lastName,
      bio: profileContent?.bio,
      link: profileContent?.link,
    };
    console.log({ updatedProfile });
    profileUpdate(updatedProfile, token, dispatch);
    setProfileModal(false);
  };
  console.log({ profile });
  return (
    <div className=" flex flex-col gap-5 ">
      <div className="flex items-center justify-between border-2 border-solid border-black p-2 ">
        <div>
          <img
            src={profile?.profilePic}
            alt=""
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>
        <div>
          <p>
            {profile?.firstName} {profile?.lastName}
          </p>
          <p className="text-blue-800">@{profile?.userHandler}</p>
        </div>
        <div>
          {profile?.bio && <p>bio: {profile?.bio}</p>}
          {profile?.link && (
            <p>
              Link: <a href={profile?.link}>{profile?.link}</a>
            </p>
          )}
        </div>
        <div>
          {userToEdit ? (
            <button onClick={() => setProfileModal(true)}>Edit Profile</button>
          ) : f ? (
            <button onClick={handleUnFollow}>UnFollow</button>
          ) : (
            <button onClick={handleFollow}>Follow</button>
          )}
          {}
        </div>
        <div>
          <Modal
            isOpen={profileModal}
            style={customStyles}
            onRequestClose={() => setProfileModal(false)}
            ariaHideApp={false}
          >
            <div className="flex flex-col gap-5 font-oxygen font-bold">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl">Edit Your Profile</h1>
                <IoMdCloseCircle
                  className="text-2xl hover:text-blue-500 cursor-pointer"
                  onClick={() => setProfileModal(false)}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="profile-first-name">First Name:</label>
                <input
                  type="text"
                  value={profileContent?.firstName || " "}
                  id="profile-first-name"
                  onChange={(e) =>
                    setProfileContent({
                      ...profileContent,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="profile-last-name">Last Name:</label>
                <input
                  type="text"
                  id="profile-last-name"
                  value={profileContent?.lastName || " "}
                  onChange={(e) =>
                    setProfileContent({
                      ...profileContent,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="profile-bio">Bio:</label>
                <input
                  type="text"
                  id="profile-bio"
                  value={profileContent?.bio || " "}
                  onChange={(e) =>
                    setProfileContent({
                      ...profileContent,
                      bio: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="profile-link">Profile Link:</label>
                <input
                  type="text"
                  id="profile-link"
                  value={profileContent?.link || " "}
                  onChange={(e) =>
                    setProfileContent({
                      ...profileContent,
                      link: e.target.value,
                    })
                  }
                />
              </div>
              <button onClick={handleProfileUpdate}>Update</button>
            </div>
          </Modal>
        </div>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <SinglePost post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
