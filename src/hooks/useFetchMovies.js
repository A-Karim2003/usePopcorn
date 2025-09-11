import { useState, useEffect } from "react";

export function useFetchMovies(query, API_KEY) {
  const [movies, setMovies] = useState([]);
  // toggles between: "loading" | "success" | "error"
  const [fetchMoviesStatus, setFetchMoviesStatus] = useState("idle");

  useEffect(() => {
    async function fetchMovies() {
      if (query.length < 3) return;

      //* set a loading state whilst data is being fetched
      setFetchMoviesStatus("loading");

      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
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

    const timeoutId = setTimeout(() => fetchMovies(), 750);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { movies, fetchMoviesStatus };
}
