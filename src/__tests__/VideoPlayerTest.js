import React from "react";
import { shallow, configure } from "enzyme";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("VideoPlayer", () => {
  const videoRef = React.createRef();

  const poster_path = "url_path";

  it("renders correctly", () => {
    const wrapper = shallow(
      <VideoPlayer videoRef={videoRef} poster_path={poster_path} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
