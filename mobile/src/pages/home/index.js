import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDataRequest } from '../../store/modules/products/actions';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Product from '../../components/Product';

import { List } from './styles';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const data = useSelector(state => state.products.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);


  return <Background>
    <Header title="Produtos em Destaque" navigation={navigation} />

    <List
      data={data}
      renderItem={({ item }) => <Product {...item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />

  </Background>;
}
