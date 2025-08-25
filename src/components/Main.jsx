import Box from "./Box";
import SearchResult from "./SearchResult";
import WatchedMovies from "./watched-movies-section/WatchedMovies";
import MoviePreview from "./MoviePreview/MoviePreview";
import SelectRatings from "./MoviePreview/SelectRatings";
import MovieDescription from "./MoviePreview/MovieDescription";

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

        <MoviePreview />
        <SelectRatings />
        <MovieDescription />
      </Box>
    </main>
  );
}

export default Main;
