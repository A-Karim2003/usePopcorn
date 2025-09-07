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
  const [query, setQuery] = useState("");

  // toggles between: "loading" | "success" | "error"
  const [fetchMoviesStatus, setFetchMoviesStatus] = useState("idle");
  const [fetchMovieStatus, setFetchMovieStatus] = useState("idle");
  const [selectedID, setSelectedID] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function FetchMovies() {
      const filteredQuery = !query ? "Avengers" : query;

      if (filteredQuery.length < 3) return;

      //* set a loading state whilst data is being fetched
      setFetchMoviesStatus("loading");

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
        setFetchMoviesStatus("success");
      } catch (error) {
        setFetchMoviesStatus("error");
      }
    }

    const timeoutId = setTimeout(() => FetchMovies(), 750);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (!selectedID) return;

    async function handleSelectedMovie() {
      //* set loading status whilst data is being fetched
      setFetchMovieStatus("loading");

      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`
        );
        if (!res.ok)
          throw new Error(
            `HTTP error! Status: ${res.status} ${res.statusText}`
          );

        const data = await res.json();
        setSelectedMovie(data);
        setFetchMovieStatus("success");
      } catch (error) {
        setFetchMovieStatus("error");
      }
    }

    handleSelectedMovie();
  }, [selectedID]);

  return (
    <div className="app">
      <Header movies={movies} setQuery={setQuery} query={query} />
      <Main>
        <Box className={"left"}>
          {fetchMoviesStatus === "loading" && <Loading />}
          {fetchMoviesStatus === "error" && <MovieNotFound />}
          {fetchMoviesStatus === "success" && (
            <SearchResults movies={movies} setSelectedID={setSelectedID} />
          )}
        </Box>

        <Box className={"right"}>
          {selectedMovie ? (
            <MoviePreviewSection>
              {fetchMovieStatus === "loading" && <Loading />}
              {fetchMovieStatus === "success" && (
                <>
                  <MoviePreview
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                  />
                  <SelectRatings />
                  <MovieDescription selectedMovie={selectedMovie} />
                </>
              )}
            </MoviePreviewSection>
          ) : (
            <WatchedMoviesSection>
              <MoviesWatchedSummary watched={watched} />
              <WatchedMovies watched={watched} />
            </WatchedMoviesSection>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
