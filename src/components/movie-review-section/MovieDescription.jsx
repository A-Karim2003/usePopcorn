function MovieDescription({ selectedMovie }) {
  return (
    <div className="desc-container">
      <p className="desc">{selectedMovie.Plot}</p>

      <p>
        <strong>Starring: </strong>
        {selectedMovie.Actors}
      </p>

      <p>
        <strong>Directed by </strong>
        {selectedMovie.Director}
      </p>
    </div>
  );
}

export default MovieDescription;
