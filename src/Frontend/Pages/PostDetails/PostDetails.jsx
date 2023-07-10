import { useParams } from "react-router";
import { useData } from "../../..";
import SinglePost from "../../Components/SinglePost/SinglePost";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const PostDetails = () => {
  const { postId } = useParams();
  const {
    state: { posts },
  } = useData();
  const postDetail = posts?.find((e) => e._id.toString() === postId.toString());

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <Sidebar />
        <SinglePost post={postDetail} />
      </div>
    </div>
  );
};

export default PostDetails;
