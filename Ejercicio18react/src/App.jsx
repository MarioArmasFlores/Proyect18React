import "./App.css";
import Imgs from "./assets/Imgs";
import { useState } from "react";

function App() {
  const [arrayImages, setArrayImages] = useState([
    { title: "Imagen 1", img: Imgs.img1, id: "1" },
    { title: "Imagen 2", img: Imgs.img2, id: "2" },
    { title: "Imagen 3", img: Imgs.img3, id: "3" },
  ]);

  const [imageSelected, setImageSelected] = useState(null);

  const onClickHandler = (image) => {
    setImageSelected(image);
  };

  const deleteElement = (imageId) => {
    const updatedImages = arrayImages.filter((image) => image.id !== imageId);
    setArrayImages(updatedImages);
    setImageSelected(null);
  };

  return (
    <div>
      <h1>Imagenes guardadas.</h1>
      <div>
        {arrayImages.map((image) => {
          return (
            <div key={image.id} className="alignLink">
              <h4 onClick={() => onClickHandler(image)}>{image.title}</h4>
              <button onClick={() => deleteElement(image.id)} className="buttonDelete"> X </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>cabina Imagen</h1>
        <div className="beforePicture">
          {imageSelected && (
            <img src={imageSelected.img} alt={imageSelected.title} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
