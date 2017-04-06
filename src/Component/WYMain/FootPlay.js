/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

export default class MyComponent extends Component {

  // 弹出菜单被按下
  _popMenuDown = () =>{
    Animated.timing(this.state.popmenu,{
      toValue:-300,
      duration:200
    }).start();
  }

    // 播放按钮被按下
    _PlayDowm = () =>{

    }

  render() {
    return (
      <View style={styles.container}>
        {/* 尾部播放器 */}
        <Animated.View style={[styles.footPlay,{transform:[{
          translateY:this.state.playView
          }]
        }]}>

          <ScrollView horizontal={true} style={{width:width-200,}}>
            <View style={{width:width-100,flexDirection:'row'}}>
              <View style={{width:50,justifyContent:"center",alignItems:'center'}}>
                <Image source={require('../assets/icon.png')} style={{width:35,height:35}}></Image>
              </View>
              <View style={{marginLeft:5,justifyContent:"center"}}>
                <Text style={{fontSize:16,color:'rgb(149,150,150)'}}>
                  成都
                </Text>
                <Text style={{color:'rgb(73,74,75)'}}>
                  横划可以切换歌曲哦
                </Text>
              </View>
            </View>

            <View style={{width:width-100,flexDirection:'row'}}>
              <View style={{width:50,justifyContent:"center",alignItems:'center'}}>
                <Image source={require('../assets/qudali.jpg')} style={{width:35,height:35}}></Image>
              </View>
              <View style={{marginLeft:5,justifyContent:"center"}}>
                <Text style={{fontSize:16,color:'rgb(149,150,150)'}}>
                  去大理
                </Text>
                <Text style={{color:'rgb(73,74,75)'}}>
                  横划可以切换歌曲哦
                </Text>
              </View>
            </View>

          </ScrollView>

          {/* 播放按钮跟菜单按钮 */}
          <View style={{flex:1,alignItems:'flex-end'}}>
            <View style={{flexDirection:'row',width:100,height:60,justifyContent:'center',alignItems:'center'}}>
              <View>
                <TouchableOpacity onPress={this._PlayDowm.bind(this)}>
                  <Play name='play-circle-outline' size={40} color='white'></Play>
                </TouchableOpacity>
              </View>
              <View style={{width:30,marginLeft:15}}>
                <TouchableOpacity onPress={this._popMenuDown.bind(this)}>
                  <FootMenu name='md-menu' size={40} color='rgb(73,74,75)'></FootMenu>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* 弹出菜单 */}
        <Animated.View  style={[
          styles.popmenu,
          {bottom:-300,width,
          transform:[{
          translateY:this.state.popmenu}]
        }]}>
          <Text style={{color:'white'}}>
            asdas
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footPlay:{
    // position:'absolute',
    // bottom:0,
    width,
    height:60,
    backgroundColor:'rgb(22,23,25)',
    flexDirection:'row'
  },
  popmenu:{
    position:'absolute',
    height:300,
    backgroundColor:'rgb(22,23,25)',
  }
});
