import { average } from "../../utils/math";

function MoviesWatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="Movies-watched-summary">
      <h2> MOVIES YOU WATCHED</h2>
      <div className="watched-movies-stats">
        <p>#️⃣ 4 movies</p>
        <p>⭐️ 8.05</p>
        <p>🌟 9.75</p>
        <p>⏳ 106.5 min</p>
      </div>
    </div>
  );
}

export default MoviesWatchedSummary;
