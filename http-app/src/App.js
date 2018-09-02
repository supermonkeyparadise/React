import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

axios.interceptors.response.use(null, error => {
  console.log('>>> INTERCEPTOR CALLED');
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log('>>> Logging the error', error);

    alert('An Unexpected error occurred.');
  }

  // go expected errors
  return Promise.reject(error);
});

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    // pending -> resolved (success) OR rejected (failure)
    // const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log('>>> promise:', promise);
    // const response = await promise;
    // console.log('>>> response:', response);

    const { data: posts } = await axios.get(apiEndpoint);

    console.log('>>> posts:', posts);

    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: 'a', body: 'b' };
    const { data: post } = await axios.post(apiEndpoint, obj);

    console.log('>>> post:', post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = 'UPDATED';
    const { data } = await axios.put(`${apiEndpoint}/${post.id}`, post);
    // axios.patch(`${apiEndpoint}/${post.id}`, { title: post.id });

    console.log('>>> put:', data);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  // 樂觀刪除
  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(`${apiEndpoint}/${post.id}`, post);
    } catch (ex) {
      console.log('>>> HANDLE DELETE CATCH BLOCK');

      // Expected Errors
      if (ex.response && ex.response.status === 404)
        alert('This post has already been deleted.');

      // 回復變更
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
