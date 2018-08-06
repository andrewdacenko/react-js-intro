import React, { Component } from 'react';

export default class AddProduct extends Component {
  state = {
    name: '',
    image: '',
    price: 0,
  };

  render() {
    return (
      <form className="container" noValidate onSubmit={this._onSubmit}>
        <h3>Add new product</h3>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            id="productName"
            className="form-control"
            name="productName"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image</label>
          <input
            id="productImage"
            className="form-control"
            name="productImage"
            onChange={(e) => this.setState({ image: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            id="productPrice"
            className="form-control"
            name="productPrice"
            type="number"
            min="0"
            onChange={(e) => this.setState({ price: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

  _onSubmit = (e) => {
    e.preventDefault();

    // TODO: put submit logic here
    // navigate to list after
  }
};