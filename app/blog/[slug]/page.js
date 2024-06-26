export default function BlogPostPage({params}) {
  return (
    <>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </>
  )
}