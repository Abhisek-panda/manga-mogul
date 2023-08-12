import { createContext, useReducer, useState } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [showComment, setShowComment] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const searchValue = state.users.filter((e) =>
    e.username.toLowerCase().includes(search.toLowerCase())
  );

  const likedPost = (post, socialUser) => {
    const data = post?.likes?.likedBy?.find(
      (user) => user?._id?.toString() === socialUser?._id?.toString()
    );
    return data;
  };

  const bookMarkedPost = (post, socialUser) => {
    const book = socialUser?.bookmarks?.find(
      (b) => b?._id.toString() === post?._id.toString()
    );
    console.log({ book });
    return book;
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        showComment,
        setShowComment,
        isBookmarked,
        setIsBookmarked,
        searchValue,
        search,
        setSearch,
        showModal,
        setShowModal,
        likedPost,
        bookMarkedPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
