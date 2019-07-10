import React from "react";
import { shallow, configure } from "enzyme";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomeScreen />);

    expect(wrapper).toMatchSnapshot();
  });
});
