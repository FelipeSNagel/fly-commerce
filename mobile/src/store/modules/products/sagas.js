import { call, put, all, takeLatest } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '../../../services/api';

import { fetchDataSuccess, fetchDataFailed, fetchItemSuccess } from './actions';

export function* fetchData() {

  try {

    const data = [
      {
        id: 'p1',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 3420.50,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://public-v2links.adobecc.com/180b8e2c-a0f7-46f6-7031-176e89cb02f4/component?params=component_id%3A7d61e6c7-658e-4879-a7af-7ccd3f43a1f5&params=version%3A0&token=1588597354_da39a3ee_14ce1b1b7c3a386611d399c91f6c1056a65d9fff&api_key=CometServer1",
      },

      {
        id: 'p2',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 2780.90,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://public-v2links.adobecc.com/180b8e2c-a0f7-46f6-7031-176e89cb02f4/component?params=component_id%3Ab0accf82-e33e-4eca-b2b3-f8a2fa16c8ac&params=version%3A0&token=1588597354_da39a3ee_14ce1b1b7c3a386611d399c91f6c1056a65d9fff&api_key=CometServer1",
      },

      {
        id: 'p3',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 9000,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://public-v2links.adobecc.com/180b8e2c-a0f7-46f6-7031-176e89cb02f4/component?params=component_id%3A7e738069-389e-47a3-aa19-db15506d9f26&params=version%3A0&token=1588597354_da39a3ee_14ce1b1b7c3a386611d399c91f6c1056a65d9fff&api_key=CometServer1",
      },

      {
        id: 'p4',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 2000,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://public-v2links.adobecc.com/180b8e2c-a0f7-46f6-7031-176e89cb02f4/component?params=component_id%3Adaca3543-6d73-4cad-a693-aa3442687dcd&params=version%3A0&token=1588597354_da39a3ee_14ce1b1b7c3a386611d399c91f6c1056a65d9fff&api_key=CometServer1",
      },


    ];

    yield put(fetchDataSuccess({
      data: data,
      loading: false,
    }));

  } catch (err) {

    Alert.alert('Falha', 'Erro ao buscar os dados')
    yield put(fetchDataFailed({ loading: false }));

  }
}

export function* fetchItem({ id }) {

  try {

    console.log(id);

    yield put(fetchItemSuccess({
      openAccordion: true,
      id
    }))

  } catch (err) {

    Alert.alert("Falha", "Ocorreu um erro ao buscar os detalhes deste item");

  }
}

export default all([
  takeLatest('@products/FETCH_DATA_REQUEST', fetchData),
  takeLatest('@products/FETCH_ITEM_REQUEST', fetchItem),
]);
