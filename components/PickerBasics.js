import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    Picker
} from 'react-native';

class PickerBasics extends Component {
    constructor(props){
        this.state:{
            favPet:''
            }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    })
    render(){
        return(
            <View>
                <Picker selectedValue={this.state.favPet}  >
                    <Picker.Item label = "Frog" value = "frog" />
                    <Picker.Item label = "Snail" value = "snail" />
                    <Picker.Item label = "Rhino" value = "rhino" />
                </Picker>
            </View>
        )
    }
}

export default PickerBasics;

/*

TODO: Selecionar um elemento do picker e mostrar a imagem correspondente.
       https://facebook.github.io/react-native/docs/picker

       OnValueChange(). Actualizar o estado para o nome da imagem e mostrar a imagem correspondente.



class PickerBasics extends Component {
    constructor(props){
        this.state:{
            favPet:''
            }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    })
    render(){
        return(
            <View>
                <Picker selectedValue={this.state.favPet}  >
                    <Picker.Item label = "Frog" value = "frog" />
                    <Picker.Item label = "Snail" value = "snail" />
                    <Picker.Item label = "Rhino" value = "rhino" />
                </Picker>
            </View>
        )
    }
}

*/