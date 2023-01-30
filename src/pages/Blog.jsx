const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;

export const loaderBlog = async (path) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { posts };
};
