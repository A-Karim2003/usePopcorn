import Box from "./Box";
import SearchResult from "./SearchResult";
import WatchedMovies from "./watched-movies-section/WatchedMovies";

function Main({ movieData }) {
  return (
    <main>
      <Box className={"left"}>
        {movieData.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
      </Box>
      <Box className={"right"}>
        <WatchedMovies />
      </Box>
    </main>
  );
}

export default Main;
