import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import fetchSearch from "../search";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Search = ({ onSearchData }) => {
  const searchInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchInputRef.current.value;
    fetchSearch(searchValue)
      .then((data) => {
        onSearchData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
            ref={searchInputRef}
          />
          <button type="submit">
            <IoIosSearch className="inline" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
