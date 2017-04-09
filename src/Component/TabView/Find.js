/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Video from 'react-native-video';

export default class Find extends Component {

  load = () =>{
    console.warn(1);
  }
  loadStart = () =>{
    console.warn(12);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          首页
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo:{
    height:150,
    width:200
  }
});
