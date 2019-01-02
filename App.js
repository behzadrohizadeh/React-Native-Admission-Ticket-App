/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { I18nManager } from 'react-native';
import { DrawerNavigator,StackNavigator } from 'react-navigation';

import Qrcode from './pages/Qrcode';
import Home from './pages/Home';
import Register from './pages/Register';
import Ticket  from './pages/Ticket';



const MainStack = StackNavigator(
  {
    Home: {screen: Home},
    Qrcode:{screen:Qrcode},
    Register: {screen: Register},
    Ticket:{screen:Ticket}


  },
  {
    headerMode: 'none' ,
    initialRouteName: 'Home',
    mode: 'modal'
  }
)





export default class App extends Component<Props> {


  render() {
    return (

       <MainStack /> 

    );
  }
}

