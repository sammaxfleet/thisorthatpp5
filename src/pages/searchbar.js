import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Form inline>
        <FormControl
          type="text"
          style={{
            width: "550px",
          }}
          placeholder="🔍 Search by User Name, Popularity, Date, Title, Content or Category"
          className="mr-sm-2"
        />

        <FormControl
          type="text"
          placeholder="🔍 Search by Celebrity"
          className="mr-sm-2"
        />
      </Form>
    </div>
  );
};

export default SearchBar;