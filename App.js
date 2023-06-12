import React from "react";
import { Text } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator(); // init Tab Object
const App = () => {
  return (
    <NavigationContainer
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Navigator>
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
            tabBarIcon: ({focused}) => (
              <Feather
                name={"clock"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen name={"City"} component={City} options={{
          tabBarIcon: ({focused}) => (
            <Feather name={"home"} size={25} color={focused ? 'tomato' : 'black'}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
