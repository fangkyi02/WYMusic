/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions
} from 'react-native';



const {width,height} = Dimensions.get('window');

export default class ListPlay extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      data:[
        {title:'美女1',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207459&di=7ed0fb27b20eebc6c9b6904a7e7b6411&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F19%2F97%2F73%2F10658PICwik_1024.jpg'},
        {title:'美女2',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207459&di=93169a388758c88b56c386d4905bc931&imgtype=0&src=http%3A%2F%2Fwww.1tong.com%2Fuploads%2Fwallpaper%2Fillustration%2F116-5-1366x768.jpg'},
        {title:'美女3',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207458&di=096a1dbb2dfd940a956af2df435d113b&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F23%2F90%2F07v58PICWAT_1024.jpg'},
        {title:'美女4',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207458&di=ae6916b36428b5520089ff8e2f5bbeac&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F13%2Fd359e93a30d67d31ac630eec5feba488.jpg'},
        {title:'美女5',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207458&di=07e5a3ac9649acca1cbd4df29fa0e74e&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2013%2Fmxy%2F12%2F10%2F16%2F5.jpg'},
        {title:'美女6',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207457&di=d6f9f73b84047db49d108aa97a470d87&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201409%2F30%2F20140930233607_mXYik.jpeg'},
        {title:'美女7',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491412207456&di=afb9b49dce578dc4fb524b1b86c50801&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201512%2F14%2F20151214115215_EwKfu.thumb.700_0.jpeg'},
      ]
    };
  }

  _renderItem = ({item,index}) =>{
    // return (
    //   <View style={{height:200}}>
    //     <Text style = {{fontSize:200}}>
    //       {index}
    //     </Text>
    //   </View>
    //
    // );
    return <Image key={index} source={{uri:item.img}} style={{width,height:200}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,color:'black'}}>
          {item.title}
        </Text>
      </View>
    </Image>;
  }

  _getItemLayout = (data,index) =>{
    return {length:200,offset:200*index,index}
  }
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <FlatList
          data ={this.state.data}
          renderItem ={this._renderItem.bind(this)}
          onEndReached={()=>{
            // 到达底部，加载更多列表项
            this.setState({
              data: this.state.data.concat(this.state.data)
            });
            // this.state.data = this.state.data.concat(this.state.data)
          }}
          getItemLayout={this._getItemLayout.bind(this)}>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
