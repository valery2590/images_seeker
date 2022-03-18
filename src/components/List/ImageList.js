import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ImageInput from '../Input/ImageInput';
import ImageButton from '../Button/ImageButton';
import "./ImageList.css"



const ImageList = () => {

const [image, setImages] = useState([])
const [termino, setTermino]= useState('')

const url = "https://pixabay.com/api/"
const API_KEY = '19774551-55ee3622621fff95a0958e798'

useEffect(async ()=>{
  const search = await  axios.get(`${url}?key=${API_KEY}&image_type=photo&type=photo&per_page=200`)
  setImages(search.data.hits)
},[])


const consultarApi = ()=>{
  axios.get(`${url}?key=${API_KEY}&q=${termino}&image_type=photo&per_page=21`)
    .then(response=>{
      setImages(response.data.hits)
    })
    setTermino('')
}
  
const listener = event => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    event.preventDefault();
    consultarApi();
  }
};


    return (
      <div className='imageList_container'> 

      <div className='first_section_imageList'>
      <ImageInput 
              onChange={(e)=>(setTermino(e.target.value))}
              value={termino}
              onKeyPress={listener}/>
        <ImageButton onClick={consultarApi}/>  
      </div>
        

        <div className='second_section_imageList'>
          {image.length >= 1 &&
          image.map ((user, idx)=>
          <div className='images_search_container'
            image={user} 
            key={user.largeImageURL} >
              <a href={user.largeImageURL} 
                target="_blank" rel="noreferrer" 
                className='images_search_item'
                >
              <img src={user.largeImageURL} 
                  alt={user.name} 
                  image={user} 
                  key={user.largeImageURL} 
                  className="image_item" 
                  />
              </a>
            </div>
            )}
        </div>
        {image.length === 0 &&  
              <div className='noResult_section_container'>
                <p className='noResult_text'>No hay ps pendejo!</p>
              </div>
           }
        
      </div>
    )}

export default ImageList;