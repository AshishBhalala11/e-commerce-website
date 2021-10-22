import React from 'react';


const Product = ({image, title }) => {
    // console.log(item);
    return(
        <div className="product-box">
            <div className="product-image">
            <img className="image" src={image} alt={title}/>
            </div>
            <h4 className="product-title">{title}</h4>
        </div> 
    );
}

export default Product;