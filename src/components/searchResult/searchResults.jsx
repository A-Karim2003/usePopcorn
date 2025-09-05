import SearchResult from "./SearchResult";

function SearchResults({ movies, setSelectedID }) {
  return (
    <div>
      {movies.map((movie) => (
        <SearchResult
          key={movie.imdbID}
          movie={movie}
          setSelectedID={setSelectedID}
        />
      ))}
    </div>
  );
}

export default SearchResults;
