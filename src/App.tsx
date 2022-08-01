import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [comments,setComments] = useState([])

  

    const imagesCopy = structuredClone(images)
    
    useEffect(() => {
      fetch("http://localhost:3005/images")
        .then((resp) => resp.json())
        .then((data) => {
          data = setImages(imagesCopy);
        });
    }, []);
  

  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />

      {/* <!-- image cards --> */}
      <section className="image-container">
        {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}

        <article className="image-card">
          <h2 className="title">{imagesCopy.title}</h2>
          <img src={imagesCopy.image} className="image" />
          <div className="likes-section">
            <span className="likes">{imagesCopy.likes} likes</span>
            <button className="like-button">♥</button>
          </div>
          <ul className="comments">
            <li></li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default App;
