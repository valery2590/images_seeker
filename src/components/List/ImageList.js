import React, { useState } from 'react';
import axios from 'axios'
import ImageInput from '../Input/ImageInput';
import ImageButton from '../Button/ImageButton';
import "./ImageList.css"



const ImageList = ({onClick}) => {

const [image, setImages] = useState([])
const [termino, setTermino]= useState('')

const url = "https://pixabay.com/api/"
const API_KEY = '19774551-55ee3622621fff95a0958e798'

const consultarApi = ()=>{
    axios.get(`${url}?key=${API_KEY}&q=${termino}&image_type=photo&per_page=200`)
      .then(response=>{
          setImages(response.data.hits)
      })
  setTermino('')
}


    return (
      <div className='imageList_container'> 

      <div className='first_section_imageList'>
      <ImageInput 
              onChange={(e)=>(setTermino(e.target.value))}
              value={termino} />
        <ImageButton onClick={consultarApi} />  
      </div>
        

        <div className='second_section_imageList'>
          {image.map ((user, idx)=>
          <div className='images_search_container'>
            <a href={user.webformatURL} 
              target="_blank" rel="noreferrer" 
              className='images_search_item'>

              <img src={user.previewURL} 
                  alt={user.name} 
                  image={user} 
                  key={user.previewURL} 
                  className="image_item" 
                  />
            </a>
          
          </div>
          
        
          )}
        </div>
        
      </div>
    )}

export default ImageList;