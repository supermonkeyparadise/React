import React from 'react';

import Like from './common/like';

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th onClick={() => onSort('title')} scope="col">
            Title
          </th>
          <th onClick={() => onSort('genre.name')} scope="col">
            Genre
          </th>
          <th onClick={() => onSort('numberInStock')} scope="col">
            Stock
          </th>
          <th onClick={() => onSort('dailyRentalRate')} scope="col">
            Rate
          </th>
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => {
          return (
            <tr key={movie._id}>
              <th scope="row">{index + 1}</th>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onLikeToggle={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;
