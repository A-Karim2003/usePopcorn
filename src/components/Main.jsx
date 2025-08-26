import Box from "./Box";
import SearchResult from "./SearchResult";
import WatchedMovies from "./watched-movies-section/WatchedMovies";
import MoviePreview from "./MoviePreview/MoviePreview";
import SelectRatings from "./MoviePreview/SelectRatings";
import MovieDescription from "./MoviePreview/MovieDescription";
import { useState } from "react";

function Main({ movies, tempWatchedData }) {
  // function to show/hide search results & watched results
  const [toggle, setToggle] = useState(false);

  function onToggleBtn() {
    console.log("Success");
  }

  return (
    <main>
      <Box className={"left"}>
        {movies.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
      </Box>

      <Box className={"right"} onToggleBtn={onToggleBtn}>
        <WatchedMovies tempWatchedData={tempWatchedData} />

        <MoviePreview />
        <SelectRatings />
        <MovieDescription />
      </Box>
    </main>
  );
}

export default Main;
