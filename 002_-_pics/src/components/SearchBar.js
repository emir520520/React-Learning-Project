import {useState} from "react";
import "./css/searchBar.css";

function SearchBar({fun}) {
    const [term, updateTerm]=useState('');

  const handleSearch=()=>{
    fun(term);
  }

  const handleInputChange=(event)=>{
      updateTerm(event.target.value);
  }

  return (
      <div id="searchBar">
          <div id="form">
              <h3>Search for images</h3>

              <input value={term} onChange={handleInputChange}/>
              <button onClick={handleSearch}>Search</button>
          </div>
      </div>
    );
}

export default SearchBar;
