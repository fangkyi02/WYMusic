/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Radio extends Component {

  static navigationOptions = {
      tabBar: {
        label: '主播电台',
      },
    }

  render() {
    console.warn('主播电台');
    return (
      <View styel={{flex:1,}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
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
