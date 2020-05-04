import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDataRequest } from '../../store/modules/products/actions';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Product from '../../components/Product';

import { List, Input } from './styles';

export default function Search({ navigation }) {
  const dispatch = useDispatch();

  const originalData = useSelector(state => state.products.data);

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  useEffect(() => {

    let dataFiltered = [];

    originalData.map(product => {
      if (product.title.indexOf(filter) > -1) {
        dataFiltered.push(product);
      }
    });

    setData(dataFiltered);

  }, [filter]);


  return <Background>
    <Header title="Procurar" navigation={navigation} />
    <Input
      placeholder="Digite aqui"
      value={filter}
      onChangeText={(value) => setFilter(value)}
    />

    <List
      data={data}
      renderItem={({ item }) => <Product {...item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />

  </Background>;
}
