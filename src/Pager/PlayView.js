/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  ScrollView
} from 'react-native';

import LeftIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width,height} = Dimensions.get('window');

export default class PlayView extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      songPos:0,
      songRotateView:false,
      songData:this.props.navigation.state.params.songData,
      playSongNeedle:new Animated.Value(0),
      songRotate:new Animated.Value(0),
      songRotateState:false,
    }
    this.data = {

    };

    let {params} = this.props.navigation.state;

    this.data.songPos = params.songPos;
  }

  _leftDown = () =>{
    this.props.navigation.goBack();
  }

  _startRotate = () =>{
    if (this.state.songRotateState == true) {
    Animated.timing(this.state.songRotate,{
      toValue:360,
      duration:5000,
    }).start(()=>{
      this.state.songRotate.setValue(0);
      this._startRotate();
    })
  }else {
    console.warn('动画结束');
    this.setState({
      songRotateView:false
    });
  }
  }
  _startAnimate = () =>{
        Animated.timing(this.state.playSongNeedle,{
          toValue:20,
        }).start();

        this.setState({
          songRotateView:true,
          songRotateState:true
        },()=>{
          this._startRotate();
        })

  }

  _endAnimate = () =>{
    Animated.timing(this.state.playSongNeedle,{
      toValue:0,
    }).start();
    this.forceUpdate();
    // this.state.songRotate.stopAnimation()
  }


  _initReder = () =>{
    return this.state.songData.map((el,i)=>{
      return (
        <View style={styles.playSongDisc}>
          <Animated.Image
            resizeMode={Image.resizeMode.stretch}
            source={require('../Component/assets/ic_disc.png')}
            style={{
              width:200,height:200,
              justifyContent:'center',alignItems:'center',
            }}>
            <Image source={{uri:el.pic_big}} style={{borderRadius:66,width:132,height:132}}/>
          </Animated.Image>
        </View>
      );
    })
  }

  // 滚动条一帧结束
 _onMomentumScrollEnd = (e) =>{
   console.warn('end');
   this._startAnimate();

   let contentSize,contentOffset,layoutMeasurement;

   contentSize = e.nativeEvent.contentSize.width;
   contentOffset = e.nativeEvent.contentOffset.x;
   layoutMeasurement = e.nativeEvent.layoutMeasurement.width;

   this.setState({
     songPos:Math.round(contentOffset/contentSize*this.state.songData.length)
   })

 }

 // 滚动条按下屏幕时触发
 _onTouchStart = () =>{
   this.state.songRotateState = false;
   this.state.songRotateView = false;
   this.state.songRotate.stopAnimation();
   this._endAnimate();
 }

  render() {
    console.warn('songRotateView',this.state.songRotateView);
    let {params} = this.props.navigation.state;
    let pos = this.state.songPos;

    return (
      <View style={styles.container}>

        <Image source={require('../Component/assets/ic_blackground.png')}/>

        <View style={styles.playViewPos}>

          <View style={styles.playView}>
            {/* 头部部分 */}
            <View style={styles.playHeader}>
              <View style={styles.playHeaderLeft}>
                <TouchableOpacity onPress={this._leftDown.bind(this)}>
                  <LeftIcon name='arrow-left' size={30} color='white'/>
                </TouchableOpacity>
              </View>
              <View style={styles.playHeaderSong}>
                <Text style={styles.playHeaderText1}>{params.songData[pos].title}</Text>
                <Text style={styles.playHeaderText2}>{params.songData[pos].author}</Text>
              </View>
            </View>

           {/* 播放器主界面 */}
           <View style={{flex:1,}}>

             {/* 唱针部分 */}
             <View style={styles.playSongNeedleView}>
               <Animated.Image
                 style={{
                   width:90,height:140,
                   transform:[{
                     rotate:this.state.playSongNeedle.interpolate({
                       inputRange:[0,20],
                       outputRange:['-20deg','0deg']
                     })
                   }]
                 }}
                 source={require('../Component/assets/ic_needle.png')}
                 resizeMode={Image.resizeMode.stretch}/>
             </View>

            {/* 唱片部分 */}
             <View style={styles.playSongView}>
               <ScrollView
                 horizontal={true}
                 pagingEnabled={true}
                 showsHorizontalScrollIndicator={false}
                 onTouchStart={this._onTouchStart.bind(this)}
                 onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                 contentContainerStyle={{
                   justifyContent:'center',
                   alignItems:'center',
                 }}
                 >
                 {this._initReder()}
                 </ScrollView>

                 <View style={{position:'absolute',width,height:220,alignItems:'center',}}>
                     <Animated.Image
                       resizeMode={Image.resizeMode.stretch}
                       source={require('../Component/assets/ic_disc.png')}
                       style={{
                         width:200,height:200,
                         display:this.state.songRotateView?'flex':'none',
                         justifyContent:'center',alignItems:'center',
                         transform:[{
                           rotate:this.state.songRotate.interpolate({
                             inputRange:[0,360],
                             outputRange:['0deg','360deg']
                           })
                         }]
                       }}>
                       <Image source={{uri:this.state.songData[pos].pic_big}} style={{borderRadius:66,width:132,height:132}}/>
                     </Animated.Image>
                 </View>

             </View>

           </View>
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
  playViewPos:{
    position:'absolute',
  },
  playView:{
    flex:1,
  },
  playHeader:{
    width,
    zIndex:2,
    height:50,
    flexDirection:'row',
    borderWidth:1,
    borderBottomColor:'rgba(255,255,255,0.2)',
    backgroundColor:'rgba(255,255,255,0.1)'
  },
  playHeaderLeft:{
    width:50,
    alignItems:'center',
    justifyContent:'center'
  },
  playHeaderText1:{
    color:'white',
    fontSize:18,
  },
  playSongNeedleView:{
    alignItems:'center',
    marginLeft:30,
    marginTop:-20,
    zIndex:1,
  },
  playSongDisc:{
    width,
    height:200,
    alignItems:'center',
    marginTop:-10
  },
  playSongView:{
    width,
    height:220,
    marginTop:-50,
  }
});
