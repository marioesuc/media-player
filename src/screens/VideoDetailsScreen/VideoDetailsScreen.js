import React from "react";
import { Link } from "react-router-dom";
import "./VideoDetailsScreen.css";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

class VideoDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    const videoRef = React.createRef();

    return (
      <div className="VideoDetails">
        <Link className="link" to={{ pathname: "/", state: { test: "1234" } }}>
          {"< Go back"}
        </Link>
        <h1>Título</h1>
        <div className="VideoDetails-container">
          <VideoInfo videoRef={videoRef} />
          <VideoPlayer videoRef={videoRef} />
        </div>
      </div>
    );
  }
}

export default VideoDetailsScreen;
