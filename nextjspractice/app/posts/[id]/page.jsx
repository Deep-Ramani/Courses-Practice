import React from 'react';
import { use } from 'react';
async function getPosts(id) {
  let post = await fetch(`https://dummyjson.com/products/${id}`);
  return post.json();
}
const page = ({ params }) => {
  let id = params.id;
  let post = use(getPosts(id));
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.description}</p>
    </div>
  );
};

export default page;
