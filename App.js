import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weatherData] = useGetWeather();

  if (weatherData && weatherData.list && !loading) {
    console.log(weatherData)
    return (
      <NavigationContainer>
        <Tabs weatherData={weatherData} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    // centers the animation
    justifyContent: "center",
    flex: 1,
    backgroundColor: "lightblue",
  },
});

export default App;
