import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'flycommerce',
      storage,
      whitelist: ['auth', 'theme'],
    },
    reducers
  );

  return persistedReducer;
};
