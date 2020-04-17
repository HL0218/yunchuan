import React,{Component} from 'react';//这里引入react 不然会报错
import { Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,BottomTabBar  } from 'react-navigation-tabs';
import DetailPage from "../Pages/DetailPage"
import HomePage from "../Pages/HomePage"
import MyPage from "../Pages/MyPage"
// import FontAwesome from "react-native-vector-icons/FontAwesome"


const TABS = {
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            tabBarLabel:"首页",
            // tabBarIcon:({tintColor})=>{
            //     return <FontAwesome name={"home"} color={tintColor} size={26}/>
            // }
        }
    },
    DetailPage:{
        screen:DetailPage,        
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:"我的",
            // tabBarIcon:({tintColor})=>{
            //     return <FontAwesome name={"user"} color={tintColor} size={26}/>
            // }
        }        
    }
}
class TavBarComponent extends Component{
    constructor(props){
          super(props);
            // this.state = {
                this.theme={
                tintColor:props.activeTintColor,
                updateTime:new Date().getTime()
                }
            // }
            
    }
    render(){
        const {routes,index} = this.props.navigation.state
        const Clicktheme = routes[index].params
        console.log(this.theme)
        // console.log(this.state.theme.updateTime,Clicktheme)
        if(Clicktheme!=undefined){
            if(Clicktheme.updateTime>this.theme.updateTime){
                this.theme = Clicktheme
            //     this.theme=themeactiveTintColor={this.theme.tintColor||this.props.activeTintColor}
            }
        }
        console.log(this.props.activeTintColor)
        console.log(this.theme)
        return (<BottomTabBar {...this.props} activeTintColor={this.theme.tintColor||this.props.activeTintColor}/>)
    }
}
class DvnamicNav extends Component{
   render() {
       const {HomePage,DetailPage,MyPage} = TABS
       const Tabs ={HomePage,MyPage,DetailPage}
    //    Tabs.HomePage.navigationOptions.tabBarLabel="";
       const TabItem = createAppContainer(createBottomTabNavigator(Tabs,{
        tabBarComponent:TavBarComponent
       }))
       return <TabItem/>
   }
}


export default DvnamicNav