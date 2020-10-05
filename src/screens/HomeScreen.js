import React from "react"
import {Text,StyleSheet, Button, View} from "react-native"

const HomeScreen=(props)=>{
    console.log(props)
    return(
    <View>
        <Text style={StyleSheet.textStyle}>HomeScreen</Text>
        <Button title="Go to List Screen"  onPress={function(){
            props.navigation.navigation("List")
        }}/>
    </View>    
    )
}

const styles =StyleSheet.create({
    textStyle:{
        fontSize:30,
        color: "blue",
    },
})

export default HomeScreen