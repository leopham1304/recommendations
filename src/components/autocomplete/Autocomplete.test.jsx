import React from "react";
import Autocomplete from "./Autocomplete";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

// Cache original functionality
const realUseState = React.useState;

// Mock useState before rendering component
jest
  .spyOn(React, "useState")
  .mockImplementationOnce(() => realUseState("Ho"))
  .mockImplementationOnce(() => realUseState(["Ho Chi Minh"]));

describe("Autocomplete", () => {
  const wrapper = shallow(<Autocomplete darkMode={false} />);

  it("should render the Autocomplete Component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
