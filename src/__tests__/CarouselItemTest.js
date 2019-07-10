import React from "react";
import { shallow, configure } from "enzyme";
import CarouselItem from "../components/CarouselItem/CarouselItem";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CarouselItem", () => {
  const props = {
    title: "title",
    imgSrc: "url_path"
  };

  it("renders correctly", () => {
    const wrapper = shallow(<CarouselItem {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
