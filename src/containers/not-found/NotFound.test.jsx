import React from "react";
import NotFound from "./NotFound";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("NotFound", () => {
  const wrapper = shallow(<NotFound />);

  it("should render the NotFound correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
