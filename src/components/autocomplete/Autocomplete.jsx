import React, { useState, memo } from "react";
import { useHandleChangeText } from "./Autocomplete.utils";

const Autocomplete = ({}) => {
  const items = ["Ho Chi Minh", "Ha Noi", "Binh Duong", "Ninh Binh"];
  const [suggestions, setSuggestions] = useState([]);

  const handleChangeText = useHandleChangeText({ setSuggestions, items });

  const renderSuggestions = () => {
    if (!suggestions.length) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input onChange={(e) => handleChangeText(e.target.value)} type="text" />
      {renderSuggestions()}
    </div>
  );
};

export default memo(Autocomplete);
