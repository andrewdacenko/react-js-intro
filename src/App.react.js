import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.react';
import AddProduct from './pages/AddProduct.react';
import Checkout from './pages/Checkout.react';
import NoMatch from './pages/NoMatch.react';
import ProductList from './pages/ProductList.react';

import AppStore from './AppStore';

const App = () =>
  <Router>
    <AppStore.Container>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products" component={ProductList} />
        <Route path="/add-product" component={AddProduct} />
        <Route component={NoMatch} />
      </Switch>
    </AppStore.Container>
  </Router>;

export default App;
