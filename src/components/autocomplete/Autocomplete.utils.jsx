import { useState, useMemo, useCallback } from "react";

const cities = [
  "Ho Chi Minh",
  "Ha Noi",
  "Binh Dinh",
  "Ninh Binh",
  "Hai Phong",
  "Da Nang",
];

const filterCities = (cities, keyword) =>
  !keyword
    ? []
    : cities.filter((country) =>
        country.toLowerCase().includes(keyword.toLowerCase())
      );

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

const useHandleSelect = ({ setSearch, setSuggestions }) =>
  useCallback(
    (suggestion) => {
      setSearch(suggestion);
      setSuggestions([]);
    },
    [setSearch, setSuggestions]
  );

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
