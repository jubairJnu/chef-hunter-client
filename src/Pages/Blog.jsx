import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <div>
      {
        blogs.map(blog=> <BlogDetails key={blog.id}
        blog={blog}></BlogDetails>)
      }
    </div>
  );
};

export default Blog;