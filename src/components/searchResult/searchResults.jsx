import SearchResult from "./SearchResult";

function SearchResults({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <SearchResult key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default SearchResults;
