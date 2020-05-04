import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateAmountRequest } from '../../store/modules/cart/actions';

import { currencyFormat } from '../../utils/format';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Carts from '../../components/Cart';
import ButtonGradient from '../../components/ButtonGradient';

import { List, Title, Total } from './styles';

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const [total, setTotal ] = useState(0);

  const data = useSelector(state => state.cart);

  useEffect(() => {
    let value = 0;

    data.map(product => {
      value += (product.amount || 1) * product.price;
    });

    setTotal(value);

  }, [data]);

  return <Background>
    <Header navigation={navigation} />

    <Title>Carrinho</Title>

    <List
      data={data}
      renderItem={({ item }) => <Carts {...item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />


    <Total>Total: {currencyFormat(total)}</Total>
    <ButtonGradient>Finalizar</ButtonGradient>

  </Background>
}
