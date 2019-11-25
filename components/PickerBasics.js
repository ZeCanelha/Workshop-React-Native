import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, Picker, Image } from 'react-native';

class PickerBasics extends Component {
    constructor(props){
        super(props)
        this.state = {favPet: "",  uri: images.frog, valueSelected: false};
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(petName)
    {
        switch (petName) {
            case "frog":
                this.setState({uri: images.frog, valueSelected: true, favPet: petName})
                break;
            case "rhino":
                this.setState({uri: images.rhino, valueSelected: true ,favPet: petName})
                break;
            case "snail":
                this.setState({uri: images.snail,valueSelected: true , favPet: petName})
                break;
            default:
                break;
        }
    
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Select your favorite pet!</Text>
                <Picker selectedValue={this.state.favPet} onValueChange={this.onValueChange}  >
                    <Picker.Item label = "Frog" value = "frog" />
                    <Picker.Item label = "Snail" value = "snail" />
                    <Picker.Item label = "Rhino" value = "rhino" />
                </Picker>
                { this.state.valueSelected ? <View><Text> There you go! Here is your favorite pet!</Text><Image source={this.state.uri} /></View>: null}
                 
    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 40
    }, images: { width: 50, height: 50}
});

const images = {
    frog: require('../assets/frog.png'),
    snail: require('../assets/snail.png'),
    rhino: require('../assets/rhino.png')
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