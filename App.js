import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ViewsBasic from './components/ViewsBasic'
import TextInputBasics from './components/TextInputBasics'
import ScrollViewBasic from "./components/ScrollViewBasic"
import PickerBasics from "./components/PickerBasics"

export default class App extends Component {
  render(){
     return (
       //<ViewsBasic />
       //<TextInputBasics />
       <ScrollViewBasic />
       //<PickerBasics />
    );
  }
}

