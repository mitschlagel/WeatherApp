import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";

import { useGetWeather } from "./src/hooks/useGetWeather";

const App: React.FC = () => {
  
  const [loading, error, weather] = useGetWeather()
  console.log(JSON.stringify(weather, null, 2 ))

  if (weather) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
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
