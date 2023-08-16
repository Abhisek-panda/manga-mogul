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

    case "FOLLOW_MANAGEMENT":
      return {
        ...state,
        users: state?.users?.map((el) =>
          el.username === action.payload.user?.username
            ? { ...el, following: action.payload?.user?.following }
            : el
        ),
      };
    case "NEW_FOLLOWER":
      return {
        ...state,
        users: state?.users?.map((e) =>
          e?.username === action?.payload?.followUser.username
            ? {
                ...e,
                followers: action?.payload?.followUser.followers,
                following: action?.payload?.user?.following,
              }
            : e
        ),
      };
    case "REMOVE_FOLLOWER":
      return {
        ...state,
        users: state?.users?.map((e) =>
          e?.username === action?.payload?.unfollowedUser.username
            ? {
                ...e,
                followers: action?.payload?.unfollowedUser.followers,
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
    case "POST_MANAGEMENT":
      return {
        ...state,
        posts: action.payload,
      };
    case "USER_PROFILE_UPDATE":
      return {
        ...state,
        users: state?.users?.map((e) =>
          action?.payload?.username === e?.username ? action.payload : e
        ),
      };

    default:
      return { state };
  }
};
