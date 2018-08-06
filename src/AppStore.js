import { createConnectedStore } from 'undux';
import store from 'store';

const defaultProducts = [{
  id: Math.random().toString(),
  name: 'First Product',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
  price: 100,
}, {
  id: Math.random().toString(),
  name: 'Second Product',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
  price: 80,
}, {
  id: Math.random().toString(),
  name: 'Third Product',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
  price: 120,
}];

if (store.get('products') == null) {
  store.set('products', defaultProducts);
};

export default createConnectedStore({
  products: store.get('products'),
  checkout: [],
});
