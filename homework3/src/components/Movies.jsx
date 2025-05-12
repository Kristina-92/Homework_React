import React from "react";

export const Movies = ({ movies }) => {
  return (
    <div id="movies">
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <h3>
              <span>Movie Title: </span>
              {movie.name}
            </h3>
            <img src={movie.imgUrl} alt={movie.name} width={250} height={400} />
            <p>
              <span>Released: </span>
              {movie.date}
            </p>
            <p>
              <span>Genre: </span>
              {movie.genre}
            </p>
            <p>
              <span>Plot: </span>
              {movie.plot}
            </p>
            <p>
              <span>Rating: </span>
              {movie.rating}
            </p>
            <p>
              <span>Director: </span>
              {movie.director}
            </p>
            <p>
              <span>Cast: </span>
              {movie.cast}
            </p>
            <a target="_blank" href={movie.imdbLink}>
              IMDb Movie Link
            </a>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};
