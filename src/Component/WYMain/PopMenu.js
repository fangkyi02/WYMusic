/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Modal,
  PanResponder,
  Dimensions
} from 'react-native';


const {width,height} = Dimensions.get('window');

export default class PopMenu extends Component {

  constructor(props){
    super(props);
    this.state ={
      popmenu:new Animated.Value(0),
      modalOpacity:new Animated.Value(1),
      modalVisible:false,
    };
  }


  componentWillMount () {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}

        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
        this.hide();
      }
    });
  }

  show = (duration = 200) =>{

    if (this.state.ModalVisible != true) {
      this.setState({modalVisible:true},()=>{
        Animated.timing(this.state.popmenu,{
          toValue:-300,
          duration,
          userNativeDrive:true
        }).start();
      });
    }

  }

  hide = (duration = 200) =>{
    Animated.parallel([
      Animated.timing(this.state.popmenu,{
        toValue:300,
        duration,
        userNativeDrive:true
      }),
      Animated.timing(this.state.modalOpacity,{
        toValue:0,
        duration,
        userNativeDrive:true
      })
    ]).start(()=>{
        this.setState({modalVisible:false},()=>{
          this.state.modalOpacity.setValue(1);
        });
    });
  }
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.state.modalVisible}
        >
          <View style={{flex:1,}}>
            <Animated.View style={{backgroundColor:'rgba(0,0,0,0.6)',height:height-300,opacity:this.state.modalOpacity}} {...this._panResponder.panHandlers}>
            </Animated.View>
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
          </View>

    </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalStyle:{
    backgroundColor:'rgba(0,0,0,0.8)'
  },
  popmenu:{
    position:'absolute',
    height:300,
    backgroundColor:'white',
  }
});
