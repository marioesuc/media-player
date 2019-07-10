import React from "react";
import { Link } from "react-router-dom";
import "./VideoDetailsScreen.css";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

class VideoDetailsScreen extends React.Component {
  render() {
    const videoRef = React.createRef();
    const videoData = this.props.location.state.item;

    return (
      <div className="VideoDetails">
        <Link className="link" to={{ pathname: "/" }}>
          {"< Go back"}
        </Link>
        <h1>{videoData.title}</h1>
        <div className="VideoDetails-container">
          <VideoInfo videoRef={videoRef} videoData={videoData} />
          <VideoPlayer
            videoRef={videoRef}
            posterPath={videoData.backdrop_path}
          />
        </div>
      </div>
    );
  }
}

export default VideoDetailsScreen;
