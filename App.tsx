import React from "react";
import { View, StyleSheet } from "react-native";

import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
     <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

// 2:00:46 11/17/2023