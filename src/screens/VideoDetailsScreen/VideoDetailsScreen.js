import React from "react";
import "./VideoDetailsScreen.css";

class VideoDetailsScreen extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <p>Video Details</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default VideoDetailsScreen;
