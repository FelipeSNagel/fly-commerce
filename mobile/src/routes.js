import React from 'react';
<<<<<<< HEAD
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


import colors from './styles/colors';

const App =  createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: navigation => ({
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }),
  }
)


const Auth = createSwitchNavigator({
  SignIn,
  SignUp,
  App,
}, {
  initialRouteName: 'SignIn'
});

const Routes = createAppContainer(Auth);
=======
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home/';
import Cart from './pages/cart';
import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      // initialRouteName: 'Cart',
      defaultNavigationOptions: navigation => ({
        header: () => <Header {...navigation} />,
        cardStyle: {
          backgroundColor: colors.dark,
        },
      }),
    }
  )
);
>>>>>>> 5578f387cb9b153d153dbbc58378b48d2423b0f0

export default Routes;
