import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather: React.FC = () => {

  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Icon name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
          messageOne={'High: 8'} 
          messageTwo={'Low: 6'} 
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
         <RowText 
          messageOne={"It's sunny"} 
          messageTwo={"It's perfect t-shirt weather"} 
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignContent: "center"
  },
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
    padding: 20
  },
  bodyWrapper: {
    alignItems: "center",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 38,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
