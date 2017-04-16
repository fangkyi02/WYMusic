/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ListVideo from '../WYMain/ListVideo';

export default class DynamicView extends PureComponent {
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
