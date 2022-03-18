import React from 'react';
import "./ImageBanner.css"

const ImageBanner = () => {

    const refreshPage = ()=>{
        window.location.reload();
     }

    return (
        <div className='banner_container'>
            <p className='banner_title' onClick={refreshPage}>Image Seeker</p>
        </div>
    );
};

export default ImageBanner;