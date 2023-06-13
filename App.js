import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // async function: https://docs.expo.dev/versions/latest/sdk/location/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=CjwKCAjwhJukBhBPEiwAniIcNQOVpLmHDIqiOra3Kaqf8U52PV8q6fYjCpLE2e_OsA-_UX_Weix6aBoCWToQAvD_BwE
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location)
    })() // () for immediate invoke
  }, []) // [] empty means no dependencies and will only run once

  if (location) {
    console.log(location);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={110} color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
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
