import React from 'react';
import AppStore from '../AppStore';
import ProductItem from './ProductItem.react';

const ProductList = ({ store }) => (
  <div className="container">
    <div className="row">
      {store.get('products').map(({ id, name, image, price }, index) => (
        <React.Fragment>
          <div className="col" key={id}>
            <ProductItem
              id={id}
              name={name}
              image={image}
              price={price}
            />
          </div>
          {index % 3 === 2 ? <div class="w-100"><br/></div> : null}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default AppStore.withStore(ProductList);
