/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Animated,
  PanResponder,
  TouchableHighlight,
  Alert,
  Keyboard
} from 'react-native';

const {width,height} = Dimensions.get('window');

import Left_Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import Music_User from 'react-native-vector-icons/FontAwesome';
import Time from 'react-native-vector-icons/Ionicons';
import FootMenu from 'react-native-vector-icons/Ionicons';
import Play from 'react-native-vector-icons/MaterialIcons';

export default class Search extends PureComponent {

  constructor(props){
    super(props);
    this.state ={
      playView:new Animated.Value(0),
    };
    this.data ={
      text:'',
      ListData:[
        {data:['刘德华','周华健']},
        {data:['梅艳芳','蔡依林','罗志祥']},
        {data:['张国荣','张学友']},
        {data:['成龙','周笔畅','谢霆锋']}]
      }
  }

  componentWillMount () {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () =>  {
      if (this.props.onKeyboardHide!='undefined') {
        this.props.onKeyboardHide();
      }
    }

    _keyboardDidHide = () => {
      if (this.props.onKeyboardShow!='undefined') {
        this.props.onKeyboardShow();
      }
    }

  //头部菜单按钮按下
  _menuDown = (i) =>{
    if (this.props.onSearchBackDown!='undefined') {
      this.props.onSearchBackDown();
    }
  }

  // 名字搜索按下
  _searchDown = (i,ir) =>{

      if (global.realm.objects('Histroy').filtered(`name="${this.data.ListData[i].data[ir]}"`).length === 0 ) {
        let len = global.realm.objects('Histroy').length;
        global.realm.write(() => {
        let Histroy = global.realm.create('Histroy', {name:this.data.ListData[i].data[ir],id:len+1});
       });
       this.forceUpdate();
     };
  }

  //搜索触发按下
  _searchTouchDown = () =>{
    if (this.props.onSearchDown!='undefined') {
      this.props.onSearchDown();
    }
  }
  // 弹出菜单被按下
  _popMenuDown = () =>{
    Animated.timing(this.state.popmenu,{
      toValue:-300,
      duration:200
    }).start();
  }

  // 历史记录删除按下
  _histroyDowm = (i) =>{

    global.realm.write(() => {

      let Histroy = global.realm.objects('Histroy').filtered(`name="${i}"`);

      global.realm.delete(Histroy);

      this.forceUpdate();
    });
  }

  //歌手分类被按下
  _musicUserListDown = () =>{

  }

  // 编辑框按下
  _onSubmitEditing = () =>{

    if (this.data.text!='' && this.data.text.length>0) {
      if (global.realm.objects('Histroy').filtered(`name="${this.data.text}"`).length === 0 ) {
        let len = global.realm.objects('Histroy').length;
        global.realm.write(() => {
         let Histroy = global.realm.create('Histroy', {name:this.data.text,id:len+1});
       });
       this.forceUpdate();
      }
    }
  }

  // 初始化列表
  _initList = () =>{
    return this.data.ListData.map((el,i)=>{
      return (
          <View key={i} style={styles.ListData}>
            {
              el.data.map((e,ir)=>{
              return (
                  <View key={ir} style={[styles.data,{width:e.length*25}]}>
                    <TouchableOpacity onPress={this._searchDown.bind(this,i,ir)}>
                      <Text style={{fontSize:16,color:global.skinColor=='rgb(205,50,43)'?'black':'rgb(127,127,128)'}}>{e}</Text>
                    </TouchableOpacity>
                  </View>
                    );
                })
            }
          </View>
      );
    });
  }

  // 初始化搜索记录
  _initSeachHistry = () =>{

    let Histroy = global.realm.objects('Histroy');
    let firstCars;
    let len = Histroy.length;

    if (Histroy.length >=5) {
      firstCars = Histroy.slice(0, 5);
      len = 5;
    }else {
      firstCars = Histroy.slice(0, len);
    }

    return Array.from({length:len}).map((el,i)=>{
      return (
        <View key={i} style={styles.searchHistry}>
          <View style={{justifyContent:'center',alignItems:'center',width:50,height:50}}>
            <Time name='ios-time-outline' size={28} color='rgb(29,30,31)'></Time>
          </View>
          <View style={{borderWidth:0.5,borderBottomColor:'rgb(29,30,31)',borderColor:'transparent',width:width-60,height:50,justifyContent:'center'}}>
            <TouchableOpacity>
              <Text  style={{fontSize:18,color:global.skinColor=='rgb(205,50,43)'?'black':'rgb(127,127,128)'}}>
                {firstCars[i].name}
              </Text>
            </TouchableOpacity>
            <View style={{position:'absolute',right:10,top:13}}>
              <TouchableOpacity onPress={this._histroyDowm.bind(this,firstCars[i].name)}>
                <Text style={{fontSize:19,color:global.skinColor=='rgb(205,50,43)'?'black':'rgb(127,127,128)'}}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    })
  }


  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        {/* <-箭头 */}
        <View style={styles.header}>
          <View style={styles.leftMenuView}>
            <TouchableOpacity onPress={this._menuDown.bind(this,1)}>
              <Left_Menu name='arrow-left' size={30} color={global.skinColor=='rgb(205,50,43)'?'white':'rgb(127,127,128)'}></Left_Menu>
            </TouchableOpacity>
          </View>
          {/* 编辑框 */}
          <View>
            <TextInput
              placeholder='搜索音乐~歌手~歌词~用户'
              placeholderTextColor={global.skinColor=='rgb(205,50,43)'?'white':'rgb(127,127,128)'}
              underlineColorAndroid={global.skinColor=='rgb(205,50,43)'?'white':'rgb(127,127,128)'}
              onSubmitEditing={this._onSubmitEditing.bind(this)}
              onChangeText={(e)=>{this.data.text=e}}
              style={{width:width-60,color:global.skinColor=='rgb(205,50,43)'?'white':'rgb(127,127,128)'}}>
              </TextInput>
          </View>
        </View>

        {/* 歌手分类 */}
        <View style={styles.musicUser}>
          <Music_User name='user-o' size={25} color='rgb(127,127,128)'></Music_User>
          <TouchableOpacity onPress={this._musicUserListDown.bind(this)}>
            <Text style={{marginLeft:10,color:'rgb(127,127,128)'}}>
              歌手分类
            </Text>
          </TouchableOpacity>

          <Text style={{marginLeft:10,color:'rgb(127,127,128)'}}>
            >
          </Text>
        </View>

        {/* 歌曲搜索 */}
          <View style={styles.serachView} >
            <View style={{marginTop:25,marginLeft:5}}>
              <Text style={{fontSize:17,color:'rgb(127,127,128)'}}>
                热门搜索
              </Text>
            </View>
            <View style={{justifyContent:'space-between'}}>
              {this._initList()}
            </View>
          </View>



        {/* 搜索记录 */}
        <View style={styles.searchHistryView}>
          <ScrollView showsVerticalScrollIndicator={true}>
            {this._initSeachHistry()}
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(240,242,243)'
  },
  header:{
    flexDirection:'row',
    height:50,
    backgroundColor:'rgb(205,50,43)',
    borderBottomColor:'white',
    borderWidth:1
  },
  body:{
    backgroundColor:'rgb(18,19,20)'
  },
  leftMenuView:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  musicUser:{
    height:60,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderWidth:0.25,
    borderTopColor:'transparent',
    borderBottomColor:'rgba(127,127,128,0.3)'
  },
  ListData:{
    flexDirection:'row'
  },
  data:{
    marginTop:20,
    marginLeft:20,
    borderRadius:16,
    borderColor:'rgb(127,127,128)',
    borderWidth:1,
    height:30,
    justifyContent:'center',alignItems:'center'
  },
  searchHistryView:{
    marginTop:20,
    flex:1,
  },
  searchHistry:{
    flexDirection:'row',
    height:50,
  },
});
