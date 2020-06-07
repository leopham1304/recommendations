import { renderHook } from "@testing-library/react-hooks";
import { useHandleButtonClicked } from "./Landing.utils";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

describe("Landing.utils", () => {
  describe("useHandleButtonClicked", () => {
    it("should work properly", () => {
      const {
        result: { current: onButtonClick },
      } = renderHook(() => useHandleButtonClicked());

      onButtonClick();

      expect(mockPush).toBeCalled();
    });
  });
});
