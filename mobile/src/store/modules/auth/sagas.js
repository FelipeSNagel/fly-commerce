import { call, put, all, takeLatest } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {

    const { email, password } = payload;

/*     const response = yield call(api.post, 'sessions', {
      email,
      password
    });
    const { token, user } = response.data;

    if (!user.provider) {
      Alert.alert("Erro no login", "Usuário não é prestador");
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
   */

    token = "1298u9dsajldiajsdlasidj018920iu04912j42109josidjf";
    user = "Felipe Nagel";

    yield put(signInSuccess(token, user))

    //history.push('/adm/dashboard');

  } catch (err) {
    Alert.alert("Erro no login", "Falha na autenticação, verifique seus dados");
    yield put(signFailure());

  }

}

export function* signUp({ payload }) {
  try {

    const { name, email, password } = payload;

/*     yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
 */
    //history.push('/adm/signin');

  } catch (err) {

    Alert.alert("Erro no cadastro", "Falha ao efetuar seu cadastro, verifique seus dados!");
    yield put(signFailure());

  }
}

export function signOut() {
  //history.push('/adm/signin');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
