import { useEffect, useState } from "react";
import "./App.css";
import ImageArticle from "./components/ImageArticle";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  const imagesCopy = structuredClone(images);
  const commentsCopy = structuredClone(comments);

  useEffect(() => {
    fetch("http://localhost:3005/images")
      .then((resp) => resp.json())
      .then((data) => {
        data = setImages(imagesCopy);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/comments")
      .then((resp) => resp.json())
      .then((data) => {
        data = setComments(commentsCopy);
      });
  }, []);


  return (
    <div className="App">
      {/* <!-- logo --> */}
      <img className="logo" src="assets/hoxtagram-logo.png" />

      {/* <!-- image cards --> */}
      <section className="image-container">
        {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}
        <ImageArticle imagesCopy={imagesCopy} />
      </section>
    </div>
  );
}

export default App;
