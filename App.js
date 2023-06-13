import React, {useState} from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

const App = () => {
  const [loading, setLoading] = useState(true)
  if (loading) {
    return(
      <View style={styles.container}>
        <ActivityIndicator size={110} color={'blue'}/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {// centers the animation
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'lightblue'
  },
});

export default App;
