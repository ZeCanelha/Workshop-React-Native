import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, Picker, Image } from 'react-native';

//Docs:  https://facebook.github.io/react-native/docs/picker


export default class PickerBasics extends Component {
    constructor(props){
        super(props)
        this.state = { favPet:'' }
    }

    render(){
        return(
            <View style={styles.container}>
                <Picker selectedValue={this.state.favPet}  >
                    <Picker.Item label = "Frog" value = "frog" />
                    <Picker.Item label = "Snail" value = "snail" />
                    <Picker.Item label = "Rhino" value = "rhino" />
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1
    }
})


