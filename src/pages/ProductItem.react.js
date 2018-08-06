import React from 'react';

const ProductItem = ({id,  name, image, price }) => (
  <div className="card">
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">${price}</p>
      <button className="btn btn-primary" type="button">Add to Cart</button>
    </div>
  </div>
);

export default ProductItem;
