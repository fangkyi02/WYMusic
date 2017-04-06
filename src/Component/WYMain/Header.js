/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';

const {width,height} = Dimensions.get('window');
width = width-80;

import Left_Menu from 'react-native-vector-icons/Ionicons';
import Right_Menu from 'react-native-vector-icons/EvilIcons';
import Body_Menu_1 from 'react-native-vector-icons/Ionicons';
import Body_Menu_2 from 'react-native-vector-icons/FontAwesome';
import Body_Menu_3 from 'react-native-vector-icons/FontAwesome';

import { TabNavigator,DrawerNavigator} from 'react-navigation';



export default class WYMain_Head extends PureComponent {

  constructor(props){
    super(props);
    this.state ={
      id:3
    }
  }

  _menuDown = (i) =>{
    switch (i) {
      case 1:
      this.props.navigation.navigate('DrawerOpen');
        break;
      case 2:
        if (this.props.onPress!='undefined') {
          this.setState({id:2},()=>{
            this.props.onPress(this.state.id);
          });
        }
        break;
      case 3:
        if (this.props.onPress!='undefined') {
          this.setState({id:3},()=>{
            this.props.onPress(this.state.id);
          });
        }
        break;
      case 4:
        if (this.props.onPress!='undefined') {
          this.setState({id:4},()=>{
            this.props.onPress(this.state.id);
          });
        }
        break;
      case 5:
        if (this.props.onPress!='undefined') {
          this.setState({id:5},()=>{
            this.props.onPress(this.state.id);
            // this.props.navigation.navigate('Search');
          });
        }

      default:
    }
  }

  render() {
    return (
      <View style={styles.container}>

        {/* 左边菜单按钮 */}
        <View style={styles.menuView}>
          <TouchableOpacity onPress={this._menuDown.bind(this,1)} >
            <Left_Menu name='ios-menu-outline' size={30} color={global.skinColor=='rgb(205,50,43)'?'white':'rgb(127,127,128)'}>
            </Left_Menu>
            <View style={styles.leftMenu}>
                <Text style={{color:"white",fontSize:13}}>
                  1
                </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 中间控制菜单 */}
        <View style={styles.bodyView}>
          {/* <MyApp/> */}

          <View style={styles.bodyViewMain}>
            <View >
              <TouchableOpacity onPress={this._menuDown.bind(this,2)}>
                <Text style={[this.state.id === 2?{color:'white'}:{color:'rgb(241,189,186)'},{fontSize:16}]}>我的</Text>
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity onPress={this._menuDown.bind(this,3)}>
                <Text style={[this.state.id === 3?{color:'white'}:{color:'rgb(241,189,186)'},{fontSize:16}]}>发现</Text>
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity onPress={this._menuDown.bind(this,4)}>
                <Text style={[this.state.id === 4?{color:'white'}:{color:'rgb(241,189,186)'},{fontSize:16}]}>动态</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>

        {/* 右边控制菜单 */}
        <View style={styles.menuView}>
          <View style={{marginRight:5}}>
            <TouchableOpacity onPress={this._menuDown.bind(this,5)}>
              <Right_Menu name='search' size={30} color={global.skinColor=='rgb(205,50,43)'?'white':'rgb(127,127,128)'}></Right_Menu>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    flexDirection:'row',
    backgroundColor:'rgb(205,50,43)'
  },
  leftMenu:{
    borderRadius:7,
    width:14,
    height:14,
    position:'absolute',
    right:0,
    top:0,
    backgroundColor:'red',
    justifyContent:"center",
    alignItems:'center'
  },
  menuView:{
    width:40,
    alignItems:'center',
    justifyContent:'center',
  },
  bodyView:{
    width,
    alignItems:'center',
    justifyContent:'center',
  },
  bodyViewMain:{
    flexDirection:'row',
    width:150,
    justifyContent:'space-between'
  },
  icon:{
    width:20,
    height:20
  }
});
