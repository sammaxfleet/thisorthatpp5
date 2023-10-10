import React from "react";
import SearchBar from "./SearchBar";
import PopularProfiles from "./PopularProfiles";
import Posts from "./Posts";

const HomePage = () => {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <SearchBar />
      <PopularProfiles />
      <Posts />
    </div>
  );
};

export default HomePage;