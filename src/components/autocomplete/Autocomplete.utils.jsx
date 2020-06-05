import React, { useCallback } from "react";
import { debounce } from "../../utils";

export const useHandleChangeText = ({ setSuggestions, items }) =>
  useCallback(
    debounce((value) => {
      let suggestions = [];

      if (value && value.length > 0) {
        const newVal = value.trim().toUpperCase();
        suggestions = items
          .sort()
          .filter((eachItem) => eachItem.toUpperCase().includes(newVal));
      }

      setSuggestions(suggestions);
    }, 500),
    [setSuggestions, items]
  );
