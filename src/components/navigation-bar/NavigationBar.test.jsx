import React from "react";
import NavigationBar from "./NavigationBar";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const mockSetDarkMode = jest.fn();

describe("NavigationBar", () => {
  const wrapper = mount(
    <NavigationBar darkMode={false} setDarkMode={mockSetDarkMode} />
  );

  it("should render the NavigationBar Component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should bind the onChange of input correctly", () => {
    wrapper.find("input").simulate("change", {});
    expect(mockSetDarkMode).toBeCalled();
  });
});
