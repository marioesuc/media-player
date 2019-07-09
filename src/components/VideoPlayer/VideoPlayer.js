import React, { Component } from "react";
import shaka from "shaka-player";
import muxjs from "mux.js";
import "./VideoPlayer.css";

var manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

class VideoPlayer extends Component {
  componentDidMount() {
    // Load Mux.js library that transmuxes the HLS segments into fMP4
    window.muxjs = muxjs;

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
          height="100%"
          poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
        />
      </div>
    );
  }
}

export default VideoPlayer;
