import React from "react"
import {Text,View,StyleSheet} from "react-native"

const ListScreen = () =>{
    const uni_1="buert"
    const uni_2="Iut"
    const uni_3="ruet"
    const uni_4="kuet"
    const uni_5="cuet"
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{uni_1}</Text>
            <Text style={styles.textStyle}>{uni_2}</Text>
            <Text style={styles.textStyle}>{uni_3}</Text>
            <Text style={styles.textStyle}>{uni_4}</Text>
            <Text style={styles.textStyle}>{uni_5}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{fontSize:30,color:"purple",color:"blue",marginVertical:30},
    viewStyle:{backgroundColor:"pink"},
})
export default ListScreen