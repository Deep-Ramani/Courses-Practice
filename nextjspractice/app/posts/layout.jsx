import { use } from 'react';
import Link from 'next/link';
async function getPosts() {
  let posts = await fetch('https://dummyjson.com/products');
  return posts.json();
}

const layout = ({ children }) => {
  let { products: posts } = use(getPosts());
  return (
    <div>
      <ul>
        {posts.map((p) => {
          return (
            <li key={p.id}>
              <Link href={`/posts/${p.id}`}>{p.title}</Link>
            </li>
          );
        })}
      </ul>

      <div>{children}</div>
    </div>
  );
};

export default layout;
