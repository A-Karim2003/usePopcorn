import { average } from "../../utils/math";

function MoviesWatchedSummary({ watched }) {
  console.log(watched);

  const avgImdbRating = average(
    watched.map((movie) => Number(movie.imdbRating))
  );

  const avgUserRating = average(
    watched.map((movie) => Number(movie.userRating))
  );

  const avgRuntime = average(watched.map((movie) => parseInt(movie.runtime)));

  // console.log("Average Rating:", avgImdbRating);
  // console.log("Average user rating:", avgUserRating);
  // console.log("Average watch time:", avgRuntime);

  return (
    <div className="Movies-watched-summary">
      <h2> MOVIES YOU WATCHED</h2>
      <div className="watched-movies-stats">
        <p>#️⃣ {watched.length} movies</p>
        <p>⭐️ {avgUserRating.toFixed(2)}</p>
        <p>🌟 {avgImdbRating.toFixed(2)}</p>
        <p>⏳ {avgRuntime.toFixed(2)} min</p>
      </div>
    </div>
  );
}

export default MoviesWatchedSummary;
