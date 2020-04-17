import React,{Component} from 'react';//这里引入react 不然会报错
import { Image,View,Text,SafeAreaView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import DetailPage from "../Pages/DetailPage"
import HomePage from "../Pages/HomePage"
import MyPage from "../Pages/MyPage"
// import FontAwesome from "react-native-vector-icons/FontAwesome"
class AppTop extends Component{
    constructor(props){
        super(props)
        this.WEB = ["Html","Css","js","Vue","React","wx小程序"]
    }
    _gentab(){
        let tabs = {}
        this.WEB.forEach((item,index)=>{
            tabs[item] = {
                screen:()=>{
                   return <AppTopDetail name={item}></AppTopDetail>
                }
            }
        })
        return tabs
    }
    render(){
        const Tabs = createAppContainer(createMaterialTopTabNavigator(
            this._gentab(),
            {
                lazy:true,
                tabBarOptions:{
                    upperCaseLabel:false,
                    indicatorStyle:{backgroundColor:"red",height:2},
                    scrollEnabled :true
                }   
            }));
        return(
            <SafeAreaView style={{flex:1}}>
                <Tabs/>
            </SafeAreaView>
        )
    }
}
class AppTopDetail extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <View>
                <Text>hello {this.props.name}</Text>
            </View>
        )
    }
}
const TopNavigator = createMaterialTopTabNavigator({
    Home: {
      screen: HomePage,
      navigationOptions:{
        tabBarLabel:"首页",
        // tabBarIcon:<Image source={require('../img/icon_homepage_default.png')} style={{width:20 ,height:20}}/> 引入自定义图片
        // tabBarIcon:<FontAwesome name="home" size={26}/> focused选中颜色
        // tabBarIcon:({focused, horizontal, tintColor})=>{
        //     return <FontAwesome color={tintColor} name="home" size={20}/>
        // }
      }
    },
    Detail: {
        screen: DetailPage,
        navigationOptions:{
          tabBarLabel:"详情",
        //   tabBarIcon:({focused, horizontal, tintColor})=>{
        //     return <FontAwesome color={tintColor} name="hourglass" size={20}/>
        // }          
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions:{
          tabBarLabel:"我的",
        //   tabBarIcon:({focused, horizontal, tintColor})=>{
        //     return <FontAwesome color={tintColor} name="user" size={20}/>
        // }          
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
    mode:"modal",
    lazy:true,
    tabBarOptions:{
        indicatorStyle:{backgroundColor:"red",height:2},
        scrollEnabled :true
    }    
  }
  );

export default AppTop;