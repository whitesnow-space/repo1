import React from "react";
import PropTypes from "prop-types";

import Input from "../input";
import "./styles.scss";

const Search = ({ list }) => {
  return (
    <div className="search">
      <Input placeholder={"See if we deliver to your address"} />
      <div className="search-results mt-3 text-center">
        {list &&
          list.map((item) => {
            return <p className="search-results-item p-3">{item.title}</p>;
          })}
      </div>
    </div>
  );
};

Search.propType = {
  list: PropTypes.array,
};

export default Search;
