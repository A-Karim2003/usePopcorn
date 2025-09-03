import SearchResult from "./SearchResult";
import Loading from "./Loading";

function SearchResults({ movies }) {
  return (
    <div>
      {<Loading /> ||
        movies.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
}

export default SearchResults;
