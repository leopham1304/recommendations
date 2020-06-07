import React from "react";
import SuggestionItem from "./SuggestionItem";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const onSelectMock = jest.fn();

describe("SuggestionItem", () => {
  const wrapper = mount(
    <SuggestionItem onSelect={onSelectMock} suggestion="Test" />
  );

  it("should render the SuggestionItem Component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should bind onSelect properly", () => {
    wrapper.find("li").simulate("click");
    expect(onSelectMock).toBeCalled();
  });
});
