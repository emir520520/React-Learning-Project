import searchImages from './API';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import {useState} from "react";

function App() {
    const [images, getImages]=useState([]);

  const handleSearch=async (term) => {
      const result = await searchImages(term);

      getImages(result);
  }

  return (
      <div>
        <SearchBar fun={handleSearch}/>
        <ImageList images={images}/>
      </div>
  );
}

export default App;
