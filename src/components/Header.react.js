import React from 'react';
import { Route, Link } from "react-router-dom";

const Header = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <Link to="/">Awesome Store</Link>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link className="p-2" to="/products">Products</Link>
      <Link className="p-2" to="/add-product">Add Product</Link>
    </nav>
    <Link className="btn btn-outline-primary" to="/checkout">Checkout</Link>
  </div>
);

export default Header;
