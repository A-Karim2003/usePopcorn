import WatchedMovie from "./Watchedmovie";

function WatchedMovies({ watched, children }) {
  return (
    <div>
      {children}
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default WatchedMovies;
