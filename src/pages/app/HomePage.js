import React, { useState } from "react";
import SearchBar from "./searchbar"
import PopularProfiles from "./PopularProfiles";
import Posts from "./Posts";
import { useGetPostsQuery } from "../../store/apiSlice";
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { data } = useGetPostsQuery(searchQuery, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,


  });


  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <div
      style={{
        margin: "10px",
      }}
      className="container-fluid"
    >      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <PopularProfiles />
      <Posts data={data} />
    </div>
  );
};

export default HomePage;