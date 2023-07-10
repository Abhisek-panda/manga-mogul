import { useEffect } from "react";
import { useData } from "../../..";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { getAllPosts, getAllUsers } from "../../Services/DataServices";

const Bookmark = () => {
  const {
    state: { users, posts },
    dispatch,
  } = useData();
  const user = JSON.parse(localStorage.getItem("socialUser"));

  const loggedUser = users?.find((e) => e?.username === user?.username);

  const bookmarks = posts?.filter((e) =>
    loggedUser?.bookmarks?.some((d) => d._id === e._id)
  );

  console.log({ loggedUser });
  useEffect(() => {
    getAllUsers(dispatch);
    getAllPosts(dispatch);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-10">
        <div>
          <Sidebar />
        </div>
        <div className=" w-screen">
          {bookmarks.length > 0 && bookmarks && (
            <>
              {bookmarks?.map((post) => {
                return (
                  <div key={post._id}>
                    <SinglePost post={post} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;