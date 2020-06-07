import React from "react";
import Routes from "./";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Routes", () => {
  const wrapper = shallow(<Routes />);

  it("should render Routes without crashing", () => {
    expect(toJson(Routes)).toMatchSnapshot();
  });
});
