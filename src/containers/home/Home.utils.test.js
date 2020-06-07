import { getInitialMode, useSetLocalStorage } from "./Home.utils";
import { renderHook } from "@testing-library/react-hooks";

describe("Home.utils", () => {
  describe("getInitialMode", () => {
    it("should return false", () => {
      const initialMode = getInitialMode();

      expect(initialMode).toBeFalsy();
    });
    it("should return true if local storage has dark mode", () => {
      window.localStorage.setItem("dark", JSON.stringify(true));
      const initialMode = getInitialMode();

      expect(initialMode).toBeTruthy();
    });
  });
  describe("useSetLocalStorage", () => {
    it("should work properly", () => {
      renderHook(() => {
        useSetLocalStorage({ darkMode: true });
      });

      expect(localStorage.getItem("dark")).toEqual("true");
    });
  });
});
