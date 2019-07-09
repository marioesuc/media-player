import React from "react";
import { Link } from "react-router-dom";
import { create } from "apisauce";
import "./HomeScreen.css";

const api = create({
  baseURL: "https://api.themoviedb.org",
  headers: { Accept: "application/vnd.github.v3+json" }
});

const API_KEY = "a16910bed086b5e775c155b974f13eae";

const doRequest = async (url, apiKey, params) => {
  return await api
    .get(`${url}?api_key=${apiKey}${params || ""}`)
    .catch(error => console.log(error));
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData = () => {
    const data = {};

    doRequest("/3/trending/movie/day", API_KEY).then(
      response => (data.trendingMovies = response.data.results)
    );

    doRequest("/3/trending/tv/day", API_KEY).then(
      response => (data.trendingSeries = response.data.results)
    );
    doRequest(
      "/3/discover/movie",
      API_KEY,
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"
    ).then(response => (data.family = response.data.results));
    doRequest(
      "/3/discover/movie",
      API_KEY,
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"
    ).then(response => (data.documentary = response.data.results));

    this.setState({ data });
  };

  render() {
    console.log(this.state);
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
