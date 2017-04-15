/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Personalized extends Component {
  static navigationOptions = {
      tabBar: {
        label: '个性推荐',
      },
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Personalized</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position:'absolute',
    left:0,
    top:0,
    right:0,
    bottom:0,
  },
});
