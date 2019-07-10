import React, { Component } from "react";
import shaka from "shaka-player";
import muxjs from "mux.js";
import "./VideoPlayer.css";
import { IMG_BASE_URL } from "../Carousel/Carousel";

var manifestUri =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

// Video player component that handles all logic for initializing the video
class VideoPlayer extends Component {
  componentDidMount() {
    // Load Mux.js library that transmuxes the HLS segments into fMP4
    window.muxjs = muxjs;

    // Install polyfills to support compatibilities on old/incompatible browsers
    shaka.polyfill.installAll();

    // Check if the browser is supported and play the video
    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      alert("Browser not compatible");
    }
  }

  initPlayer() {
    // Point player to the passed reference
    var player = new shaka.Player(this.props.videoRef.current);

    // Adds listener for errors treatment
    player.addEventListener("error", this.onErrorEvent);
    player.configure("manifest.defaultPresentationDelay", 0);

    // Load the manifest URL
    player.load(manifestUri).catch(e => console.log(e));
  }

  render() {
    const { videoRef, posterPath } = this.props;

    return (
      <div className="VideoPlayer-container">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          poster={`${IMG_BASE_URL}${posterPath}`}
          controls
        />
      </div>
    );
  }
}

export default VideoPlayer;
