import MoviesWatchedSummary from "./MoviesWatchedSummary";
import WatchedMovie from "./Watchedmovie";

function WatchedMovies({ tempWatchedData }) {
  //! temp removal
  return;
  return (
    <div>
      <MoviesWatchedSummary />
      {tempWatchedData.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default WatchedMovies;
