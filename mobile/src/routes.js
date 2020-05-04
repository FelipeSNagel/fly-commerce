import React from 'react';

import { MaterialIcons as Icon} from '@expo/vector-icons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({tintColor}) =>
        <Icon name='home' size={25} color={tintColor} />
    }
  },
  Search: {
    screen: Cart,
    navigationOptions: {
      title: 'Procurar',
      tabBarIcon: ({tintColor}) =>
        <Icon name='search' size={25} color={tintColor} />
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Carrinho',
      tabBarIcon: ({tintColor}) =>
        <Icon name='shopping-cart' size={25} color={tintColor} />
    }
  },
}, {
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#00E6FF',
    inactiveTintColor: '#FFF',
    activeBackgroundColor: '#17171f',
    inactiveBackgroundColor: '#17171f',
    style: {
      height: 50,
/*       borderTopWidth: 2,
      borderTopColor: '#4A4A4A', */
    }
  }
});

const Sign = createSwitchNavigator({
  SignIn,
  SignUp,
});

export default (signedIn = false) => createAppContainer(
  createSwitchNavigator({
    Sign,
    Tabs,
    Product,
  }, {
    initialRouteName: signedIn ? 'Tabs' : 'Sign'
  })
);
