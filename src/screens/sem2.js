import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem2 = () => {
    const courses = [
        { name: "1. CSE 4203: Discrete Mathematics" , key: '1' },
        { name: "2. CSE 4205: Digital Logic Design" , key: '2' },
        { name: "3. SWE 4201: Object Oriented Concepts I" , key: '3' },
        { name: "4. HUM 4247: Accounting" , key: '4' },
        { name: "5. HUM 4249: Business Psychology and Communications" , key: '5' },
        { name: "6. MATH 4241: Integral Calculus and Differential Equations" , key: '6' },
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
    fontSize: 15,
    color: "black",
    marginVertical: 30,
  },
  viewStyle: {
    margin: 50,
    alignSelf: 'center'
},
});
export default sem2;