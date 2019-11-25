import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, Picker, Image } from 'react-native';


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


