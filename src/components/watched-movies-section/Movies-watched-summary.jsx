import { average } from "../../utils/math";

function MoviesWatchedSummary({ watched }) {
  const avgImdbRating = average(
    watched.map((movie) => parseInt(movie.imdbRating))
  );
  const avgUserRating = average(
    watched.map((movie) => parseInt(movie.userRating))
  );
  const avgRuntime = average(watched.map((movie) => parseInt(movie.runtime)));

  return (
    <div className="Movies-watched-summary">
      <h2> MOVIES YOU WATCHED</h2>
      <div className="watched-movies-stats">
        <p>#️⃣ {watched.length} movies</p>
        <p>⭐️ {avgUserRating.toFixed(2)}</p>
        <p>🌟 {avgImdbRating}</p>
        <p>⏳ {avgRuntime} min</p>
      </div>
    </div>
  );
}

export default MoviesWatchedSummary;
