import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageInput from "../Input/ImageInput";
import ImageButton from "../Button/ImageButton";
import Image from "../Image/Image";
import "./ImageList.css";


const ImageList = () => {
  const [image, setImages] = useState([]);
  const [termino, setTermino] = useState(() => {
    const saved = localStorage.getItem("local");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const url = "https://pixabay.com/api/";
  const API_KEY = "19774551-55ee3622621fff95a0958e798";

  // API
  const getData = async () => {
    try {
      const res = await axios.get(
        `${url}?key=${API_KEY}&q=${termino}&image_type=photo&type=photo&per_page=50`
      );
      console.log(res, "info de api");
      const allImages = res.data.hits
      setImages(allImages);
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const consultarApi = async () => {
    axios
      .get(`${url}?key=${API_KEY}&q=${termino}&image_type=photo&per_page=100`)
      .then((response) => {
         setImages(response.data.hits);
      });
    // setTermino('')
  };
  //LOCAL STORAGE

  useEffect(() => {
    const data = localStorage.getItem("local");
    setTermino(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(termino));
  }, [termino]);

  // KEY ENTER EVENT
  const listener = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      consultarApi();
    }
  };

  return (
    <div className="imageList_container">
      <div className="first_section_imageList">
        <ImageInput
          onChange={(e) => setTermino(e.target.value)}
          value={termino}
          onKeyPress={listener}
        />
        <ImageButton onClick={consultarApi} />
      </div>

      <div className="second_section_imageList">
        {image.length >= 1 &&
          image.map((user, idx) => (
            <Image
              key={user.largeImageURL}
              href={user.largeImageURL}
              src={user.largeImageURL}
              alt={user.name}
              tags={user.tags.split(',')[0]+ ','+ user.tags.split(',')[1]}
              likes={user.likes}
            />
          ))}
      </div>
      {image.length === 0 && (
        <div className="noResult_section_container">
          <p className="noResult_text">No hay ps pendejo!</p>
        </div>
      )}
    </div>
  );
};

export default ImageList;
