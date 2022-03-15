import React, { useState } from 'react';
import "./ImageInput.css"

const ImageInput = ({onChange, value, className}) => {



    return (
        <div className='input_container'>
            <input 
            type="text"
            onChange={onChange}
            placeholder='Seek your next favourite image'
            value={value}
            className="input"
            />
        </div>
    );
};

export default ImageInput;