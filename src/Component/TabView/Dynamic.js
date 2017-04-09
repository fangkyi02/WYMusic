/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ListVideo from '../WYMain/ListVideo';

export default class Dynamic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListVideo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
