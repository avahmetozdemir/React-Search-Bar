import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { useGlobalContext } from "../context";
function SearchBar() {
  const {data, setData,wordEntered,setWordEntered,setSearchWord}= useGlobalContext()

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchWord(searchWord)
    setWordEntered(searchWord);
    
  };

  return (
    <div>
      <input
        className={classes["input"]}
        type="text"
        placeholder="Enter your product"
        value={wordEntered}
        onChange={handleFilter}
      />
    </div>
  );
}

export default SearchBar;
