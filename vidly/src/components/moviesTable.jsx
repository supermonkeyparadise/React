import React, { Component } from 'react';

import Like from './common/like';

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th onClick={() => this.raiseSort('title')} scope="col">
              Title
            </th>
            <th onClick={() => this.raiseSort('genre.name')} scope="col">
              Genre
            </th>
            <th onClick={() => this.raiseSort('numberInStock')} scope="col">
              Stock
            </th>
            <th onClick={() => this.raiseSort('dailyRentalRate')} scope="col">
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
                  <Like
                    liked={movie.liked}
                    onLikeToggle={() => onLike(movie)}
                  />
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
  }
}

export default MoviesTable;
