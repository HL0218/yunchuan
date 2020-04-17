import React,{Component} from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import hatchway from "../Navigator/hatchway"
import DateStore from "../Https/AsDemo"
class MyPage extends Component{
  // static navigationOptions = { //定义标题文字和一些样式
  //   title: '我的',
  // };  
  constructor(props){
    super(props)
    this.names =["推荐","视频","热点","社会","娱乐","军事"]
    // this.dataStore = new DateStore()
  }
  componentDidMount(){
    // let url = "https://www.fastmock.site/mock/05a6ce8f63fb673694e5596a38299ebd/loginText/api/userLogin"
    // let url = "http://jsonplaceholder.typicode.com/posts"
    // this.dataStore.fetchData(url)
    // .then(res=>{
    //   console.log(res)
    // }).catch((e)=>{
    //   console.log(e)
    // })
  }
  genTab(){
    let obj = {};
    this.names.forEach((item,index)=>{
        obj[`${item}`] = {
          screen:(props)=>{
            return <ItemPage {...props} name={item}/> //这里要加return
          }
        }
    })
    return obj
  }
    render() {
      const Tabs = createAppContainer(createMaterialTopTabNavigator(this.genTab()))
        return (
            <Tabs/>
        );
      }
}
class ItemPage extends Component{
  render(){
    return (<View style={styles.container}>
      <Text>我的页面 {this.props.name}</Text>
      <Button title={`点击跳转详情页`} onPress={()=>{
        hatchway.navigation.navigate('DetailPage')
      }}/>
    </View>)
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,justifyContent:"center",alignItems:"center"
  }
})
export default MyPage