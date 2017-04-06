/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Header from '../Component/WYMain/Header';
import Realm from './InitRealm';
import LeftMenu from './LeftMenu';


import { TabNavigator,DrawerNavigator} from 'react-navigation';
import ListVideo from '../Component/WYMain/ListVideo';


class WYMain extends React.PureComponent {
  componentWillMount() {
    global.nav = this.props.navigation;
    Realm.InitRealm();
  }

  _headerDown = (i) =>{
    console.warn(i);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header onPress={(i) => {this._headerDown(i)}} navigation={this.props.navigation}/>
        <ListVideo/>
      </View>
    );
  }
}

export default WYMainNavigator = DrawerNavigator({
  Home: {
    screen: WYMain,
  }
},
  {
    drawerWidth:250,
    contentComponent:LeftMenu
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(18,19,20)'
  },
});
