import MoviesWatchedSummary from "./MoviesWatchedSummary";
import WatchedMovie from "./Watchedmovie";

function WatchedMovies({ watchedMovies }) {
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
