import React, { memo } from "react";
import { useAutoComplete } from "./Autocomplete.utils";
import SuggestionItem from "./suggestion-item/SuggestionItem";
import "./Autocomplete.scss";

const Autocomplete = () => {
  const {
    handleSearchChange,
    handleSelect,
    search,
    suggestions,
  } = useAutoComplete();

  return (
    <div className="autocomplete">
      <input
        onChange={handleSearchChange}
        placeholder="Try Vietnam"
        value={search}
      />
      {!!suggestions.length && (
        <ul>
          {suggestions.map((suggestion) => (
            <SuggestionItem
              key={suggestion}
              onSelect={handleSelect}
              suggestion={suggestion}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Autocomplete);
