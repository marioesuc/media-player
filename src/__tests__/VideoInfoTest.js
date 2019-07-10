import React from "react";
import { shallow, configure } from "enzyme";
import VideoInfo from "../components/VideoInfo/VideoInfo";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("VideoInfo", () => {
  const videoRef = React.createRef();

  const videoData = {
    adult: false,
    backdrop_path: "/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg",
    genre_ids: (4)[(28, 878, 53, 12)],
    id: 399579,
    original_language: "en",
    original_title: "Alita: Battle Angel",
    overview:
      "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
    popularity: 206.119,
    poster_path: "/xRWht48C2V8XNfzvPehyClOvDni.jpg",
    release_date: "2019-01-31",
    title: "Alita: Battle Angel",
    video: false,
    vote_average: 6.7,
    vote_count: 2318
  };

  it("renders correctly", () => {
    const wrapper = shallow(
      <VideoInfo videoRef={videoRef} videoData={videoData} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
