/* @flow */


import { TabNavigator} from 'react-navigation';
import MyView from './My';
import FindView from './Find';
import DynamicView from './Dynamic';



export default TabView = TabNavigator({
  My: {
    screen: MyView,
  },
  Find: {
    screen: FindView,
  },
  Dynamic:{
    screen: DynamicView,
  }},
  {
  initialRouteName:'Find',
  tabBarPosition:'bottom',
  // lazyLoad:true,
  animationEnabled:true,
  tabBarOptions: {
    showLabel:false,
    scrollEnabled:false,
  },
});
