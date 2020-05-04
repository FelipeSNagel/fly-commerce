import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import { currencyFormat } from '../../utils/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonGradient from '../../components/ButtonGradient';

import {
  Content,
  Image,
  Title,
  Price,
  LinePrice,
  Description,
} from './styles';

export default function Product({ navigation }) {

  const dispatch = useDispatch();

  const data = useSelector(state => state.products.item);

  function addToCart() {
    dispatch(addToCartRequest(data.id));
  }


  return <Background>
    <Header navigation={navigation} title="Detalhe do Produto"/>

    <Content>
      <Image source={{ uri: data.image }} />
      <Title>{data.title}</Title>
      <Price>{currencyFormat(data.price)}</Price>
      <LinePrice />
      <Description>{data.description}</Description>

      <ButtonGradient onPress={() => addToCart()}>ADICIONAR</ButtonGradient>
    </Content>

  </Background>;
}
