import React from 'react';

const ImageButton = ({onClick}) => {
    return (
        <div>
            <button 
                onClick={onClick}>Search!</button>
        </div>
    );
};

export default ImageButton;