/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Ranking extends PureComponent {

  static navigationOptions = {
      tabBar: {
        label: '排行榜',
      },
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Ranking</Text>
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
