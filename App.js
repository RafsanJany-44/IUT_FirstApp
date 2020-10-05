import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./src/screens/HomeScreen"
import ListScreen from "./src/screens/ListScreen"
const stack = createStackNavigator()

const HiRafsan = () => {
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen name="Home" component={HomeScreen}/>

          <stack.Screen name="list" component={ListScreen}/>
          </stack.Navigator>
      </NavigationContainer>

    )};

export default HiRafsan;