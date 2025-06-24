// http://localhost:3000/blogs/1 e karşılık gelir.
export default async function Page({ params }) {
  const blog_id = (await params).id;
  return <div>Blog {blog_id}</div>;
}
