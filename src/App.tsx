import { useEffect, useState } from "react";
import "./App.css";
import ImageArticle from "./components/ImageArticle";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  const imagesCopy = structuredClone(images);

  useEffect(() => {
    fetch("http://localhost:3005/images")
      .then((resp) => resp.json())
      .then((data) => {
        data = setImages(imagesCopy);
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
