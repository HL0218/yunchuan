import React,{Component} from 'react';
import { View, Text} from 'react-native';
import Button from '@ant-design/react-native/lib/button';

class Order extends Component{
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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>消息页</Text>
            <Button
             title={"go Back"}
             onPress={()=>{
                navigation.goBack()
             }}
            />           
          </View>
        );
      }
}
export default Order