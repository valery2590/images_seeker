import React from 'react';
import "./ImageButton.css"

const ImageButton = ({onClick}) => {
    return (
        <div className='button_container'>
            <button 
                className='button'
                onClick={onClick}>Search!</button>
        </div>
    );
};

export default ImageButton;