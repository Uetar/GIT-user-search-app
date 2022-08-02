import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/searchBar.module.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ListItem from "../components/ListItem";
import UserCard from "./userCard";

const SearchBar = ({ setUserData, userData }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputText, setInputText] = useState(searchParams.get("q"));

  const [flag, setFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(false);
  const [userList, setUserList] = useState([]);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  // async function asyncCall() {
  //   console.log(inputText);
  //   // const result = await timeOutId();
  // }
  // asyncCall();

  const apiCall = useCallback(
    debounce(async (searchParams) => {
      const url = `https://api.github.com/search/users?q=${searchParams.get(
        "q"
      )}&per_page=10`;

      const response = await fetch(url).catch((err) => console.log(err));
      // setUserData()

      // console.log(response);

      const user = await response.json();

      // console.log(user.items);
      setUserList(user.items);
      // setUserFlag(false);
    }, 1000),
    [userList, userFlag]
  );

  useEffect(() => {
    if (searchParams.get("q") && typeof searchParams.get("q") === "string")
      apiCall(searchParams);
    // if(searchParams.get("q") === true)
    // {
    // }npms
    // setInputText(searchParams" ");
  }, [searchParams]);

  const handleChange = useCallback(
    (e) => {
      setFlag(true);
      setUserFlag(false);
      e.preventDefault();
      setInputText(e.target.value);
      setSearchParams({ q: e.target.value });
    },
    [inputText, flag, searchParams]
  );
  useEffect(() => {
    if (inputText) {
      setSearchParams({ q: inputText });
    }
  }, [inputText]);

  useEffect(() => {
    ((e) => {
      searchParams.get("status") === "true" && getData()
    })(); 
  }, [getData,searchParams]);

  const getData = useCallback(async()=>{
    try {
        let a = await axios.get(`https://api.github.com/users/${searchParams.get('q')}`);
        console.log(a.data);
        setUserData(a.data);
        setFlag(false);
        setUserFlag(true);
      
    } catch (error) {
      console.log(error)
    }
  },[])

  const handleSubmit = useCallback(
    async (e) => {
      // console.log(e.target.value);
      e.preventDefault();
      // setInputText(e.target.value);
      const searchValue = e.target.value
        ? e.target.value
        : searchParams.get("q");

      try {
        let a = await axios.get(`https://api.github.com/users/${searchValue}`);
        console.log(a.data);
        setUserData(a.data);
        setUserList([]);
        console.log(e.target.value);
        setFlag(false);
        setUserFlag(true);
      } catch (e) {
        console.log(e);
      }
    },
    [searchParams, userFlag, flag, inputText]
  );

  // const showData = useCallback((name) => {
  //   console.log(name);
  //   setSearchParams({ q: name });
  //   setFlag(true);
  // }, []);

  return (
    <>
      <form className={styles.mainSearchBar}>
        <div className={styles.userSearchBar}>
          <SearchIcon
            sx={{
              color: "#2c58fe",
              marginRight: "1vw",
              marginTop: "6px",
              // marginBottom: "2vh",
              marginLeft: "1vw",
            }}
          />
          <input
            className={styles.userInput}
            value={inputText}
            onChange={(e) => handleChange(e)}
            type="text"
            id="inputID"
            placeholder="Search GitHub Username..."
            maxLength={39}
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
              searchParams.set("status", "true");
              setSearchParams(searchParams);
            }}
            className={styles.userSearchButton}
            type="submit"
          >
            Search
          </button>
        </div>
        {/* {users.map((item) => {
        return <p>{item.login}</p>;
      })} */}
      </form>
      {flag && <ListItem data={userList} handleSubmit={handleSubmit} />}

      {userFlag && <UserCard data={userData} />}
    </>
  );
};

export default SearchBar;
