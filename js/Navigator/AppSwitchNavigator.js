import React,{Component} from 'react';//这里引入react 不然会报错
import { Image} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DetailPage from "../Pages/DetailPage"
import HomePage from "../Pages/HomePage"
import MyPage from "../Pages/MyPage"
import WelcomePage from "../Pages/WelcomePage"
import FontAwesome from "react-native-vector-icons/FontAwesome"
const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null
        }
    }
})
const MainNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage
    },
    DetailPage:{
        screen:DetailPage
    }    
})
const AppSwitchNavigator = createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator
})

export default createAppContainer(AppSwitchNavigator);