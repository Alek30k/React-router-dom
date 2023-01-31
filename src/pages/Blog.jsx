import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              {post.id} - {post.title}
            </Link>
          </li>
        ))
      ) : (
        <li>No blogs found</li>
      )}
    </ul>
  );
};

export default Blog;

export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "Not found",
    };

  const posts = await res.json();

  return { posts };
};
