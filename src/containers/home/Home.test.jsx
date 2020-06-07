import React from "react";
import Home from "./Home";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Home", () => {
  const wrapper = shallow(<Home />);

  it("should render the Home correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
