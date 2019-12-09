import React from 'react'
import {
    View,
    Text,
    StyleSheet
}from 'react-native'

import uuidV4 from 'uuid/v4'
import {colors} from '../theme'


export default class AddCity extends React.Component{
    state={
        city:'',
        country:'' 

    }
    onChangeText=(key,value)=>{
        this.setState({
            [key]:value
        })
    }

    submit  =()=>{
        if(this.state.city===''|| this.state.country==='') return
        const city={
            city:this.state.city,
            country:this.state.country,
            locations:[],
            id: uuidV4()
        }
        this.props.screenProps.AddCity(city)
        this.setState({
            city:'',
            country:'',
        },()=>{
            this.props.navigation.navigate('Cities')
        
        })

    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Cities App</Text>
                <TextInput 
                placeholder='City name'
                value={this.state.city}
                onChangeText={val=>this.onChangeText('city',val)}
                
                style={styles.input}/>
                <TextInput 
                placeholder='Country  name'
                 value={this.state.country}
                 onChangeText={val=>this.onChangeText('country',val)}
                style={styles.input}/>
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text styles={styles.buttonText}>   Add City</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    input:{
        backgroundColor:'white',
        margin:10,
        paddingHorizontal:8,
        height:10,
    },
    button:{
        height:50,
        backgroundColor='#666',
        justifyContent:'center',
        alignContent:'center'
    },
    buttonText:{
        color:'white'
    },
    container:{
        backgroundColor:colors.primary,
        flex:1,
        justifyContent:'center'
    },
    heading:{
        fontSize:40,
        textAlign:'center',
        margin:10,
        color:'white'
    }

})