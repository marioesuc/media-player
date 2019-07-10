import React from "react";
import "./VideoInfo.css";
import Button from "../Button/Button";

class VideoInfo extends React.Component {
  handlePlayVideo = () => {
    this.props.videoRef.current.play();
    this.props.videoRef.current.requestFullscreen();
  };

  render() {
    const {
      original_language,
      overview,
      release_date,
      first_air_date
    } = this.props.videoData;

    return (
      <div className="VideoInfo-container">
        <div className="VideoInfo-description">
          <h2>Description</h2>
          <p>{overview}</p>
          <br />
          <h2>Metadata</h2>
          <ul>
            <li>
              <span>
                <u>Language:</u> {`${original_language}`}
              </span>
            </li>
            <li>
              <span>
                <u>Release date:</u> {`${release_date || first_air_date}`}
              </span>
            </li>
          </ul>
        </div>
        <Button onClick={this.handlePlayVideo} text="Watch Movie" />
      </div>
    );
  }
}

export default VideoInfo;
