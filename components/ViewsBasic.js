import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ViewsBasic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxBlue} />
                <View style={styles.boxRed} />
                <View style={styles.boxGreen} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // Se o parent element não tiver dimensão, os children não vão estar visiveis
    // flex permite ao componente expandir e encolher dinamicamente baseado no espraço disponivel

    container:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // 1º caso
        flex: 1
    },
    boxBlue: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        flex: 1
    },
    boxRed: {
        width: 50,
        height: 50,
        backgroundColor: "green"
    },
    boxGreen: {
        width: 50,
        height: 50,
        backgroundColor: "red"
    }
}
    
)

export default ViewsBasic;

/* 

TODO: 
    Default modelo de apresentação dos componentes (Flexbox): Falar do modelo flexbox
            Inline style não aconselhado
            Criar uma StyleSheet
        
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
*/