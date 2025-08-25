import Box from "./Box";
import SearchResult from "./SearchResult";
import WatchedMovies from "./watched-movies-section/WatchedMovies";

function Main({ movieData, tempWatchedData }) {
  return (
    <main>
      <Box className={"left"}>
        {movieData.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
      </Box>

      <Box className={"right"}>
        {tempWatchedData.map((movie) => (
          <WatchedMovies key={movie.imdbID} movie={movie} />
        ))}
      </Box>
    </main>
  );
}

export default Main;
