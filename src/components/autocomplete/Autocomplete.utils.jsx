import { useState, useMemo, useCallback } from "react";

// cities constant for demo, can be a larger list or fetch data from API
const cities = [
  "Ho Chi Minh",
  "Ha Noi",
  "Binh Dinh",
  "Ninh Binh",
  "Hai Phong",
  "Da Nang",
];

// filtering cities based on keyword
export const filterCities = (cities, keyword) =>
  !keyword
    ? []
    : cities.filter((country) =>
        country.toLowerCase().includes(keyword.toLowerCase())
      );

// debounce the search change event so that it only shows suggestions after user stops typing
export const useHandleSearchChanged = ({ setSearch, setSuggestions }) =>
  useMemo(() => {
    let timerId;
    return (e) => {
      const value = e.target.value;
      setSearch(value);
      clearTimeout(timerId);
      timerId = setTimeout(
        () => setSuggestions(filterCities(cities, value)),
        300
      );
    };
  }, [setSearch, setSuggestions]);

// handle select event
export const useHandleSuggestionSelected = ({ setSearch, setSuggestions }) =>
  useCallback(
    (suggestion) => {
      setSearch(suggestion);
      setSuggestions([]);
    },
    [setSearch, setSuggestions]
  );

// wrap state and handlers
export const useAutoComplete = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSearchChanged = useHandleSearchChanged({
    setSearch,
    setSuggestions,
  });
  const handleSuggestionSelected = useHandleSuggestionSelected({
    setSearch,
    setSuggestions,
  });

  return {
    handleSearchChanged,
    handleSuggestionSelected,
    search,
    suggestions,
  };
};
