import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
// import Button from '@ant-design/react-native/lib/button';
import { Button, InputItem, Icon, List, WhiteSpace, WingBlank } from '@ant-design/react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import ImagePickerPage from "../../commonality/ImagePickerPage"
// import RadioButton from 'react-native-customizable-radio-button';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
var radio_props = [
  { label: '有', value: 0 },
  { label: '无', value: 1 }
];
var driver = [
  { label: '司机', value: 0 },
  { label: '车队长', value: 1 },
  { label: '车主', value: 3 }
];
class Personal extends Component {
  // static navigationOptions = {
  //   title: '详情',
  // };
  onValueChange = item => {
    console.log(item);
  };
  render() {
    const { navigation } = this.props
    const { state } = navigation
    const { params } = state
    console.log(navigation)
    // {console.log(this.props,this.props.navigation)}{this.navigation.state.params.name}
    return (
      <ScrollView style={{backgroundColor: "#ffffff", alignItem: "center" }}>
        <WingBlank style={{ paddingTop: 20,paddingLeft:20,paddingRight:20}}>
          <ImagePickerPage name="上传行驶证"/>
          <InputItem
            // labelNumber={2}
            placeholder="请输入联系人"
          >
            <Text style={styles.ZuoSize}>联系人</Text>
          </InputItem>
          <View style={styles.Straight}></View>
          <InputItem
            // labelNumber={2}
            placeholder="请输入身份证号"
          >
            <Text style={styles.ZuoSize}>身份证号</Text>
          </InputItem>
          <View style={styles.Straight}></View>
          {/*
            <InputItem 
            // labelNumber={2}
             placeholder="请输入身份证号"
            >
              <Text style={styles.ZuoSize}>车辆牌照</Text>              
            </InputItem>             */}
          <View style={{flexDirection:"row"}}>
           <Text style={styles.Pzhao}>车辆牌照</Text>
            <View style={{padding: 10,marginLeft:10}}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                labelStyle={{fontSize:15,marginTop:-3,marginRight:30,color:"#9B9B9B"}}
                formHorizontal={true}
                buttonSize={5}
                buttonColor={'#00A2F6'}
                wrapStyle={{ width: 10 }}
                onPress={(value) => { this.setState({ value: value }) }}
              />
            </View>
          </View>
          <View style={styles.Straight}></View>
          <InputItem
            // labelNumber={2}
            placeholder="请输入牌照号码"
          >
            <Text style={styles.ZuoSize}>牌照号码</Text>
          </InputItem>
          <View style={styles.Straight}></View>          
          <InputItem
            // labelNumber={2}
            placeholder="请输入VIN码"
          >
            <Text style={styles.ZuoSize}>VIN码</Text>
          </InputItem>
          <View style={styles.Straight}></View>                
          <InputItem
            // labelNumber={2}
            placeholder="请输入单位名称"
          >
            <Text style={styles.ZuoSize}>单位名称</Text>
          </InputItem>
          <View style={styles.Straight}></View>          
          <InputItem
            // labelNumber={2}
            placeholder="请输入办公地址"
          >
            <Text style={styles.ZuoSize}>办公地址</Text>
          </InputItem>
          <View style={styles.Straight}></View>       
          <View style={{flexDirection:"row"}}>
            <View style={{padding: 10,marginLeft:10}}>
              <RadioForm
                radio_props={driver}
                initial={0}
                labelStyle={{fontSize:15,marginTop:-3,marginRight:35,color:"#9B9B9B"}}
                formHorizontal={true}
                buttonSize={5}
                buttonColor={'#00A2F6'}
                wrapStyle={{ width: 10 }}
                onPress={(value) => { this.setState({ value: value }) }}
              />
            </View>
          </View>                                 
          <View style={styles.Straight}></View>
          <Button style={styles.btn} onPress={() => {
            this.props.navigation.navigate("LoginPage")
          }}>
            <Text style={{ color: "#ffffff", fontSize: 13 }}>确认提交</Text>
          </Button>         
        </WingBlank>
        <View style={{flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
          <Text style={styles.Dibu}>云豪版权所有©2020</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Margin: {
    margin: 15
  },
  Vcode: {
    backgroundColor: "#00A2F6",
    width: 102,
    height: 35,
    borderRadius: 40,
    position: "relative",
    right: -15
    // color:"#fff"
  },
  Straight: {
    backgroundColor: "#44BBFF",
    position: "relative",
    top: -2,
    height: 2,
    zIndex: 22
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#44D1FF",
    borderRadius: 70,
    color: "#fff"
  },
  Dibu: {
    fontSize: 10,
    color: "#979797",
    marginBottom:15,
    marginTop:10
  },
  ZuoSize: {
    color: "#9B9B9B",
    fontSize: 17
  },
  Pzhao:{
    color: "#9B9B9B",
    fontSize: 17,
    marginTop:7,
    marginLeft:14,
    marginBottom:10,
    marginRight:10
  }
})
export default Personal