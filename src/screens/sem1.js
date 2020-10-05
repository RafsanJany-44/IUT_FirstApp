import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem1 = () => {
    const courses = [
        { name: "1. CSE 4107: Structured Programming I" , key: '1' },
        { name: "2. SWE 4101: Introduction to Software Engineering" , key: '2' },
        { name: "3. MATH 4141: Geometry and Differential Calculus" , key: '3' },
        { name: "4. HUM 4145: Islamiat" , key: '4' },
        { name: "5. HUM 4147: Technology, Environment and Society" , key: '5' },
        { name: "6. PHY 4143: Physics II" , key: '6' }, 
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={courses}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: "black",
    marginVertical: 30,
  },
  viewStyle: {
    margin: 35,
    alignSelf: 'center'
},
});
export default sem1;