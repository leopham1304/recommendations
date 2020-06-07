import React, { memo } from "react";
import { useAutoComplete } from "./Autocomplete.utils";
import SuggestionItem from "./suggestion-item/SuggestionItem";
import PropTypes from "prop-types";
import "./Autocomplete.scss";

const Autocomplete = ({ darkMode }) => {
  const {
    handleSearchChanged,
    handleSuggestionSelected,
    search,
    suggestions,
  } = useAutoComplete();

  return (
    <div className={darkMode ? "autocomplete dark-mode" : "autocomplete"}>
      <input
        onChange={handleSearchChanged}
        placeholder="Try Vietnam"
        value={search}
      />
      {!!suggestions.length && (
        <ul>
          {suggestions.map((suggestion) => (
            <SuggestionItem
              key={suggestion}
              onSelect={handleSuggestionSelected}
              suggestion={suggestion}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default memo(Autocomplete);
