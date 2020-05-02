import React from 'react';

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

export default Routes;
