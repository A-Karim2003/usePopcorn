import WatchedMovie from "./Watchedmovie";

function WatchedMovies({ watched, setWatched }) {
  function removeMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <div>
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          removeMovie={removeMovie}
        />
      ))}
    </div>
  );
}

export default WatchedMovies;
