import React from 'react';
import "./ImageBanner.css"

const ImageBanner = () => {

    const refreshPage = ()=>{
        window.location.reload();
       window.localStorage.removeItem("local");
     }

    return (
        <div className='banner_container'>
            <p className='banner_title' onClick={refreshPage}>Image seeker</p>
        </div>
    );
};

export default ImageBanner;