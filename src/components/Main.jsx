import Box from "./Box";
import SearchResult from "./SearchResult";
import WatchedMovies from "./watched-movies-section/WatchedMovies";
import MovieDetailts from "../components/movieDetailts/MovieDetailts";

function Main({ movieData, tempWatchedData }) {
  return (
    <main>
      <Box className={"left"}>
        {movieData.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
      </Box>

      <Box className={"right"}>
        <WatchedMovies tempWatchedData={tempWatchedData} />

        <MovieDetailts />

        <SelectRatings />
      </Box>
    </main>
  );
}

export default Main;
