import React from "react";
import { Form, FormControl } from "react-bootstrap";


const SearchBar = ({ handleSearch, searchQuery }) => {

  return (
    <div>
      <Form inline>
        <FormControl
          type="text"
          style={{
            width: "100%",
          }}
          placeholder="🔍 Search by User Name, Popularity, Date, Title, Content or Category"
          className=""
          value={searchQuery}
          onChange={handleSearch}
        />


      </Form>
    </div>
  );
};

export default SearchBar;