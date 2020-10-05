import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const sem3 = () => {
    const courses = [
        { name: "1. MATH 4341: Linear Algebra" , key: '1' },
        { name: "2. CSE 4303: Data Structures" , key: '2' },
        { name: "3. CSE 4305: Computer Organization and Architecture" , key: '3' },
        { name: "4. CSE 4307: Database Management System" , key: '4' },
        { name: "5. CSE 4309: Theory of Computing" , key: '5' },
        { name: "6. SWE 4301: Object Oriented Concepts II" , key: '6' },
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
    margin: 50,
    alignSelf: 'center'
},
});
export default sem3;