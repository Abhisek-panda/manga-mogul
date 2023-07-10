import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useData } from "../../..";
import UserProfile from "../../Components/UserProfile/UserProfile";

const OtherProfile = () => {
  const { userHandler: userHandlerID } = useParams();
  const {
    state: { users, posts },
  } = useData();
  const userProfile = users.find((e) => e?.userHandler === userHandlerID);
  const userPosts = posts.filter((e) => e?.username === userProfile?.username);
  return (
    <div>
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

export default OtherProfile;
