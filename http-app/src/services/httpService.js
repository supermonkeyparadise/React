import axios from 'axios';

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

  // go expected errors -> 由個別的 httpService 處理
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
