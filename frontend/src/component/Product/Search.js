import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const currentPath = history.location.pathname;
    const pathParts = currentPath.split("/");
    const lastPathPart = pathParts[pathParts.length - 1];

    // Update the search box with the last path part if it is not equal to "products"
    if (lastPathPart !== "products") {
      setKeyword(lastPathPart);
    }
  }, [history]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
