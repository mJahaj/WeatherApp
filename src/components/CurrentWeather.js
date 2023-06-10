import react from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons'; //<Feather>

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" /> 
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.descripton}>Its Sunny</Text>
        <Text style={styles.message}>Its Perfect T-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    alignItems: "center",//horizontal align
    justifyContent: "center" // verticle align

  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end", //places content to bottom
    alignItems: "flex-start", //left of screen
    paddingLeft: 25,
    marginBottom: 40
  },
  descripton: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;
