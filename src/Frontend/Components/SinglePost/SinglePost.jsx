import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { LiaHeart } from "react-icons/lia";
import { BiComment, BiSolidShareAlt } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useData } from "../../..";
import {
  addBookmark,
  getLike,
  removeBookmark,
} from "../../Services/DataServices";

const SinglePost = ({ post }) => {
  const navigate = useNavigate();
  const {
    state: { users },
    showComment,
    setShowComment,
    dispatch,
    isBookmarked,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const token = localStorage.getItem("token");

  const localDate = new Date(post?.createdAt).toLocaleDateString();
  const localTime = new Date(post?.createdAt).toLocaleTimeString();

  const handlePostDetails = (_id) => {
    navigate(`/post/${_id}`);
    setShowComment(!showComment);
  };

  const handleUserLink = (userHandler) => {
    const user = users.find((e) => e.userHandler === userHandler);
    if (user) {
      navigate(`/profile/${userHandler}`);
    } else {
      navigate("/profile");
    }
  };

  const handleBookmark = () => {
    addBookmark(dispatch, token, post._id, socialUser.username);
    // setIsBookmarked(true);
  };

  const handleBookmarkRemove = () => {
    removeBookmark(dispatch, token, post._id, socialUser.username);
    // setIsBookmarked(false);
  };

  const handleLike = () => {
    getLike(dispatch, token, post._id);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://manga-mogul.vercel.com/post/${post?._id}`
    );
  };

  return (
    <div className="shadow-d1 m-2 flex  flex-col justify-start my-4 ">
      <div className="flex justify-start">
        <div>
          <img
            src={post?.profilePic}
            alt=""
            className="h-10 w-10 object-cover rounded-full"
            onClick={() => handleUserLink(post?.userHandler)}
          />
        </div>
        <div>
          <p className="text-red-700">@{post?.userHandler}</p>
          <p>
            {localDate} {localTime}
          </p>
        </div>
      </div>
      <div>
        <h3>{post?.content}</h3>
      </div>
      <div>
        {post?.file && (
          <img
            src={post?.file}
            alt=""
            className="object-cover h-56 w-80 rounded-xl my-4 cursor-pointer"
            onClick={() => handlePostDetails(post?._id)}
          />
        )}
      </div>
      <div className="flex gap-2 justify-around">
        <div className="flex items-center">
          <BiComment
            className="text-xl cursor-pointer"
            onClick={() => handlePostDetails(post?._id)}
          />
          {post?.comments &&
            post?.comments?.length > 0 &&
            post?.comments?.length}
        </div>
        <div>
          {isBookmarked ? (
            <BsBookmarkFill
              onClick={handleBookmarkRemove}
              className="text-xl cursor-pointer"
            />
          ) : (
            <BsBookmark
              onClick={handleBookmark}
              className="text-xl cursor-pointer"
            />
          )}
        </div>

        <div className="flex items-center">
          <LiaHeart onClick={handleLike} className="text-xl cursor-pointer" />
          {post?.likes?.likeCount > 0 && post?.likes?.likeCount}
        </div>
        <div>
          <BiSolidShareAlt
            className="text-xl cursor-pointer"
            onClick={handleShare}
          />
        </div>
      </div>

      <div>
        {showComment &&
          post?.comments?.map((comment) => {
            const currUser = users?.find(
              (e) => e?.username === comment?.username
            );

            return (
              <div className="flex flex-row gap-10 items-center ">
                <div className="flex items-center ">
                  <img
                    src={currUser?.profilePic}
                    alt=""
                    className="w-10 h-10 object-cover rounded-3xl "
                  />
                  <p className="">@{currUser?.userHandler}</p>
                </div>
                <div>
                  <p>{comment?.text}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SinglePost;
