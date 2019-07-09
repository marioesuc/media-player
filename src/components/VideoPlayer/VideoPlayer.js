import React, { Component } from "react";
import shaka from "shaka-player";
import "./VideoPlayer.css";

var manifestUri =
  "http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd";

class VideoPlayer extends Component {
  componentDidMount() {
    console.log(this.props);
    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      alert("Browser not compatible");
    }
  }

  initPlayer() {
    var player = new shaka.Player(this.props.videoRef.current);

    player.addEventListener("error", this.onErrorEvent);
    player.configure("manifest.defaultPresentationDelay", 0);

    player.load(manifestUri).catch(e => console.log(e));
  }

  render() {
    return (
      <div className="VideoPlayer-container">
        <video
          ref={this.props.videoRef}
          width="100%"
          poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
        />
      </div>
    );
  }
}

export default VideoPlayer;
