/* @flow */


import { TabNavigator,TabRouter} from 'react-navigation';
import Personalized from './Personalized';
import Radio from './Radio';
import Ranking from './Ranking';
import SongSheet from './SongSheet';

export default FindTabView = TabNavigator({
  Personalized: {
    screen: Personalized,
  },
  SongSheet:{
    screen:SongSheet
  },
  Radio: {
    screen: Radio,
  },
  Ranking:{
    screen: Ranking,
  }},
  {
  initialRouteName:'Personalized',
  tabBarPosition:'top',
    lazyLoad:false,
  // scrollEnabled:true,
  // swipeEnabled:true,

  // animationEnabled:true,
  tabBarOptions: {
    showLabel:true,
    activeTintColor:'red',
    inactiveTintColor:'black',
    // scrollEnabled:true,
    tabStyle:{
      height:40,
    },
    style:{
      backgroundColor:'white'
    },
    indicatorStyle:{
      backgroundColor:'red'
    }
  },
});
