/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  Dimensions,
  Animated,
  TouchableOpacity,
  InteractionManager
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Header from '../Component/WYMain/Header';
import Realm from './InitRealm';
import LeftMenu from './LeftMenu';
import ListVideo from '../Component/WYMain/ListVideo';
import FootPlay from '../Component/WYMain/FootPlay'
import Search from '../Component/WYMain/Search';
import PopMenu from '../Component/WYMain/PopMenu';
import ModalView from '../Component/WYMain/ModalView';
import TabView from '../Component/TabView';


import { TabNavigator,DrawerNavigator} from 'react-navigation';


const {width,height} = Dimensions.get('window');
height = height - 120;

class WYMain extends React.PureComponent {

  constructor(props){
    super(props);
    this.state ={
      headerPos:new Animated.Value(0),
      searchPos:new Animated.Value(width),
      view1:true,
      view2:false,
      songData:[]
    };

    this.getSongData();
  }

  componentWillMount() {
    // console.warn(global.init);
    Realm.InitRealm();

    setTimeout(()=>{
        global.init = true;
        SplashScreen.hide();
    },200);
  }

  getSongData = async() =>{

    await fetch('http://t.cn/RXqrM6p')
    .then((re)=>re.json())
    .then((r)=>{
      if (r.statusCode == 200) {
        this.setState({songData:r.song_list},()=>{
          setTimeout(()=>{
            SplashScreen.hide();
          },1000);
        });

      }
    })
  }
  // 搜索按钮被按下
  _onSearchDown = () =>{
    this.refs.popmenu.hide(200);
  }

  // 弹出菜单被按下
  _popMenuDown = () =>{
    this.refs.popmenu.show(200);
  }

  // 键盘监听-键盘隐藏
  _onKeyboardHide = () =>{
    this.refs.play.Hide();
  }

  // 键盘监听-键盘显示
  _onKeyboardShow = () =>{
    this.refs.play.Show();
  }

  // 搜索返回被按下
  _onSearchBackDown = () =>{
    Animated.parallel([
      Animated.timing(this.state.headerPos,{
        toValue:0,
        duration:10
      }),
      Animated.timing(this.state.searchPos,{
        toValue:width,
        duration:10
      }),
    ]).start(()=>{
      this.setState({
        view1:true,
        view2:false,
      })
    });
  }

  // 头部按钮被按下
  _headerDown = (i) =>{
    switch (i) {
      case 1:
        this.props.navigation.navigate('DrawerOpen');
        break;
      case 2:
        this.refs.TabView._navigation.navigate('My');
        break;
      case 3:
        this.refs.TabView._navigation.navigate('Find');
        break;
      case 4:
        this.refs.TabView._navigation.navigate('Dynamic');
        break;
      case 5:
        Animated.parallel([
          Animated.timing(this.state.headerPos,{
            toValue:-width,
            duration:10
          }),
          Animated.timing(this.state.searchPos,{
            toValue:-width,
            duration:10
          }),
        ]).start(()=>{
          this.setState({
            view1:false,
            view2:true,
          })
        });
        break;
      default:
    }

  }
  // 播放器按钮被按下
  _onPlayDown = (i) =>{
    this.props.navigation.navigate('播放器页面',{songData:this.state.songData,songPos:i});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:height+60,flexDirection:'row'}}>
          {/* 主页部分 */}
          <Animated.View style={{
            transform:[{
              translateX:this.state.headerPos
            }],
            backgroundColor:this.state.view1?'white':'rgba(0,0,0,0)',
            width}}>
            <Header onPress={(i) => {this._headerDown(i)}} navigation={this.props.navigation}/>
            <TabView ref='TabView'/>

          </Animated.View>

          {/* 搜索界面 */}
          <Animated.View style={{
            overflow:'hidden',
            transform:[{
              translateX:this.state.searchPos
            }],
            width,
            backgroundColor:this.state.view2?'white':'rgba(0,0,0,0)',}}>
            <Search style={{flex:1,height:height+60,width,overflow:'hidden',}}
              onSearchDown={this._onSearchDown.bind(this)}
              onSearchBackDown={this._onSearchBackDown.bind(this)}
              onKeyboardHide={this._onKeyboardHide.bind(this)}
              onKeyboardShow={this._onKeyboardShow.bind(this)}
            />
          </Animated.View>

        </View>
        <FootPlay
          ref='play'
          data={this.state.songData}
          onPopMenu={this._popMenuDown.bind(this)}
          onPlayDown={this._onPlayDown.bind(this)}
        />
        <PopMenu ref='popmenu' style={{width}}/>
      </View>
    );
  }
}

export default WYMainNavigator = DrawerNavigator({
  Home: {
    screen: WYMain,
  }
},
  {
    drawerWidth:width*0.8,
    contentComponent:LeftMenu,
    contentOptions:{
      style:{
        backgroundColor:'red'
      },
      labelStyle:{
        backgroundColor:'red',
        color:'red'
      }
    }
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(240,240,240)'
  },
  popmenu:{
    position:'absolute',
    height:300,
    backgroundColor:'white',
  }
});
