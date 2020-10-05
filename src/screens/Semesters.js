import React from "react";
import {View, StyleSheet, Button} from "react-native";

const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style = {styles.buttonStyle}>
        <Button
          title="1st Semester"
          onPress={function (){
            props.navigation.navigate("Semester_1");
            }
          }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="2nd Semester"
            onPress={function (){
              props.navigation.navigate("Semester_2");
              }
            }
          color="green"
        />
      </View>
      <View style = {styles.buttonStyle}>
        <Button
          title="3rd Semester"
            onPress={function (){
              props.navigation.navigate("Semester_3");
              }
          }
          color="green"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: "blue",
    marginVertical: 30,
  },
  viewStyle: {
      margin: 100,
      alignItems: 'center'
  },
  buttonStyle: {
    margin: 15,
  },
});
export default Semesters;