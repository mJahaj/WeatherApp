import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"; //<Feather>

const Tab = createBottomTabNavigator(); // init Tab Object

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {backgroundColor: 'lightblue'},
        headerStyle: {backgroundColor: 'lightblue'}, 
        headerTitleStyle: {fontWeight: 'bold', fontSize: 25, color:'tomato'},
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name={"Current"}
        component={CurrentWeather}
        options={{
          tabBarIcon: (
            { focused } // if tab is focused
          ) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "black"} // icon color is tomato if focused otherwise black
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Upcoming"}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"City"}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
