import React, { useState } from 'react';

const ImageInput = ({onChange, value, className}) => {



    return (
        <div className={className}>
            <input 
            type="text"
            onChange={onChange}
            placeholder='Introduce your search'
            value={value}
            />
        </div>
    );
};

export default ImageInput;