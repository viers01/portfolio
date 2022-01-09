import "./search-panel.css";
import React from "react";

const SearchPanel = (props) => {
  const searchValue = React.useRef();
  const handleSearchInput = () => {
    const currentword = searchValue.current.value.trim();
    props.handleSearchInput(currentword);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={handleSearchInput}
      ref={searchValue}
    />
  );
};

export default SearchPanel;
