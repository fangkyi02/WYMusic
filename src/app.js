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
import PlayView from './Pager/PlayView';

import SplashScreen from 'react-native-splash-screen'
import {StackNavigator} from 'react-navigation';

AppState.addEventListener('change', (nextAppState)=>{
  if (nextAppState === 'active'){
    if (global.init === true){
      SplashScreen.hide();
    }}
});

export default SimpleApp = StackNavigator({
  '主页面':{screen:WYMain},
  '播放器页面':{screen:PlayView},
  },{
  initialRouteName:'主页面',
  headerMode:'none'
})

global.skinColor = 'rgb(205,50,43)';

// global.skinColor = 'red';

AppRegistry.registerComponent('WYMusic', () => SimpleApp);
