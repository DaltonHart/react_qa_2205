import React from "react";

function SearchForm(props) {
  return (
    <form>
      <input type='text' placeholder='rock' onChange={props.handleSearch} />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchForm;
