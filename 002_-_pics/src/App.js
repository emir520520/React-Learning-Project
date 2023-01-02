import searchImages from './API';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const handleSearch=async (term) => {
      const result = await searchImages(term);

      console.log(result);
  }

  return (
      <div>
        <SearchBar fun={handleSearch}/>
        <ImageList />
      </div>
  );
}

export default App;
