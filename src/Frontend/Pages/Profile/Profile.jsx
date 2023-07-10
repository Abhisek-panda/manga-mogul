import { useData } from "../../..";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserProfile from "../../Components/UserProfile/UserProfile";

const Profile = () => {
  const {
    state: { users, posts },
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const userProfile = users?.find((e) => e.username === socialUser.username);

  const userPosts = posts?.filter((e) => e.username === socialUser.username);

  return (
    <div>
      <HelmetTitle title="profile" />
      <Navbar />
      <div className="flex gap-10">
        <div>
          <Sidebar />
        </div>
        <div className="w-screen max-h-content">
          <UserProfile profile={userProfile} posts={userPosts} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
