import React,{Component} from 'react';//这里引入react 不然会报错
import { Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DetailPage from "../Pages/DetailPage"
import HomePage from "../Pages/HomePage"
import MyPage from "../Pages/MyPage"
// import FontAwesome from "react-native-vector-icons/FontAwesome"
const AppDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomePage,
      navigationOptions:{
        drawerLabel:"首页",
        // drawerIcon:({tintColor,focused})=>{
        //    return <FontAwesome name="home" color={tintColor} size={20}/>
        // }
      }
    },
    Detail: {
        screen: DetailPage,
        navigationOptions:{
            drawerLabel:"详情",
            // drawerIcon:({tintColor})=>{ return <FontAwesome name="windows" color={tintColor} size={20}/>}
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions:{
            drawerLabel:"我的",
            // drawerIcon:({tintColor})=>{ return <FontAwesome color={tintColor} name="user" size={20}/>}
        }
      },
  },
  {
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: '#f4511e',
        // textAlign:"center"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf:'center',
        // textAlign: 'center',
        // flex:1,
      },
    },
    // tabBarOptions: {
    //     activeTintColor: '#e91e63',
    //     labelStyle: {
    //       fontSize: 12,
    //     },
    //     style: {
    //       backgroundColor: 'skyblue',
    //     },
    //   },
    mode:"modal"
  }
  );

export default createAppContainer(AppDrawerNavigator);