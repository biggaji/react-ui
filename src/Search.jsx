import { useState, useRef, useEffect } from "react"
import SearchResults from "./SearchResults";
const API_URL = `https://www.omdbapi.com?apikey=16a057a6`;

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  async function searchMovie(title) {
    const results = await fetch(`${API_URL}&s=${title}`);
    const data = await results.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovie(searchTerm);
  }, [searchTerm]);

  const term = useRef();

  function handleSearchRequest(evt) {
    const q = term.current.value;
    setSearchTerm(q);
  }

  return(
    <>
      <div className="searchBar">
        <input ref={term} type="search" name="search" placeholder="Search for movies..."/>
        <button onClick={handleSearchRequest}>Search</button>
      </div>
      <SearchResults results={movies}/>
    </>
  )
}