/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FindTabView from './FindView';

export default class FindView extends PureComponent {
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
