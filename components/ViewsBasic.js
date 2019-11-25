import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

        
class ViewsBasic extends Component {
    render() {
        return (
            <View
                style={{
                height: 100,
                padding: 20,
                }}>
                <View style={{backgroundColor: 'blue', flex: 0.3}} />
                <View style={{backgroundColor: 'red', flex: 0.5}} />
                <Text>Hello World!</Text>
            </View>

        )
    }
}

export default ViewsBasic;