import React, { useState } from 'react';

const ImageInput = ({onChange, value}) => {



    return (
        <div>
            <input 
            type="text"
            onChange={onChange}
            placeholder='Introduce your search'
            value={value} />
        </div>
    );
};

export default ImageInput;