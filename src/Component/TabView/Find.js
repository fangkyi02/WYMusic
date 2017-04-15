/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FindTabView from './FindView';

export default class FindView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FindTabView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
