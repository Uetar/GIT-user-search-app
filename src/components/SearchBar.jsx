import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/searchBar.module.css";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [inputText, setInputText] = useState(searchParams.get("q"));

  const handleChange = (e) => {
    setSearchParams({ q: e.target.value }, { replace: true });
    setInputText(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setInputText("");
    console.log();
  }

  return (
    <form className={styles.mainSearchBar}>
      <div className={styles.userSearchBar}>
        <SearchIcon sx={{ color: "#2c58fe", marginRight: "40px" }} />
        <input
          className={styles.userInput}
          value={inputText}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="search GitHub Username..."
          maxLength={39}
        />
        <button
          onClick={handleSubmit}
          className={styles.userSearchButton}
          onChange={(e) => {
            e.preventDefault();
          }}
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
