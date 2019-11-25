import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TextInputBasics extends Component {
  constructor(props)
  {
    super(props)
    this.state = { text:''}
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



/*

TODO: Explicar o porque do constructor:
        Para inicializar a variavel state precisamos de ter o constructor
        Tbm é necessário para o handling de eventos que modificam o estado

      Criar o Style.

      this.setState = Mete numa queue as alterações efectuadas e diz ao React
      que o componente precisam de ser re-renderizadas com o valor actualizado do estado.

      onChangeText: Callback Handler que recebo o texto como uma single string
      Não declaramos como função pois não queremos
      que execute imediatamente mas sim qd o utlizador adicione qq texto.
      
      ref: https://facebook.github.io/react-native/docs/textinput#onchangetext
/*
class TextInputBasics extends Component {
  constructor(props)
  {
    // Guardamos o texto no estado porque vai ser uma variavel
    // que vai ser alterada 
    super(props)
    this.state = { text:''}
    this.onChangeText = this.onChangeText.bind(this)
  }

  
  onChangeText(text)
  {
    this.setState({text: text})
    // console.log(this.state.text);
    
  }
  render(){
     return (
        <View style = {styles.container}>
          <Text> React native is ...</Text>
          <TextInput style={styles.input}
            placeholder="Type here!"
            onChangeText = {this.onChangeText}
            value={this.state.text}
          />
          <Text>{this.state.text}</Text>

        </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    paddingTop: 10,
    width: 100,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "black"
  }
})

export default TextInputBasics;
*/




