import React from 'react';

const BlogDetails = ({blog}) => {
  const {id,question,answer}=blog;
  return (
    <div>
      <div>
        <h2>{question}</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default BlogDetails;