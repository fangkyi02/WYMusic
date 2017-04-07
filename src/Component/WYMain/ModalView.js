/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';

export default class MyComponent extends PureComponent {

  _show = () =>{
    if (this.state.ModalVisible != true) {
      this.setState({ModalVisible:true});
    }
  }

  _hide = () =>{
    if (this.state.ModalVisible != false) {
      this.setState({ModalVisible:false});
    }
  }
  constructor(props){
    super(props);
    this.state ={
      ModalVisible:false,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent={true}
          visible={this.state.ModalVisible}
          >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20,color:'red'}}>
                asasd
              </Text>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
