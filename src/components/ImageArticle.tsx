import ImageItem from "./ImageItem";
export default function Posts({ post, postComments }: any) {
  return (
    <article className="image-card">
      <h2 className="title">{post.title}</h2>
      <img src={post.image} className="image" />
      <div className="likes-section">
        <span className="likes">{post.likes} likes</span>
        <button className="like-button">♥</button>
      </div>
      <ul className="comments">
        {postComments.map((comments: any) => (
          <ImageItem comments={comments} />
        ))}
      </ul>
    </article>
  );
}
