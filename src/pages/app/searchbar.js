import React from "react";
import { useState } from "react"
import { Form, FormControl, Button } from "react-bootstrap";
import { useCreatePostCommentMutation, useDeleteLikePostMutation, useGetPostsQuery, useLikePostMutation } from "../../store/apiSlice";

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