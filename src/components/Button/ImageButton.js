import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import "./ImageButton.css"

const ImageButton = ({onClick, ref , onSubmit}) => {

 
    return (
        <div className='button_container'>
          
            <button 
                className='button'
                onClick={onClick}
                ref={ref}
                type="submit"
                >Search!</button>
          
          
        </div>
    );
};

export default ImageButton;