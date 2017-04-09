/* @flow */


import { TabNavigator} from 'react-navigation';
import My from './My';
import Find from './Find';
import Dynamic from './Dynamic';
import ListVideo from '../WYMain/ListVideo';



export default TabView = TabNavigator({
  My: {
    screen: My,
  },
  Find: {
    screen: Find,
  },
  Dynamic:{
    screen: Dynamic,
  },
}, {
  initialRouteName:'Find',
  tabBarPosition:'bottom',
  // swipeEnabled:false,

  lazyLoad:true,
  animationEnabled:false,
  tabBarOptions: {
    showLabel:false,
    scrollEnabled:false,
    tabStyle:{
      height:0,
      opacity:0,
      backgroundColor:'red'
    },
    style:{
      height:0,
      opacity:0,
      backgroundColor:'red'
    },
    labelStyle:{
      height:0,
      opacity:0,
    },
    iconStyle:{
      height:0,
      opacity:0,
    },
    indicatorStyle:{
      height:0,
      opacity:0,
    }

  },
});
