import { combineReducers } from 'redux';

import auth from './auth/reducer';
import cart from './cart/reducer';
import products from './products/reducer';

export default combineReducers({
  auth,
  cart,
  products,
});
