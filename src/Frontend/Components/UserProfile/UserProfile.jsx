import SinglePost from "../SinglePost/SinglePost";

const UserProfile = ({ profile, posts }) => {
  return (
    <div className=" flex flex-col gap-5 ">
      <div className="flex items-center justify-between ">
        <div>
          <img
            src={profile?.profilePic}
            alt=""
            className="w-32 h-32 object-cover"
          />
        </div>
        <div>
          <p>
            {profile?.firstName} {profile?.lastName}
          </p>
          <p className="text-blue-800">@{profile?.userHandler}</p>
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
