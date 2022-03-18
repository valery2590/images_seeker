import React from 'react';
import "./ImageInput.css"

const ImageInput = ({onChange, value, onKeyPress}) => {

   

    return (
        <div className='input_container'>
            <input 
            type="text"
            onChange={onChange}
            placeholder='Seek your next favourite image'
            value={value}
            className="input"
           onKeyPress={onKeyPress}
            />
        </div>
    );
};

export default ImageInput;