import axios from "axios";

export const getAllUsers = async (dispatch) => {
  try {
    const {
      status,
      data: { users },
    } = await axios.get("/api/users");
    if (status === 200 || status === 201) {
      dispatch({ type: "ALL_USERS", payload: users });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async (dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");
    if (status === 200 || status === 201) {
      dispatch({ type: "ALL_POSTS", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post, token, dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      "api/posts",
      { postData: post },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: "NEW_POST", payload: posts });
    }
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
};

export const postFollowUser = async (id, token, dispatch) => {
  try {
    const {
      data: { followUser, user },
      status,
    } = await axios.post(
      `/api/users/follow/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: "NEW_FOLLOWER", payload: { followUser, user } });
    }
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

export const addBookmark = async (dispatch, token, _id, username) => {
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/bookmark/${_id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: "BOOKMARK", payload: { username, bookmarks } });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeBookmark = async (dispatch, token, _id, username) => {
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/remove-bookmark/${_id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({ type: "BOOKMARK", payload: { username, bookmarks } });
    }
    console.log({ bookmarks });
  } catch (error) {
    console.log(error);
  }
};

export const getLike = async (dispatch, token, _id) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${_id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      console.log("api Posts Like", posts);
      dispatch({ type: "LIKE_DATA", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDislike = async (dispatch, token, _id) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${_id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: "LIKE_DATA", payload: posts });
    }
  } catch (error) {
    console.log(error);
  }
};
