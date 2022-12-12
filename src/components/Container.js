import React from "react";
import "./container.css";

export default function Container({container: {id, title, brand, price, state, image, alt}}){
    return (
        <div className={`prod ${state}`}>
            <img src={image} alt={alt}/>
            <div className="info-prod">
                <span className="title">{title}</span>
                <span className="brand">{brand}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}