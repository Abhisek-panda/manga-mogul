import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { BiComment, BiSolidShareAlt } from "react-icons/bi";
import { MdDelete, MdEdit } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useNavigate } from "react-router";
import { useData } from "../../..";
import {
  addBookmark,
  getLike,
  removeBookmark,
  deletePost,
  getDislike,
} from "../../Services/DataServices";
import { editPostApi } from "../../Services/DataServices";
import { useState } from "react";

const SinglePost = ({ post }) => {
  const [editPost, setEditPost] = useState(false);
  const [postContent, setPostContent] = useState(post?.content);
  const [showIcons, setShowIcons] = useState(false);

  const navigate = useNavigate();
  const {
    state: { users },
    showComment,
    setShowComment,
    dispatch,
    likedPost,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const token = localStorage.getItem("token");
  const bookM = users?.find((e) => e?.username === socialUser?.username);

  const localDate = new Date(post?.createdAt).toLocaleDateString();
  const localTime = new Date(post?.createdAt).toLocaleTimeString();

  const likePostByUser = likedPost(post, socialUser);
  const bookMarkedByUser = bookM?.bookmarks.find((e) => e?._id === post?._id);
  const postDeleteUser = users?.find((e) => e?.username === post?.username);

  const handleEditPost = () => {
    const updatedPost = { ...post, content: postContent };
    editPostApi(updatedPost?._id, updatedPost, token, dispatch);
    setEditPost(false);
  };

  const handlePostDetails = (_id) => {
    navigate(`/post/${_id}`);
  };

  const handleUserLink = (userHandler) => {
    const user = users?.find((e) => e.userHandler === userHandler);
    if (user) {
      navigate(`/profile/${userHandler}`);
    } else {
      navigate("/profile");
    }
  };

  const handleBookmark = () => {
    addBookmark(dispatch, token, post?._id, socialUser.username);
  };

  const handleBookmarkRemove = () => {
    removeBookmark(dispatch, token, post?._id, socialUser.username);
  };

  const handleDislike = () => {
    getDislike(dispatch, token, post?._id);
  };
  const handleLike = () => {
    getLike(dispatch, token, post?._id);
  };

  const handleDeletePost = () => {
    deletePost(dispatch, token, post?._id);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://manga-mogul.vercel.com/post/${post?._id}`
    );
  };

  return (
    <div className="m-2 flex  flex-col justify-start my-4 rounded-lg border-2 border-solid border-slate-500 hover:border-blue-700 ">
      <div className="flex justify-between items-center m-3">
        <div className="flex gap-1 ">
          <img
            src={postDeleteUser?.profilePic}
            alt=""
            className="h-10 w-10 object-cover rounded-full cursor-pointer hover:blur-[1px]"
            onClick={() => handleUserLink(post?.userHandler)}
          />
          <div className="flex flex-col text-start">
            <p className="text-red-700">@{post?.userHandler}</p>
            <p>
              {localDate} {localTime}
            </p>
          </div>
        </div>

        <div>
          {postDeleteUser?.username === socialUser?.username && (
            <>
              {showIcons && (
                <>
                  <MdDelete
                    className="text-xl cursor-pointer hover:text-slate-500"
                    onClick={handleDeletePost}
                  />

                  <MdEdit
                    className="text-xl cursor-pointer hover:text-slate-500 mx-2"
                    onClick={() => setEditPost(!editPost)}
                  />
                </>
              )}
              <PiDotsThreeOutlineFill
                onClick={() => setShowIcons(!showIcons)}
                className="text-xl cursor-pointer hover:text-slate-500"
              />
            </>
          )}
        </div>
      </div>
      <div>
        {editPost && (
          <>
            <div>
              <textarea
                name=""
                value={postContent}
                className="w-full h-16"
                onChange={(e) => setPostContent(e.target.value)}
              >
                {postContent}
              </textarea>
            </div>
            <div className="flex gap-5 justify-end mx-4">
              <button
                onClick={() => setEditPost(false)}
                className="p-1 text-sm bg-black border-none text-white rounded-sm hover:bg-red-700  cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleEditPost}
                className="p-1 text-sm bg-black border-none text-white rounded-sm hover:bg-blue-700  cursor-pointer"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        <h3 className="text-start m-3">{post?.content}</h3>
      </div>
      <div>
        {post?.file && (
          <img
            src={post?.file}
            alt=""
            className=" h-[300px] w-[360px] object-cover rounded-xl my-4 cursor-pointer"
            onClick={() => handlePostDetails(post?._id)}
          />
        )}
      </div>
      <div className="flex gap-2 justify-around">
        <div className="flex items-center">
          <BiComment
            className="text-xl cursor-pointer hover:text-slate-500"
            onClick={() => setShowComment(!showComment)}
          />
          {post?.comments &&
            post?.comments?.length > 0 &&
            post?.comments?.length}
        </div>

        <div>
          {bookMarkedByUser ? (
            <BsBookmarkFill
              onClick={handleBookmarkRemove}
              className="text-xl cursor-pointer hover:text-slate-500"
            />
          ) : (
            <BsBookmark
              onClick={handleBookmark}
              className="text-xl cursor-pointer hover:text-slate-500"
            />
          )}
        </div>

        <div className="flex items-center">
          {likePostByUser ? (
            <LiaHeartSolid
              className="text-xl cursor-pointer text-red-700"
              onClick={handleDislike}
            />
          ) : (
            <LiaHeart
              onClick={handleLike}
              className="text-xl cursor-pointer hover:text-red-700 "
            />
          )}

          {post?.likes?.likeCount > 0 && post?.likes?.likeCount}
        </div>
        <div>
          <BiSolidShareAlt
            className="text-xl cursor-pointer"
            onClick={handleShare}
          />
        </div>
      </div>

      {showComment && (
        <div>
          {post?.comments?.map((comment) => {
            const currUser = users?.find(
              (e) => e?.username === comment?.username
            );
            const commentToDelete = socialUser?.username === comment?.username;

            return (
              <div
                className="flex flex-row gap-10 items-center "
                key={comment?._id}
              >
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
                {commentToDelete && <MdEdit />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SinglePost;
