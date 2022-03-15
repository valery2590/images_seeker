import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ImageInput from './ImageInput';
import ImageButton from './ImageButton';



const ImageList = (props) => {

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
      <div> 
        <ImageInput 
              onChange={(e)=>(setTermino(e.target.value))}
              value={termino} />
        <ImageButton onClick={consultarApi} />

        <div>
          {image.map ((user, idx)=>
          <div>
            <a href={user.webformatURL} target="_blank">
            <img src={user.previewURL} alt={user.name} image={user} key={user.previewURL}/>
            </a>
              <p image={user} key={user.tags}>tags: {user.tags}</p>
              <p image={user} key={user.likes}>Likes {user.likes} </p>
          </div>
        
          )}
        </div>
        
      </div>
    )}

export default ImageList;