import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/Main";

import Box from "./components/Box";
import WatchedMovies from "./components/watched-movies-section/WatchedMovies";
import MoviePreview from "./components/movie-review-section/MoviePreview";
import SelectRatings from "./components/movie-review-section/SelectRatings";
import MovieDescription from "./components/movie-review-section/MovieDescription";
import SearchResults from "./components/searchResult/searchResults";
import MoviesWatchedSummary from "./components/watched-movies-section/Movies-watched-summary";
import WatchedMoviesSection from "./components/watched-movies-section/./WatchedMoviesSection";
import MoviePreviewSection from "./components/movie-review-section/MoviePreviewSection";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const API_KEY = import.meta.env.VITE_OMDB_KEY;

console.log(API_KEY); // just to check

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [toggleBackbtn, setToggleBackbtn] = useState(false);

  return (
    <div className="app">
      <Header movies={movies} />
      <Main>
        <Box className={"left"}>
          <SearchResults movies={movies} />
        </Box>

        <Box className={"right"}>
          {toggleBackbtn ? (
            <WatchedMoviesSection>
              <MoviesWatchedSummary watched={watched} />
              <WatchedMovies watched={watched} />
            </WatchedMoviesSection>
          ) : (
            <MoviePreviewSection>
              <MoviePreview setToggleBackbtn={setToggleBackbtn} />
              <SelectRatings />
              <MovieDescription />
            </MoviePreviewSection>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
