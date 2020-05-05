import { call, put, all, takeLatest } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '../../../services/api';

import { fetchDataSuccess, fetchDataFailed, fetchItemSuccess } from './actions';

export function* fetchData() {

  try {

    const data = [
      {
        id: 'p1',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almarita)",
        price: 3420.50,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://static.dooca.com.br/cavesdobrasil/product/vinho-tinto-aurora-cabernet-sauvignon-15499921554514_480x480+fill_ffffff.png",
      },

      {
        id: 'p2',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 2780.90,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://cdn.awsli.com.br/600x450/552/552087/produto/24297652/09da1a1e7a.jpg",
      },

      {
        id: 'p3',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 9000,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://www.blogvinhotinto.com.br/wp-content/uploads/2020/02/chardornnay-1-768x894.jpg",
      },

      {
        id: 'p4',
        title: "Cabernet Sauvignon 2013 (Tasca D'Almerita)",
        price: 2000,
        description: "Um ícone Italiano! Elegante e intenso com frutas negras.",
        image: "https://www.pergola.com.br/wp-content/uploads/2019/04/20170331_110040_blog-800x600.jpg",
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
