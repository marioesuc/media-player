import React from "react";
import { Link } from "react-router-dom";
import { create } from "apisauce";
import "./HomeScreen.css";

const api = create({
  baseURL: "https://api.themoviedb.org",
  headers: { Accept: "application/vnd.github.v3+json" }
});

const API_KEY = "a16910bed086b5e775c155b974f13eae";

const doRequest = (url, apiKey, params) =>
  api.get(`${url}?api_key=${apiKey}${params || ""}`);

class HomeScreen extends React.Component {
  componentDidMount() {
    doRequest("/3/trending/movie/day", API_KEY).then(response =>
      console.log(response)
    );
    doRequest("/3/trending/tv/day", API_KEY).then(response =>
      console.log(response)
    );
    doRequest(
      "/3/discover/movie",
      API_KEY,
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"
    ).then(response => console.log(response));
    doRequest(
      "/3/discover/movie",
      API_KEY,
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"
    ).then(response => console.log(response));
  }

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
