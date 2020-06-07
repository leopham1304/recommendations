import React from "react";
import { Router } from "react-router-dom";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Landing from "./Landing";

describe("Landing", () => {
  const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
  const wrapper = mount(
    <Router history={historyMock}>
      <Landing />
    </Router>
  );

  it("should render the Landing correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("handleButtonClicked binds properly", () => {
    wrapper.find("button").simulate("click");
    expect(historyMock.push.mock.calls[0][0]).toEqual("/home");
  });
});
