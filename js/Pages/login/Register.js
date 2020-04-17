import React,{Component} from 'react';
import { View, Text,StyleSheet} from 'react-native';
// import Button from '@ant-design/react-native/lib/button';
import {Button,InputItem,Icon,List,WhiteSpace,WingBlank} from '@ant-design/react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

class Register extends Component{
  // static navigationOptions = {
  //   title: '详情',
  // };
    render() {
      const {navigation} = this.props
      const {state} = navigation
      const {params} = state
      console.log(navigation)
      // {console.log(this.props,this.props.navigation)}{this.navigation.state.params.name}
        return (
          <View style={{flex:1,backgroundColor:"#ffffff",padding:20}}>
              <WingBlank style={{paddingTop:45}}>
              <InputItem 
            labelNumber={2}
             placeholder="请输入电话号"
            >
              <AntDesign size={20} name={'mobile1'}/> 
            </InputItem>
            <View style={styles.Straight}></View>
            <InputItem 
            labelNumber={2}
            extra={
              <Button
              style={styles.Vcode}
              // size="small"
              ><Text style={{fontSize:13,color:"#fff"}}>获取验证码</Text></Button>
            }
             placeholder="请输入验证码"
            >
              <AntDesign size={20} name={'codesquareo'}/> 
            </InputItem>
            <View style={styles.Straight}></View>
            <InputItem 
            labelNumber={2}
             placeholder="请输入新密码"
            >
              <AntDesign size={20} name={'lock1'}/> 
            </InputItem>
            <View style={styles.Straight}></View>
            <InputItem 
            labelNumber={2}
             placeholder="请再次输入新密码"
            >
              <AntDesign size={20} name={'lock1'}/> 
            </InputItem>  
            <View style={styles.Straight}></View>
            <Button style={styles.btn} onPress={()=>{
              this.props.navigation.navigate("Firm")
            }}>
              <Text style={{color:"#ffffff",fontSize:13}}>企业注册</Text>                
            </Button>
            <Button style={styles.btn1} onPress={()=>{
              this.props.navigation.navigate("Personal")
            }}>
              <Text style={{color:"#ffffff",fontSize:13}}>个人注册</Text>                
            </Button>            
            </WingBlank>    
            <View style={{flex:1,alignItems:"center",justifyContent:"flex-end"}}>
               <Text style={styles.Dibu}>云豪版权所有© 2020</Text>
              </View>                                         
          </View>
        );
      }
}
const styles = StyleSheet.create({
  Margin:{
      margin:15
  },
  Vcode:{
    backgroundColor:"#00A2F6",
    width:102,
    height:35,
    borderRadius:40,
    position:"relative",
    right:-15
    // color:"#fff"
  },
  Straight:{
    backgroundColor:"#44BBFF",
    position:"relative",
    marginBottom:20,
    top:-2,
    height: 2,
    zIndex:22
  },
  btn:{
    marginTop:25,
    backgroundColor:"#44D1FF",
    borderRadius:70,
    color:"#fff"
  },
  btn1:{
    marginTop:20,
    backgroundColor:"#FF6D36",
    borderRadius:70,
    color:"#fff",
  },
  Dibu:{
    fontSize:10,
    color:"#979797"
  },
})
export default Register