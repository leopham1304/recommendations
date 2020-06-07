import React from "react";
import NavigationBar from "./NavigationBar";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("NavigationBar", () => {
  const wrapper = shallow(<NavigationBar />);

  it("should render the NavigationBar Component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
