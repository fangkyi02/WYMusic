/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';

const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';

export default class LeftMenu extends PureComponent {

  constructor(props){
    super(props);
    this.data ={

      menuNameList:[
        '我的消息',
        '会员中心',
        '商城',
        '在线听歌免流量',
        '我的好友',
        '附近的人',
        '个性换肤',
        '听歌识曲',
        '定时停止播放',
        '音乐闹钟'],

      iconList:[
        {name:'mail'},
        {name:'browser'},
        {name:'cake'},
        {name:'bowl'},
        {name:'colours'},
        {name:'dropbox'},
        {name:'github'},
        {name:'location'},
        {name:'leaf'},
        {name:'mic'}
      ]
    }
  }
  _loginDown = () => {
    alert('登录按钮被按下');
  }

  _buttonDown = (i) =>{
    alert(`按钮${i}被按下`);
  }
  _initRenderBody = () =>{
    return this.data.menuNameList.map((el,i)=>{
      var icon = this.data.iconList[i].name;
      return (
        <View key={i} style={styles.drawBodyView}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={this._buttonDown.bind(this,i)}>
              <View style={{marginLeft:10}}>
                <Icon name = {icon} size ={20} />
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{fontSize:16,color:'rgb(37,36,37)'}}>{el}</Text>
              </View>
            </TouchableOpacity>
        </View>
      );
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {/* 抽屉菜单背景 */}
        <View style={styles.drawBKColor}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.drawBKTextColor}>
                登录网易云音乐
              </Text>
              <Text style={styles.drawBKTextColor}>
                320K高音质无限下载,手机电脑多端同步
              </Text>
            </View>
            <View>
              <View style={styles.drawLogin}>
                <TouchableOpacity onPress={this._loginDown.bind(this)}>
                  <Text style={{color:'white',fontSize:13}}>
                    立即登录
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* 菜单主体部分 */}
        <View style={styles.drawBody}>
          {this._initRenderBody()}
        </View>

        {/* 菜单尾部部分 */}
        <View style={styles.drawFoot}>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>

            {/* 夜间模式 */}
              <TouchableOpacity style={{flexDirection:'row'}} onPress={this._buttonDown.bind(this,10)}>
                <View>
                  <Icon name='feather' size={20}/>
                </View>
                <View>
                  <Text style={{fontSize:18,color:'rgb(37,36,37)'}}>
                    夜间模式
                  </Text>
                </View>
              </TouchableOpacity>

            {/* 设置 */}
              <TouchableOpacity style={{flexDirection:'row'}} onPress={this._buttonDown.bind(this,11)}>
                <View>
                  <Icon name='feather' size={20}/>
                </View>
                <View>
                  <Text style={{fontSize:18,color:'rgb(37,36,37)'}}>
                    设置
                  </Text>
                </View>
              </TouchableOpacity>

            {/* 退出 */}
              <TouchableOpacity style={{flexDirection:'row'}} onPress={this._buttonDown.bind(this,12)}>
                <View>
                  <Icon name='feather' size={20}/>
                </View>
                <View>
                  <Text style={{fontSize:18,color:'rgb(37,36,37)'}}>
                    退出
                  </Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawBKColor:{
    height:160,
    backgroundColor:'rgb(38,39,42)',
  },
  drawBKTextColor:{
    color:'rgb(139,141,143)',
    fontSize:15
  },
  drawLogin:{
    marginTop:25,
    width:150,
    height:35,
    borderWidth:0.6,
    borderRadius:35/2,
    borderColor:'rgb(139,141,143)',
    justifyContent:'center',
    alignItems:'center'
  },
  drawBody:{
    // backgroundColor:'rgb(242,242,243)',
    height:height-160-60,
    width:width*0.85,
    justifyContent:'space-around'
  },
  drawBodyView:{
    marginTop:10,
    alignItems:'flex-start',

  },
  drawFoot:{
    flex:1,
    justifyContent:'center',
    alignContent:'space-around'
  }
});
