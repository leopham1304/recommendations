import React, { useState, memo } from "react";
import {
  useHandleTextChanged,
  useHandleTextSelected,
} from "./Autocomplete.utils";

const Autocomplete = ({}) => {
  const items = ["Ho Chi Minh", "Ha Noi", "Binh Duong", "Ninh Binh"];
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const handleTextChanged = useHandleTextChanged({
    setSuggestions,
    setText,
    items,
  });

  const handleTextSelected = useHandleTextSelected({
    setText,
    setSuggestions,
  });

  return (
    <div>
      <input onChange={handleTextChanged} value={text} type="text" />
      <ul>
        {!!suggestions.length &&
          suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleTextSelected(suggestion)}>
              {suggestion}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default memo(Autocomplete);
