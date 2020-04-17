import React,{Component} from 'react';//这里引入react 不然会报错
import { Image} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DetailPage from "../Pages/DetailPage"
import HomePage from "../Pages/HomePage"
import MyPage from "../Pages/MyPage"
import LoginPage from "../Pages/Login"
import WelcomePage from "../Pages/WelcomePage"
//login下的页面
import Forget from "../Pages/login/Forget"
import Register from "../Pages/login/Register"
import Firm from "../Pages/login/Firm"//企业注册
import Personal from "../Pages/login/Personal"//个人注册
// import FontAwesome from "react-native-vector-icons/FontAwesome"
const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            header:null
        }
    }
})
const LoginNavigator = createStackNavigator({
    LoginPage:{
        screen:LoginPage,
        navigationOptions:{
            header:null
        }
    },
    Forget:{
      screen:Forget,
      navigationOptions:{
          title:"找回密码",
      }
    },
      Register:{
        screen:Register,
        navigationOptions:{
          title:"用户注册",
        }
      },
      Firm:{
        screen:Firm,
        navigationOptions:{
          title:"企业用户注册",
        }
      },
      Personal:{
        screen:Personal,
        navigationOptions:{
          title:"个人用户注册",
        }
      },


},{
  defaultNavigationOptions:{
    headerTitleAlign:"center",
    headerStyle: {
      height:30,
      backgroundColor:"#00A2F6"
    },
    headerTitleStyle:{
        fontSize:12,
        color:"#fff"
    },
    // headerLeft:null
  }
})
const MainNavigator = createStackNavigator({
    HomePage:{
      screen:HomePage,
      navigationOptions:{
        header:null
    }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
          header:null
      }
    },
    MyPage:{
      screen:MyPage
    }
})
const AppSwitchNavigator = createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,
    Login:LoginNavigator
})

export default createAppContainer(AppSwitchNavigator);