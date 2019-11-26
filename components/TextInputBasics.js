import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


// Docs: https://facebook.github.io/react-native/docs/textinput#content

class TextInputBasics extends Component {
  constructor(props)
  {
    super(props)
    this.state = { text:''}
    this.onChangeText = this.onChangeText.bind(this)
  }

  render(){
     return (
        <View style = {styles.container}>
          <Text> React native is ...</Text>
          <TextInput placeholder="Type your opinion here"/>
        </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default TextInputBasics;