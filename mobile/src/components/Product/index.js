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
  Description,
} from './styles';

export default function Card({ id, title, price, description, image, navigation}) {

  const dispatch = useDispatch();

  function setItem(){
    dispatch(fetchItemRequest(id));

    navigation.navigate('Product');
  }

  return (
    <Container onPress={() => setItem()}>
      <Image source={{ uri: image }} />

      <Content>
        <Title>{title}</Title>
        <Price>{currencyFormat(price)}</Price>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}
