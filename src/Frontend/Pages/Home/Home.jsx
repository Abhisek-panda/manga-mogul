import Navbar from "../../Components/Navbar/Navbar";
import HelmetTitle from "../../Components/Helmet/HelmetTitle";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserSidebar from "../../Components/UserSidebar/UserSidebar";
import { useData } from "../../..";
import { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../Services/DataServices";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { v4 as uuid } from "uuid";

const Home = () => {
  const [sortPost, setSortPost] = useState("newest");
  const {
    state: { users, posts },
    dispatch,
  } = useData();
  const [showNewPost, setShowNewPost] = useState(true);
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const [newPost, setNewPost] = useState({
    _id: uuid(),
    content: "",
    profilePic: socialUser?.profilePic,
    userHandler: socialUser?.userHandler,
  });

  const token = localStorage.getItem("token");

  const loggedInUser = users.find((e) => e?.username === socialUser?.username);

  const loggedUserPosts = posts?.filter(
    (e) => e?.username === loggedInUser?.username
  );

  const followedPosts = posts?.filter((post) =>
    loggedInUser?.following?.some((e) => e?.username === post?.username)
  );

  const homePosts = [...followedPosts, ...loggedUserPosts];

  const sortedPost =
    sortPost === "newest"
      ? [...homePosts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : sortPost === "oldest"
      ? [...homePosts].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
      : [...homePosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);

  const handleSorting = (e) => {
    setSortPost(e.target.value);
  };
  const handleCreatePost = () => {
    if (newPost.content.length > 0) {
      createPost(newPost, token, dispatch);
      setNewPost({
        content: "",
        profilePic: socialUser?.profilePic,
        userHandler: socialUser?.userHandler,
      });
      setShowNewPost(false);
    }
  };

  const handleNewPost = () => {
    setShowNewPost(true);
  };

  useEffect(() => {
    getAllPosts(dispatch);
    setShowNewPost(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-screen">
      <HelmetTitle title="Home" />
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar />
        </div>
        <div>
          <div className=" border-2 border-solid py-2 rounded-sm border-black mb-8 mt-2">
            <div className="flex justify-around items-center ">
              <div>
                <button
                  className="text-lg rounded-lg border-none p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-900"
                  onClick={handleNewPost}
                >
                  Add Post
                </button>
              </div>
              <div className="flex gap-4">
                <h4 className="text-lg">Sort By: </h4>
                <select
                  className="text-lg rounded-sm"
                  name=""
                  id=""
                  onChange={handleSorting}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
            </div>
            <div>
              {showNewPost === true && (
                <div className="h-90v overflow-y-scroll">
                  <label htmlFor="">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) =>
                        setNewPost({ ...newPost, content: e.target.value })
                      }
                      placeholder="Type to Add Post"
                    ></textarea>
                  </label>
                  <div className="flex justify-evenly">
                    <button
                      onClick={() => setShowNewPost(false)}
                      className="text-lg rounded-lg border-none p-1 bg-blue-500 text-white cursor-pointer hover:bg-blue-900"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleCreatePost}
                      className="text-lg rounded-lg border-none p-1 bg-blue-500 text-white cursor-pointer hover:bg-blue-900"
                    >
                      Add Post
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="">
            {sortedPost.map((post) => {
              return (
                <div key={post._id}>
                  <SinglePost post={post} />
                </div>
              );
            })}
          </div>
        </div>
        <aside className="w-96">
          <UserSidebar />
        </aside>
      </div>
    </div>
  );
};

export default Home;
