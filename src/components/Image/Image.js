import React from "react";
import "./Image.css";

const Image = ({ src, alt, href, key, tags, likes }) => {
  return (
    <div className="image__container" key={key}>
        
        <a
            href={href}
            className="aReference_container"
            target="_blank"
            rel="noreferrer"
                >
            <img className="image__component"
                src={src} 
                alt={alt} 
                key={key}/>
            <div className="text_image_component">
                    <p className="tag_text">
                    <span role="img" aria-label="tags" className="emoji">
                        🏷️</span>
                    {tags}
                    </p>
                    <p className="like_text">
                    <span role="img" aria-label="likes" className="emoji">
                    👍</span> 
                    {likes}
                    </p>
            </div>
        </a>
    </div>
);
};

export default Image;
