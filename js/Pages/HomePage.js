import React,{Component} from 'react';
import { View, Text,AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import DetailPage from "./DetailPage.js"
import MyPage from "./MyPage.js"
import Order from "./Order.js"
import hatchway from "../Navigator/hatchway"
import { MapView } from "react-native-amap3d";
import {
  Button, Flex, WhiteSpace, WingBlank
} from '@ant-design/react-native';

// import { Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';

class HomePage extends Component{
  // static navigationOptions = { //定义标题文字和一些样式
  //   title: '首页',
  // };
    render() {
      const option = {
        title: {
            text: 'ECharts demo'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      };      
      console.log(this.props,this.props.navigation)
        return (          
          <View style={{ }}>
            {/* <Echarts option={option} height={300} /> */}
        <WingBlank style={{margin:200 }}  size="sm">
          <Flex>
            <Flex.Item style={{ paddingLeft:0, paddingRight:0 }}>
              <Button type="primary"  onPress={()=>{this.props.navigation.navigate('Weixu')}}   size="small">维修提醒</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft:0, paddingRight:0 }}>
              <Button type="primary"  onPress={()=>{this.props.navigation.navigate('Cheliang')}}   size="small">车辆提醒</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft:0, paddingRight:0 }}>
              <Button type="primary"  onPress={()=>{this.props.navigation.navigate('Qita')}}   size="small">其他提醒</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>            
            <Text>HomePage Screen</Text>
            {/* <Button
             title={"展开抽屉"}
             onPress={()=>{
                this.props.navigation.toggleDrawer()
             }}
            />  */}
            <View style={{margin:10}}>
              <Button
               size="small"
              // title={"go detail"}
              // style={{height:300}}
              onPress={()=>{this.props.navigation.navigate('DetailPage')}}
              >detail</Button>
            </View>
            <View style={{margin:10}}>
            <MapView
          coordinate={{
            latitude: 39.91095,
            longitude: 116.37296
          }}
        />
              <Button
               size="small"
              title={"改变主题颜色"}
              // style={{height:300}}
              onPress={()=>{
                  this.props.navigation.setParams({
                    tintColor:"pink",
                    updateTime:new Date().getTime()
                  })
              }}
              >改变主题颜色</Button>
            </View>            

          </View>
        );
      }
}
// 子页面
import Weixu from "./homes/weixu"
import Cheliang from "./homes/cheliang"
import Qita from "./homes/qita"
const Parcel = createStackNavigator({
  HomePage:{
    screen:HomePage,
    navigationOptions:{
        tabBarLabel:"首页",
        header:null
    }
  },
  Weixu:{
    screen:Weixu,
    navigationOptions:{
        tabBarLabel:"维修"
    }
  },  
  Cheliang:{
    screen:Cheliang,
    navigationOptions:{
        tabBarLabel:"车辆"
    }
  },
  Qita:{
    screen:Qita,
    navigationOptions:{
        tabBarLabel:"其他"
    }
  },    
})
const Tabs = {
  Parcel:{
    screen:Parcel,
    navigationOptions:{
        tabBarLabel:"首页",
        tabBarIcon:({focused, horizontal, tintColor})=>{
          return <FontAwesome color={tintColor} name="home" size={20}/>
      }         
    }
},
  DetailPage:{
      screen:DetailPage,
      navigationOptions:{
          tabBarLabel:"订单",
          tabBarIcon:({focused, horizontal, tintColor})=>{
            return <FontAwesome color={tintColor} name="list-alt" size={20}/>
        }           
      }
  },
  Order:{
    screen:Order,
    navigationOptions:{
        tabBarLabel:"消息",
        tabBarIcon:({focused, horizontal, tintColor})=>{
          return <AntDesign color={tintColor} name="message1" size={20}/>
      }         
    }
},  
  MyPage:{
    screen:MyPage,
    navigationOptions:{
        tabBarLabel:"我的",
        tabBarIcon:({focused, horizontal, tintColor})=>{
          return <FontAwesome color={tintColor} name="user" size={20}/>
      }         
    }
},
}
class tabs extends Component{
  render(){
    hatchway.navigation = this.props.navigation  //保存到路由信息到公共配置中
    console.log()
    const Tab= createAppContainer(createBottomTabNavigator(Tabs))
    return <Tab/>
  }
}
export default tabs//createAppContainer(createBottomTabNavigator(Tabs))
