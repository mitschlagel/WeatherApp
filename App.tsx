import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";

import { useGetWeather } from "./src/hooks/useGetWeather";
import useGetLocation from "./src/hooks/useGetLocation";

const App: React.FC = () => {
  
  const [loading, error, weather] = useGetWeather()
  const [l, e, location] = useGetLocation()
  console.log(location)
  if (weather && location) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} location={location[0]}/>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
  

  
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
