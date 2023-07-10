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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
