import { useState, useMemo, useCallback } from "react";

// constants for demo
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
const useHandleSearchChange = ({ setSearch, setSuggestions }) =>
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
export const useHandleSelect = ({ setSearch, setSuggestions }) =>
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
  const handleSearchChange = useHandleSearchChange({
    setSearch,
    setSuggestions,
  });
  const handleSelect = useHandleSelect({ setSearch, setSuggestions });

  return {
    handleSearchChange,
    handleSelect,
    search,
    suggestions,
  };
};
