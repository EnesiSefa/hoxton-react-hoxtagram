import { useEffect, useState } from "react";
import "./App.css";
import ImageArticle from "./components/ImageArticle";

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => {
        setImages(imagesFromServer);
        console.log(imagesFromServer);
      });
  }, []);
 
 
  useEffect(() => {
    fetch("http://localhost:3005/comments")
      .then((resp) => resp.json())
      .then((commentsFromServer) => {
        setComments(commentsFromServer);
        console.log(commentsFromServer);
      });
  }, []);

  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />

      <section className="image-container">
        {images.map((image) => (
          <ImageArticle  post={image} postComments={comments}/>
        ))}
      </section>
    </div>
  );
}

export default App;
