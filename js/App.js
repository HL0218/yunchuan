import React from 'react';
import { View, Text,StyleSheet,Platform,SafeAreaView } from 'react-native';
import AppNavigator from "./Navigator/AppNavigator" //头部
import AppBottomTabNavigator from "./Navigator/AppBottomTabNavigator" //底部
// import AppTop from "./Navigator/AppTopNavigator" //头部轮播
// import AppDrawerNavigator from "./Navigator/AppDrawerNavigator " //抽屉
// import AppSwitchNavigator from "./Navigator/AppSwitchNavigator" //带欢迎页面的导航
// import DvnamicNav from "./Navigator/DynamicNavigator" //自定义底部
class App extends React.Component {
  constructor(props){
      super(props)
      console.disableYellowBox = true;//隐藏警告
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <AppNavigator
         screenProps={{name:"haolei"}}
        />
      </SafeAreaView>
    );
  }
}
export default App