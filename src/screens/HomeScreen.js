import React from "react"
import {Text,StyleSheet} from "react-native"
const HomeScreen=()=>{
    return(<Text styles={styles.textStyle}>This the home page</Text>)
}

const styles =StyleSheet.create({
    textStyle:{
        fontSize:30,
        color: "blue",
    },
})

export default HomeScreen