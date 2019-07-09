import React from "react";
import "./VideoInfo.css";
import Button from "../Button/Button";

class VideoInfo extends React.Component {
  handlePlayVideo = () => {
    this.props.videoRef.current.play();
    this.props.videoRef.current.requestFullscreen();
  };

  render() {
    return (
      <div className="VideoInfo-container">
        <div className="VideoInfo-description">
          <h2>Description</h2>
          <p>Description</p>
          <h2>Metadata</h2>
          <ul>
            <li>Language</li>
            <li>Release date</li>
          </ul>
        </div>
        <Button onClick={this.handlePlayVideo} />
      </div>
    );
  }
}

export default VideoInfo;
