import React from 'react';
import queryString from 'query-string';

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log('>>> query str obj:', result);

  return (
    <div>
      <h1>Posts</h1>
      Year:&nbsp;
      {match.params.year}, Month:&nbsp;
      {match.params.month}
    </div>
  );
};

export default Posts;
