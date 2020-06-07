import { renderHook } from "@testing-library/react-hooks";
import { useHandleSelect } from "./SuggestionItem.utils";

const onSelectMock = jest.fn();

describe("SuggestionItem.utils", () => {
  describe("useHandleSelect", () => {
    it("should work properly", () => {
      const {
        result: { current: onSelect },
      } = renderHook(() =>
        useHandleSelect({ onSelect: onSelectMock, suggestion: "test" })
      );

      onSelect();

      expect(onSelectMock).toBeCalled();
    });
  });
});
