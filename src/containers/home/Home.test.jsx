import React from "react";
import Home from "./Home";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Home", () => {
  const wrapper = mount(<Home />);

  it("should render the Home container correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
