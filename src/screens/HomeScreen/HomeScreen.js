import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>HomeScreen</p>
          <Link to={{ pathname: "VideoDetails", state: { test: "1234" } }}>
            Learn React
          </Link>
        </header>
      </div>
    );
  }
}

export default HomeScreen;
