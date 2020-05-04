import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchItemRequest } from '../../store/modules/products/actions';

import { currencyFormat } from '../../utils/format';

import {
  Container,
  Image,
  Content,
  Title,
  Price,
} from './styles';

export default function Cart({ id, title, price, image, amount}) {

  const dispatch = useDispatch();

  function setItem(){
    dispatch(fetchItemRequest(id));

    navigation.navigate('Product');
  }

  return (
    <Container>
      <Image source={{ uri: image }} />

      <Content>
        <Title>{title}</Title>
        <Price>Qtd. {amount || 1} X {currencyFormat(price)}</Price>
        <Price>SubTotal: {currencyFormat(price*(amount || 1))}</Price>

      </Content>
    </Container>
  );
}
