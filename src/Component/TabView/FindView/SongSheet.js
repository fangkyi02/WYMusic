/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SongSheet extends PureComponent {

  static navigationOptions = {
      tabBar: {
        label: '歌单',
      },
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SongSheet</Text>
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
