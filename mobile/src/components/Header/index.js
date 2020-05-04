import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount, Title, Div } from './styles';
import { AppRegistry } from 'react-native';

function Header({ navigation, cartSize, title }) {
  return (
    <>
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
    <Title>{title}</Title>
    <Div/>
    </>
  );
}

export default connect(
  (state) => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);

AppRegistry.registerComponent('Header', () => Header);
