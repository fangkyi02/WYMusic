/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
  Image,
  PixelRatio
} from 'react-native';

import Music from 'react-native-vector-icons/Ionicons';
import Play from 'react-native-vector-icons/EvilIcons';
import Download from 'react-native-vector-icons/Entypo';
import Audiobook from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from 'react-native-vector-icons/MaterialCommunityIcons';


const {width}  = Dimensions.get('window');
const scale = PixelRatio.get();
scale = scale>2?scale-2:1;

export default class My extends Component {

  constructor(props){
    super(props);
    this.state ={
      data:[
        {icon:Music,name:'ios-musical-notes-outline',text:'本地音乐'},
        {icon:Play,name:'play',text:'最近播放'},
        {icon:Download,name:'download',text:'下载管理'},
        {icon:Audiobook,name:'audiobook',text:'我的电台'},
        {icon:Download,name:'book',text:'我的收藏'},
      ]
    }
  }
  _initListRender = () =>{
    return this.state.data.map((el,i)=>{
      let Icon = el.icon;
      let height = 50;
      return (

          <TouchableOpacity style={styles.listRender}>
            <View style={{height,width:30,justifyContent:'center',alignItems:'center'}}>
              <Icon name={el.name} size={25} color='red'/>
            </View>
            <View style={{marginLeft:10,borderColor:'transparent',borderBottomColor:i<4?'rgb(231,233,234)':'',borderWidth:1,height,width,justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'rgb(37,36,37)'}}>
                {el.text + `(${Math.round(Math.random()*1000)})`}
              </Text>
            </View>
          </TouchableOpacity>
      );
    })
  }
  render() {
    console.warn(scale);
    return (
      <View style={styles.container}>
        <View style={styles.list}>
         {this._initListRender()}
        </View>
        {/* 创建歌单 */}
        <View style={styles.songSheet}>
          <View style={{flexDirection:'row'}}>
            <Animated.View style={{width:60,height:35,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20}}>
                >
              </Text>
            </Animated.View>
            <View style={{justifyContent:'center'}}>
              <TouchableOpacity>
                <Text style={{fontSize:16}}>
                  {`创建的歌单(${Math.round(Math.random()*100)})`}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
              <View style={{marginRight:10}}>
                <TouchableOpacity>
                  <Setting name='settings' size={20} color='rgb(126,127,128)'></Setting>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* 为你推荐 */}
        <View style={styles.myFoot}>
          <View style={{height:50,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
              <Text style={{fontSize:20,color:'rgb(126,127,128)'}}>
                为你推荐
              </Text>
            </View>
          </View>

          <View style={{flex:1,flexDirection:'row',marginTop:20}}>
            <View style={{flex:1}}>
              <View style={{justifyContent:'flex-start',height:100*scale}}>
                <Image
                  style={{height:100*scale}}
                  source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                  美女
                </Text>
              </View>
            </View>

            <View style={{flex:1}}>
              <View style={{justifyContent:'flex-start',height:100*scale}}>
                <Image
                  style={{height:100*scale}}
                  source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                  美女
                </Text>
              </View>
            </View>

            <View style={{flex:1}}>
              <View style={{justifyContent:'flex-start',height:100*scale}}>
                <Image
                  style={{height:100*scale}}
                  source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
              </View>
              <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                  美女
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={{justifyContent:'flex-end'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:1,alignContent:'space-around'}}>
                <View style={{justifyContent:'flex-start',width:120,height:100}}>
                  <Image
                    style={{width:120,height:100}}
                    source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
                </View>
                <View style={{height:30,alignItems:'center',justifyContent:"center"}}>
                  <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                    美女
                  </Text>
                </View>
              </View>

              <View style={{flex:1,}}>
                <View style={{justifyContent:'flex-start',width:120,height:100}}>
                  <Image
                    style={{width:120,height:100}}
                    source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
                </View>
                <View style={{height:30,alignItems:'center',justifyContent:"center"}}>
                  <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                    美女
                  </Text>
                </View>
              </View>

              <View style={{flex:1,}}>
                <View style={{justifyContent:'flex-start',width:120,height:100}}>
                  <Image
                    style={{width:120,height:100}}
                    source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
                </View>
                <View style={{height:30,alignItems:'center',justifyContent:"center"}}>
                  <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                    美女
                  </Text>
                </View>
              </View>
            </View>
          </View> */}

          {/* <View style={{height:80,width:120}}>
            <View style={{justifyContent:'flex-start'}}>
              <Image
                style={{width:120,height:100}}
                source={{uri:'http://dwz.cn/5Ipo8y'}}></Image>
            </View>
            <View style={{height:30,alignItems:'center',justifyContent:"center"}}>
              <Text style={{fontSize:15,color:'rgb(126,127,128)'}}>
                美女
              </Text>
            </View>
          </View> */}

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list:{
    marginLeft:10,
    height:250,
    justifyContent:'space-around',
    alignItems:'flex-start',
  },
  listRender:{
    flexDirection:'row',
  },
  songSheet:{
    marginTop:5,
    backgroundColor:'rgb(227,229,230)',
    height:35
  },
  myFoot:{
    flex:1,
  }
});
