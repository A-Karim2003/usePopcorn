import { useEffect, useState } from "react";
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
import Loading from "./components/Loading";

import MovieNotFound from "./components/MovieNotFound";

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

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [toggleBackbtn, setToggleBackbtn] = useState(false);
  const [query, setQuery] = useState("");

  // toggles between: "loading" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const [selectedID, setSelectedID] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    async function FetchMovies() {
      const filteredQuery = !query ? "Avengers" : query;

      if (filteredQuery.length < 3) return;

      //* set a loading state whilst data is being fetched
      setStatus("loading");

      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filteredQuery}`
        );

        if (!res.ok)
          throw new Error(
            `HTTP error! Status: ${res.status} ${res.statusText}`
          );

        const { Search } = await res.json();

        if (!Search) throw new Error("Movie Not Found :(");

        //* filtering out movies with similar IDs in O(n)
        const seen = new Set();
        const uniqueMovies = [];

        Search.forEach((movie) => {
          if (!seen.has(movie.imdbID)) {
            seen.add(movie.imdbID);
            uniqueMovies.push(movie);
          }
        });

        //* update state if no errors
        setMovies(uniqueMovies);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }

    const timeoutId = setTimeout(() => FetchMovies(), 750);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (!selectedID) return;

    async function handleSelectedMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`
      );

      const data = await res.json();
      setSelectedMovie(data);
      console.log(data);
    }

    handleSelectedMovie();
  }, [selectedID]);

  return (
    <div className="app">
      <Header movies={movies} setQuery={setQuery} query={query} />
      <Main>
        <Box className={"left"}>
          {status === "loading" && <Loading />}
          {status === "error" && <MovieNotFound />}
          {status === "success" && (
            <SearchResults movies={movies} setSelectedID={setSelectedID} />
          )}
        </Box>

        <Box className={"right"}>
          {toggleBackbtn ? (
            <WatchedMoviesSection>
              <MoviesWatchedSummary watched={watched} />
              <WatchedMovies watched={watched} />
            </WatchedMoviesSection>
          ) : (
            <MoviePreviewSection>
              <MoviePreview
                setToggleBackbtn={setToggleBackbtn}
                selectedMovie={selectedMovie}
              />
              <SelectRatings />
              <MovieDescription selectedMovie={selectedMovie} />
            </MoviePreviewSection>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
