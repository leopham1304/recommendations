import { renderHook } from "@testing-library/react-hooks";
import {
  useHandleSuggestionSelected,
  filterCities,
  useHandleSearchChanged,
} from "./Autocomplete.utils";

const setSearchMock = jest.fn();
const setSuggestionsMock = jest.fn();

describe("Autocomplete.utils", () => {
  describe("useHandleSuggestionSelected", () => {
    it("should work properly", () => {
      const {
        result: { current: onSelect },
      } = renderHook(() =>
        useHandleSuggestionSelected({
          setSearch: setSearchMock,
          setSuggestions: setSuggestionsMock,
        })
      );

      onSelect();

      expect(setSearchMock).toBeCalled();
      expect(setSuggestionsMock).toBeCalled();
    });
  });

  describe("filterCities", () => {
    const cities = [
      "Ho Chi Minh",
      "Ha Noi",
      "Binh Dinh",
      "Ninh Binh",
      "Hai Phong",
      "Da Nang",
    ];

    it("should work properly", () => {
      expect(filterCities(cities, "")).toEqual([]);
      expect(filterCities(cities, "Ho Chi")).toEqual(["Ho Chi Minh"]);
    });
  });
});
