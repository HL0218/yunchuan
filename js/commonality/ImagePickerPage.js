/**
 *@author：yanghx
 *@Date: 2020/2/15 12:11
 */
import React from 'react';
// 现在PropTypes不在react中
// import PropTypes from 'prop-types';

import {StyleSheet, View, Text, Image, AlertIOS} from 'react-native';

import ImagePicker from 'react-native-image-picker';

//图片选择器参数设置
const options = {
  title: '请选择图片来源',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '相册图片',
  customButtons: [{name: '自定义', title: '自定义图片'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ImagePickerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
    };
  }

  // static propTypes = {test: PropTypes.string};

  doChoose() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('用户取消了选择！');
      } else if (response.error) {
        console.log(response.error);
        alert('ImagePicker发生错误：' + response.error);
      } else if (response.customButton) {
        alert('自定义按钮点击：' + response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.Box}>
        <View>
          <Text  onPress={this.doChoose.bind(this)} style={styles.item}>+</Text>
          <Text style={{color:"#9B9B9B",fontSize:14}}>{this.props.name}</Text>
        </View>
        <Image source={this.state.avatarSource} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  image: {
    // paddingTop: 10,
    // height: 198,
    width: 300,
    alignSelf: 'center',
  },

  item: {
    fontSize:60,
    padding: 6,
    color:"#00A2F6",
    textAlign: 'center',
  },
  Box:{
    marginLeft:20,
    marginBottom:20,
    justifyContent:"center",
    alignItems:"center",
    width:250,
    height:150,
    borderRadius:10,
    borderColor: '#00A2F6',
    // // backgroundColor:"red",
    borderStyle:"dashed",
    borderWidth:2,
  }
});
