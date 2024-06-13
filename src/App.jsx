import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [searchRes, setSearchRes] = useState(null);
  const handleSearchData = (data) => {
    setSearchRes(data);
  };

  return (
    <>
      <Navbar />
      <Search onSearchData={handleSearchData} />
      {searchRes && <Card searchData={searchRes} />}
    </>
  );
};

export default App;
