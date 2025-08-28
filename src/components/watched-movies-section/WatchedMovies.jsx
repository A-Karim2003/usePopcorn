import WatchedMovie from "./Watchedmovie";

function WatchedMovies({ watched }) {
  return (
    <div>
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default WatchedMovies;
