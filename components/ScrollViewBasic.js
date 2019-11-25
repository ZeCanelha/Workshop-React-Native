import React, {Component} from "react";
import {
    ScrollView, Image, StyleSheet, View, Text, FlatList
  } from "react-native";
 
 export default class ScrollViewBasic extends Component {

     render(){
         return(
             <View style={styles.container}>
                <Text style={styles.header}> Scroll Component! </Text>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.textSmall}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Similique aspernatur earum sit harum, impedit ipsam dicta tempore. Odit temporibus corporis vitae magnam dolores, vero reprehenderit eum labore dolore, ex iste.
                    </Text>
                    <Text style={styles.textMedium}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque quibusdam quo magni commodi blanditiis quod, 
                        dicta rem hic voluptatum sapiente earum voluptate expedita aliquam omnis, porro temporibus maxime consequatur?
                     </Text>
                     <Text style={styles.textLarge}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque quibusdam quo magni commodi blanditiis quod, 
                        dicta rem hic voluptatum sapiente earum voluptate expedita aliquam omnis, porro temporibus maxime consequatur?
                     </Text>

                </ScrollView>
             </View>
             
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         height: 500,
         marginTop: 20,
         justifyContent: "center"
     },
     scroll: {
         backgroundColor: "white",
         borderWidth: 1,
         borderColor: "red"
         
     },
     header: {
         margin: 30
     },
     textSmall: {
         color: "blue",
         fontSize: 18,
         marginBottom: 20
     },
     textMedium: {
        color: "red",
        fontSize: 38,
        marginBottom: 20
     },
     textLarge: {
         color: "green",
         fontSize: 46 ,
         marginBottom: 20
     }
    
 });


 /*

 TODO: 
 Add: 

    Style: As scrolls tem que ter obrigatoriamente uma altura
        definida. Não é encorajado a definir a altura da view directamente
        mas sim, que todas as parent views tenham alturas definidas.
    Image: Adicionar uma imagem dentro do ScrollView
    ScrollView vs FlatList: ScrollView renderiza todos os childs elements.
    FlatList: Lazyload, renderiza á medida que os componentes vão aparecendo no ecrã. 


  class ScrollViewBasic extends Component {

     render(){
         return(
             <ScrollView>
                <Text>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Similique aspernatur earum sit harum, impedit ipsam dicta tempore. Odit temporibus corporis vitae magnam dolores, vero reprehenderit eum labore dolore, ex iste.
                </Text>
             </ScrollView>
         )
     }
 }

 */