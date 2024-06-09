import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import fetchSearch from "../search";

const Search = () => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(fetchSearch(search));
  };
  return (
    <div className="w-full mt-8">
      <div className="max-w-[800px] mx-auto text-center">
        <h1>Movie Wiki</h1>
        <h2>Giving you movie details so that you can flex on your friends</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a movie name"
            value={search}
            onChange={handleSearch}
          />
          <IoIosSearch className="inline" />
        </form>
      </div>
      <p>{search}</p>
    </div>
  );
};

export default Search;
