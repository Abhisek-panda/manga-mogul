import { useEffect } from "react";
import { useData } from "../../..";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import UserSidebar from "../../Components/UserSidebar/UserSidebar";
import { getAllPosts } from "../../Services/DataServices";

const Explore = () => {
  const { state, dispatch } = useData();

  useEffect(() => {
    getAllPosts(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <HelmetTitle title="Explore" />
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar />
        </div>
        <div>
          {state?.posts?.map((post) => {
            return (
              <div key={post._id}>
                <SinglePost post={post} />
              </div>
            );
          })}
        </div>
        <div>
          <UserSidebar />
        </div>
      </div>
    </div>
  );
};

export default Explore;
