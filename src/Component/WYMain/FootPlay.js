/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';


const {width,height} = Dimensions.get('window');

import Play from 'react-native-vector-icons/MaterialIcons';
import FootMenu from 'react-native-vector-icons/Ionicons';

export default class MyComponent extends Component {

  constructor(props){
    super(props);
    this.state ={
      playView:new Animated.Value(0),
    };
  }
  // 弹出菜单被按下
  _popMenuDown = () =>{
    if (this.props.onPopMenu!='undefined') {
      this.props.onPopMenu();
    }
  }

  _PlayDowm = () =>{

  }
    Show = () =>{
      this.state.playView.setValue(0);
    }

    Hide = () =>{
      this.state.playView.setValue(600);
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
                  <Play name='play-circle-outline' size={40} color='black'></Play>
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


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:0,
  },
  footPlay:{
    width,
    height:60,
    backgroundColor:'white',
    flexDirection:'row'
  }
});
