import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies,getAllShows } from "../../Features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import '../MovieListing/movieListing.css'

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  console.log(movies);

  console.log(movies.Response === "True");
  const RenderMovies = () => {
    return movies.Response === "True" ? (
      
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
    ) : (
      <div className="movies error">
        <h3>{movies.error}</h3>
      </div>
    );
  };

  const RenderShows=()=>{
    return shows.Response === "True" ? (
      
      shows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
  ) : (
    <div className="shows error">
      <h3>{shows.error}</h3>
    </div>
  );
    

  }

  return (
    <div className="movie-Wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <RenderMovies />
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <RenderShows />
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
