import React,{Component} from 'react';
import { View, Text,TextInput,StyleSheet,Image,ImageBackground,Dimensions} from 'react-native';
import {Button,InputItem,Icon,List,WhiteSpace,WingBlank} from '@ant-design/react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
var {height,width} =  Dimensions.get('window');
class LoginPage extends Component{
  // static navigationOptions = { //定义标题文字和一些样式
  //   title: '我的',
  // };  
    render() {
        return (
          
          <View style={{ flex: 1}}>
            <View>
            <ImageBackground style={{width:null,height:207,flex:1,alignItems:"center"}} source={require('../img/yunchuan/login/lan_03.jpg')}>
            <Image  style={styles.Yunhao} source={require('../img/yunchuan/login/yunhao.png')}></Image>
            </ImageBackground>
            </View>
            <ImageBackground source={require('../img/yunchuan/login/beijing.png')} style={styles.Beijingimg}>
            <View style={{marginTop:100,marginLeft:18,marginRight:18}}>      
            {/* <TextInput
              style={{ height: 40, borderColor: 'skyblue', borderWidth: 1 }}
            />                  */}
            <InputItem 
            labelNumber={1.5}
            style={{width:50}}
             placeholder="请输入用户名"
            >
              <AntDesign color="skyblue" size={20} name={'mobile1'}/> 
            </InputItem>
            <WhiteSpace size="sm"/>
            <InputItem 
            labelNumber={1.5}
             placeholder="请输入密码"
            >
             <AntDesign color="skyblue" size={20} name={'lock1'}/> 
            </InputItem> 
            <WhiteSpace style={{marginTop:30}}/>
            <Button style={styles.Btn} type="primary" onPress={()=>{this.props.navigation.navigate("Main")}}>
              <Text style={{fontSize:15}}>登录</Text>
              </Button>
            <WhiteSpace size="sm" />
            <WingBlank size="lg">
            <View style={styles.Box}>
              <Text style={styles.Size} onPress={()=>{this.props.navigation.navigate("Forget")}}>忘记密码</Text>
              <Text style={[styles.text,styles.Size]} onPress={()=>{this.props.navigation.navigate("Register")}}>立即注册</Text>
              </View>              
              </WingBlank>      
                    
              </View>  
              <View style={{flex:1,alignItems:"center",justifyContent:"flex-end",marginBottom:22}}>
               <Text style={styles.Dibu}>云豪版权所有©2020</Text>
              </View>
              </ImageBackground> 
          </View>
          
        );
      }
}

const styles = StyleSheet.create({
  Input:{
    // borderColor:"88"


  },
  text:{
   color:"skyblue"
  },
  Size:{
    fontSize:13,
    margin:5,
    marginLeft:20,
    marginRight:20
    
  },
  Btn:{
    marginLeft:10,
    // marginRight:20,
    height:43,
    borderRadius:30,
    backgroundColor:"#44D1FF",
  },
  Box:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
    // alignItems:"center"
  },
  Beijingimg:{
    width:width,
    height:height-207,
    position:"absolute",
    top:185

  },
  Dibu:{
    fontSize:10,
    color:"#979797"
  },
  Yunhao:{
    width:80,
    height:100,
    position:"absolute",
    top:55,
    zIndex:22,
    // flex:1,
    // alignItems:"center"
  }
})
export default LoginPage