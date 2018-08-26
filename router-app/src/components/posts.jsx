import React from 'react';

const Posts = ({ match }) => {
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
