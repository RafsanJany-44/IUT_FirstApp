import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native';

const Home = (props)=>{
    return (
    <ScrollView>
        <View style= {styles.viewStyle}>
                <Image
                    source={require ('../../assets/iutlogo.png')}
                    style={styles.imageStyle}
                />

            <View style = {styles.buttonStyle}>
                <Button
                    title="View My Profile"
                    onPress={function (){props.navigation.navigate("Profile")}}
                    color="#659700"
                    margin="25"
                />
            </View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Semester Info"
                    onPress={function (){props.navigation.navigate("Semesters");}}
                    color="#659700"
                    margin="25"
                />
            </View>
            <View style = {styles.buttonStyle}>
                <Button
                    title="Faculty Members"
                    onPress={function (){props.navigation.navigate("FacultyList");}}
                    color="#659700"
                    margin="25"
                />
            </View>
        </View>
    </ScrollView>
        );
};


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 18,
            color:'black',
            textAlign: "center",
            margin: 20
        },
        imageStyle: {
            height: 420,
            width: 250,
            alignSelf: 'center',
        },
        viewStyle: {
            margin: 50,
            backgroundColor:"#E7FFB6",
            alignSelf: 'center'
        },
        buttonStyle: {
            margin: 10,
        },
        touchStyle: {
            fontSize: 20,
            color:'blue',
            textAlign: "center",
            margin: 15,
            textDecorationLine: 'underline',
        },
    }
);

export default Home;