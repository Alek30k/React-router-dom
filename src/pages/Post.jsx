const Post = () => {
  return <div>Post</div>;
};

export default Post;

export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
};
