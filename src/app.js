/* @flow */

/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  AppState
} from 'react-native';


import WYMain from './Pager/WYMain'
import Search from './Component/WYMain/Search'

import SplashScreen from 'react-native-splash-screen'
import {StackNavigator} from 'react-navigation';

AppState.addEventListener('change', (nextAppState)=>{
  if (nextAppState === 'active') {
    SplashScreen.hide();
  }
});

export default SimpleApp = StackNavigator({
  Home:{screen:WYMain},
  Search:{screen:Search},
},{
  headerMode:'none'
})

global.music={

};
// global.skinColor = 'red';

AppRegistry.registerComponent('WYMusic', () => SimpleApp);
