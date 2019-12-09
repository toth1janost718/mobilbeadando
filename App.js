import React,{Comment} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
}from 'react-native'

const instructions=Platform.select({
  ios:'Press CMD+R to reload, \n',
  android:'Press CMD+R to reload ,\n'

});

import Tabs from './src' 
const key='cities '
import AddCity from './src/AddCity/AddCity';
import { Circus } from '@jest/types';

  export default class App extends Components{
    render(){

      state={
        cities:[]
      }
       componentDidMount()
      {
        try{
          const cities=await AsyncStorage.getItem(key)
          this.setState({
            cities:JSON.parse(cities)
          })
        }
        catch(e){
          console.log('e:',e)
        }
      }

      addCity=(city)=>{

        const cities=this.state.cities
        cities.push(city)
        AsyncStorage.setItem(key,JSON.stringify(cities))
        .then(()=>console.log('item stored'))
        this.setState({cities})
        
      }
      addLocation=(location,city)=>{
        const index= this.state.cities.findIndex(item=>{return item.id===city.id
        })
        const choosenCity=this.state.cities[index]
        choosenCity.locations.push(location)
        const cities=[
          ...this.state.cities.slice(0,index),
          choosenCity,
          ...this.state.cities.slie(index+1)
        ]
        this.setState({
          cities
        },()=>{
          AsyncStorage.setItem(key,JSON.stringify(cities))
          .then(()=>console.log('Item stored'))
          .catch(err=>{
            console.log('error:',err)
          })
        })
      }
      render(); 
      {
        return (

          <Tabs 
          screenProps={{
            cities:this.state.cities,
            addCity:this.addCity,
            addLocation:this.addLocation
          }  }
          />
        )

      }

    }
      
}
  