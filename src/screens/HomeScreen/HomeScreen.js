import React from "react";
import "./HomeScreen.css";
import Carousel from "../../components/Carousel/Carousel";

const API_KEY = "a16910bed086b5e775c155b974f13eae";

// Main screen
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      trendingMovies: [],
      trendingSeries: [],
      family: [],
      documentaries: []
    };
  }

  componentDidMount() {
    // Fetch trending movies
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            trendingMovies: result.results
          });
        },
        error => console.log(error)
      );

    // Fetch trending series
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            trendingSeries: result.results
          });
        },
        error => console.log(error)
      );

    // Fetch genre family
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            family: result.results
          });
        },
        error => console.log(error)
      );

    // Fetch genre documentary
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            documentaries: result.results
          });
        },
        error => console.log(error)
      );
  }

  render() {
    const {
      trendingMovies,
      trendingSeries,
      family,
      documentaries
    } = this.state;

    return (
      <div className="Home">
        <h1>Media Player</h1>
        <Carousel title="Popular Movies" data={trendingMovies} />
        <Carousel title="Popular TV Series" data={trendingSeries} />
        <Carousel title="Family" data={family} />
        <Carousel title="Documentaries" data={documentaries} />
      </div>
    );
  }
}

export default HomeScreen;
