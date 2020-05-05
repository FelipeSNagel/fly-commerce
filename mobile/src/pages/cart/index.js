import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

import { currencyFormat } from '../../utils/format';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonGradient from '../../components/ButtonGradient';
import Carts from '../../components/Cart';

import { List, Total } from './styles';

export default function Cart({ navigation }) {
  const [total, setTotal] = useState(0);

  const data = useSelector(state => state.cart);

  useEffect(() => {
    let value = 0;

    data.map(product => {
      value += (product.amount || 1) * product.price;
    });

    setTotal(value);

  }, [data]);

  return <Background>
    <Header title="Carrinho" navigation={navigation} />

    <List
      data={data}
      renderItem={({ item }) => <Carts {...item} navigation={navigation} />}
      keyExtractor={item => item.id}
      ListEmptyComponent={<Text>Nenhum item no carrinho!</Text>}
    />


    <Total>Total: {currencyFormat(total)}</Total>
    {data.length > 0 && <ButtonGradient onPress={() => navigation.navigate('Checkin')}>Ir para Pagamento</ButtonGradient>}

  </Background>
}
