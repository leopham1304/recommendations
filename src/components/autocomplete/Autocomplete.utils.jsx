import React, { useCallback } from "react";
import { debounce } from "../../utils";

// export const useHandleTextChanged = ({ setSuggestions, setText, items }) =>
//   useCallback(
//     debounce((e) => {
//       const {
//         target: { value },
//       } = e;
//       let suggestions = [];

//       if (value && value.length > 0) {
//         const newVal = value.trim().toUpperCase();
//         suggestions = items
//           .sort()
//           .filter((eachItem) => eachItem.toUpperCase().includes(newVal));
//       }

//       setSuggestions(suggestions);
//       setText(value);
//     }, 300),
//     [setSuggestions, items]
//   );

export const useHandleTextChanged = ({ setSuggestions, setText, items }) => {
  const debounceTextHandler = useCallback(
    debounce((e) => {
      const {
        target: { value },
      } = e;
      let suggestions = [];

      if (value && value.length > 0) {
        const newVal = value.trim().toUpperCase();
        suggestions = items
          .sort()
          .filter((eachItem) => eachItem.toUpperCase().includes(newVal));
      }

      setSuggestions(suggestions);
    }, 300),
    [setSuggestions, items]
  );

  return useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      e.persist();
      setText(value);
      debounceTextHandler(e);
    },
    [debounceTextHandler]
  );
};
// export const useHandleTextChanged = ({ setSuggestions, setText, items }) => {
//   const debouncedSetSuggestions = debounce(setSuggestions, 500);

//   return useCallback(
//     (value) => {
//       let suggestions = [];

//       if (value && value.length > 0) {
//         console.log("test");
//         const newVal = value.trim().toUpperCase();
//         suggestions = items
//           .sort()
//           .filter((eachItem) => eachItem.toUpperCase().includes(newVal));
//       }

//       setText(value);
//       debouncedSetSuggestions(suggestions);
//     },
//     [setSuggestions, setText, items]
//   );
// };

export const useHandleTextSelected = ({ setSuggestions, setText }) =>
  useCallback(
    (value) => {
      setText(value);
      setSuggestions([]);
    },
    [setSuggestions, setText]
  );
