/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class LeftMenu extends Component {

  _loginDown = () => {
    console.warn(1);
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

        {/* 抽屉菜单主体内容 */}
        <View styel={styles.drawBody}>

        </View>

        {/* 尾部控制按钮 */}
        <View style={styles.drawFoot}>
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
    height:220,
    backgroundColor:'rgb(38,39,42)',
  },
  drawBKTextColor:{
    color:'rgb(139,141,143)',
    fontSize:15
  },
  drawLogin:{
    marginTop:15,
    width:150,
    height:35,
    borderWidth:0.6,
    borderRadius:35/2,
    borderColor:'rgb(139,141,143)',
    justifyContent:'center',
    alignItems:'center'
  },
  drawBody:{

  },
  drawFoot:{

  }
});
