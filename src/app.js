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

// AppState.addEventListener('change', (nextAppState)=>{
//   if (nextAppState === 'active' && global.init != 'undefined' ) {
//     SplashScreen.hide();
//   }
// });

export default SimpleApp = StackNavigator({
  Home:{screen:WYMain},
},{
  headerMode:'none'
})

global.skinColor = 'rgb(205,50,43)';

// global.skinColor = 'red';

AppRegistry.registerComponent('WYMusic', () => SimpleApp);
