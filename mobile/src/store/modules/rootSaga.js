import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth, cart]);
}
