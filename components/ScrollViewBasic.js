import React, {Component} from "react";
import {
    ScrollView, Image, StyleSheet
  } from "react-native";
 

 class ScrollViewBasic extends Component {

     render(){
         return(
             <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Similique aspernatur earum sit harum, impedit ipsam dicta tempore. Odit temporibus corporis vitae magnam dolores, vero reprehenderit eum labore dolore, ex iste.
                    </Text>
                </ScrollView>
             </View>
             
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         marginTop: 10
     },
     scroll: {
         backgroundColor: "pink",
     },
     text: {
         fontSize: 36
     }
 })


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