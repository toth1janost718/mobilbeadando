import React,{Component} from 'react';
import{
  Platform,
  StyleSheet,
  Text,
  View
}from 'react-native';

const instructions=Platform.select({
  ios:'Press CMD+R to reaload,\n',
  android:'Double tap R on your keyboard or reload,\n'

});

import Tabs from './src'

export default class App extends Component{
  render(){
    return <Tabs/>
  }
}


