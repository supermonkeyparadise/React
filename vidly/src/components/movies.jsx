import React, { Component } from 'react';

import { getMovies, deleteMovie } from './../services/fakeMovieService';

class Movies extends Component {
  // 不應該在這裡初始化
  state = { movies: getMovies() };

  handleDelete = movie => {
    // deleteMovie(movie._id);
    // this.setState({ movies: getMovies() });

    const movies = this.state.movies.filter(m => m._id !== movie._id);

    // overwrite movies 屬性的值
    // this.setState({ movies: movies });
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Show {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => {
              return (
                <tr key={movie._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
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
      </React.Fragment>
    );
  }
}

export default Movies;
