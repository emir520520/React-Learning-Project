import {useState} from "react";

function SearchBar({fun}) {
    const [term, updateTerm]=useState('');

  const handleSearch=()=>{
    fun(term);
  }

  const handleInputChange=(event)=>{
      updateTerm(event.target.value);
  }

  return (
      <div>
          <h3>Search for images</h3>

          <input value={term} onChange={handleInputChange}/>
          <button onClick={handleSearch}>Search</button>
      </div>
    );
}

export default SearchBar;
