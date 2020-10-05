import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../assets/profile.jpg')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name: Rafsan Jany{"\n"}{"\n"}
            Student ID: 170042044{"\n"}{"\n"}
            Room No: N/A (non-res){"\n"}{"\n"}
            Email: rafsanjany@iut-dhaka.edu
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "black",
    margin: 20,
    alignSelf: "center",
  },
  viewStyle: {
    margin: 50,
    alignSelf: "center",
    backgroundColor: "skyblue",
  },
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: 'center',
},
});
export default Profile;