import React from "react";
import App from "./App.js";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("App", () => {
  const wrapper = mount(<App />);

  it("should render App without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
