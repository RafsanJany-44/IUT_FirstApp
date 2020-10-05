import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const FacultyList = () => {
    const teachers = [
        { name: "1. Ridwan Kabir" , key: '1' },
        { name: "2. Sabbir Ahmed" , key: '2'},
        { name: "3. Jubair Ibna Mostofa" , key: '3' },
        { name: "4. Bakhtiar Hasan" , key: '4' },
        { name: "5. Mohayeminul Islam" , key: '5' },
        { name: "6. Tasnim Ahmed" , key: '6'},
        { name: "7. Ridwan Karim Sony" , key: '7' },
        { name: "8. Faisal Hussain" , key: '8' },
      ];
      return (
        <View style={styles.viewStyle}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            data={teachers}
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
export default FacultyList;