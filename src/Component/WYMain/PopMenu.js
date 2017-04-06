/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default class PopMenu extends Component {

  constructor(props){
    super(props);
    this.state ={
      popmenu:new Animated.Value(0),
    };
  }

  Show = (duration) =>{
    Animated.timing(this.state.popmenu,{
      toValue:-300,
      duration
    }).start();
  }

  Hide = (duration) =>{
    Animated.timing(this.state.popmenu,{
      toValue:300,
      duration
    }).start();
  }
  render() {
    return (
      <Animated.View style={
        [styles.popmenu,
        this.props.style,
        {
          bottom:-300,
          transform:[{
            translateY:this.state.popmenu
          }]
        }]
        }>
        <Text style={{color:'black'}}>
          asdas
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  popmenu:{
    position:'absolute',
    height:300,
    backgroundColor:'white',
  }
});
