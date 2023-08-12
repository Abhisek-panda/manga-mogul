export const initialState = {
  posts: [],
  users: [],
  postId: "",
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "NEW_POST":
      return {
        ...state,
        posts: action.payload,
      };

    case "NEW_FOLLOWER":
      return {
        ...state,
        users: state.users.map((e) =>
          e.username === action?.payload?.followUser.username
            ? {
                ...e,
                followers: action?.payload?.followUser.followers,
                following: action?.payload?.user?.following,
              }
            : e
        ),
      };

    case "BOOKMARK":
      return {
        ...state,
        users: state?.users?.map((e) =>
          e?.username === action?.payload.username
            ? { ...e, bookmarks: action.payload.bookmarks }
            : e
        ),
      };

    case "LIKE_DATA":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return { state };
  }
};
