import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { div } from "@mui/material";
import styles from "../styles/searchBar.module.css";

const SearchBar = () => {
  const [inputText, setInputText] = React.useState("");
  // const { error, clearError, fetchUserData } = useContext(userDataContext);
  const [users, setUsers] = useState([]);
  const [userMatch, setUsermatch] = useState([]);
  const[searchParam , setSearchParam] = setSearchParams();
  const [flag, setFlag] = useState(true);

useEffect(()=>{
  setFlag(true);
  const timeOutId = setTimeOut(()=>
  {
    (async()=>{
      const response = await axios.get("https://");
      setUsers(response.data.items);
      setUsermatch(response.data.items);
    })()
  },400)
  return() => clearTimeout(timeOut.Id)
},[searchParam])

function handleChange(e){
  const{value} = e.target;
  setInputText(value);
  clearError();
  const newSearchParam = new URLSearchParams(searchParams);
  newSearchParam.set('q',value);
  setSearchParam(newSearchParam);
  setUsermatch(users);
}
function setter(e){
  if((e.target.innerHTML).length>0){
    setSearchParam({q:e.target.innerHTML});
    setInputText(e.target.innerHTML);
  }
  fetchUserData(e.target.innerHTML);
  setFlag(false);
  setUsermatch([]);
  setInputText("");

}
function handleSubmit(e){
  e.preventDefault();
  fetchUserData(inputText);
  setInputText("");
  setFlag(false);
}





  return (
    <form className={styles.mainSearchBar}>
      <div className={styles.userSearchBar}>
        <SearchIcon sx={{ color: "#2c58fe", marginRight: "40px" }} />

        <input
          className={styles.userInput}
          type="text"
           value={inputText}
            // onChange={(e) => handleChange(e)}
          placeholder="search GitHub Username..."
           maxLength={39}
        />
        <button
          onClick={inputText}
          className={styles.userSearchButton}
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
