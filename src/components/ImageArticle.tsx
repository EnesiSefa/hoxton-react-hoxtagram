export default function Image ({imagesCopy}){
    return ( 
    <article className="image-card">
    <h2 className="title">Title of image goes here</h2>
    <img src="./assets/image-placeholder.jpg" className="image" />
    <div className="likes-section">
      <span className="likes">0 likes</span>
      <button className="like-button">♥</button>
    </div>
    <ul className="comments">
      {imagesCopy.map((images: any) => (
        <li>{images.title}</li>
      ))}
    </ul>
  </article>)
}