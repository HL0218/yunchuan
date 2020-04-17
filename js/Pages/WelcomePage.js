import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground,Dimensions } from 'react-native';
import { Button } from '@ant-design/react-native';
var {height,width} =  Dimensions.get('window');
class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.timer = null
        this.state = {
            num: 5,
            isLogin: false
        }
    }
    // componentDidMount(){
    //     this.timer = setInterval(()=>{
    //         this.props.navigation.navigate("Main")
    //         // this.setState={
    //         //     num:num-1
    //         // }
    //         console.log(1)
    //     },1000)
    // }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }
    _homepage = () => {
        this.props.navigation.navigate(this.state.isLogin ? "Main" : "Login")
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../img/yunchuan/beijing.jpg')} style={{ width:width, height:height,flex:1,padding:0}}>
                    <View style={{ flex: 1, }}>
                        {/* <Text style={{width:74,height:28,position: 'absolute',bottom: 103,right: 8}}>
                        <Image  style={{width:74,height:28,position: 'absolute',bottom: 103,right: 8,}} source={require('../img/yunchuan/skip.png')} />
                       </Text> */}
                       <Image  style={styles.slogan} source={require('../img/yunchuan/slogan.png')} />
                        <Button onPress={this._homepage} style={styles.Btn}><Text style={{ fontSize: 14, color: "white", }}>跳过</Text></Button>
                        <View style={{flex:1,alignItems:"center"}}>
                            <Image  style={styles.logo} source={require('../img/yunchuan/logo.png')} /> 
                            </View>  
                        <View style={styles.ImgBox}> 
                            <Image source={require('../img/yunchuan/dibu.png')} style={styles.Image} />                         
                        </View>
                    </View>

                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ImgBox:{
           position: 'absolute',
           width:null,
           height:100,
    },
    Image: {
        position: 'relative',
        top: height-112,
        left:0,
        height: 112,
        width: width,
    },
    Btn: {
        position: 'absolute',
        bottom: 103,
        right: 8,
        width: 74,
        height: 28,
        fontSize: 8,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 40,
    },
    slogan:{
        width:25,
        height:16,
        position: 'absolute',
        top: 50,
        right:15,        
    },
    logo:{
        width:122,
        height:50,
        // display:"flex",
        // justifyContent:"flex-end",
        // alignItems:"flex-start"
        // margin:"auto",
        position: 'absolute',
        bottom: 22,
        // left:145,    
        zIndex:1,
        // paddingLeft:"-10"
    }
})
export default WelcomePage