/* @flow */

import React, { PureComponent } from 'react';
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

export default class FootPlay extends PureComponent {

  constructor(props){
    super(props);
    this.state ={
      data:[],
      playView:new Animated.Value(0),
    };
    this.data = {
      scrItemPos:0,
      scrItemOffset:0,
    };
  }
  // 弹出菜单被按下
    _popMenuDown = () =>{
      if (this.props.onPopMenu!='undefined') {
        this.props.onPopMenu();
      }
    }
    // 播放按钮被按下
    _PlayDowm = () =>{
      if (this.props.onPlayDown!='undefined') {
        this.props.onPlayDown(this.data.scrItemPos);
      }
    }
    // 键盘弹出显示
    Show = () =>{
      this.state.playView.setValue(0);
    }
    // 键盘弹出隐藏
    Hide = () =>{
      this.state.playView.setValue(600);
    }

    // 滚动条元素被按下
    _scrollItemDwon = (i) =>{
      if (this.props.onPlayDown!='undefined') {
        this.props.onPlayDown(i);
      }
    }

    // 初始化ScrollView内容
    _initReder = () =>{
      console.log(this.props.data);
      return this.props.data.map((el,i)=>{
        return (
          <TouchableOpacity style={styles.scrItemView} onPress={this._scrollItemDwon.bind(this,i)}>
            <View style={styles.scrItemImage}>
              <Image source={{uri:el.pic_big}} style={{width:35,height:35}}></Image>
            </View>
            <View style={styles.scrItemText} activeOpacity={1}>
              <Text style={styles.scrItemTextStyle}>
                {el.title}
              </Text>
              <Text style={{color:'rgb(73,74,75)'}}>
                {el.author}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })
    }

  // 判断滚动条滚动位置
  _onMomentumScrollEnd = (e) =>{

    let contentSize,contentOffset,layoutMeasurement;

    contentSize = e.nativeEvent.contentSize.width;
    contentOffset = e.nativeEvent.contentOffset.x;
    layoutMeasurement = e.nativeEvent.layoutMeasurement.width;

    this.data.scrItemPos = Math.round(contentOffset/contentSize*this.props.data.length);

  }

  render() {
    return (
      <View style={styles.container}>
        {/* 尾部播放器 */}
        <Animated.View style={[styles.footPlay,{transform:[{
          translateY:this.state.playView
          }]
        }]}>

          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            style={{width:width-200,}}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
            >
            {this._initReder()}
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
  },
  scrItemView:{
    width:width-100,
    flexDirection:'row',
  },
  scrItemImage:{
    width:50,
    justifyContent:"center",
    alignItems:'center'
  },
  scrItemText:{
    marginLeft:5,
    justifyContent:"center",
  },
  scrItemTextStyle:{
    fontSize:16,
    color:'rgb(149,150,150)'
  }
});
