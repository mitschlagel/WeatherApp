import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import RowText from "../components/RowText";

import { weatherType } from "../utilities/weatherType";
import WeatherData from "../@types/weatherData";

interface CurrentWeatherProps {
  weatherData: WeatherData
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const { 
    main: { 
      temp, feels_like, temp_max, temp_min }, 
      weather
    } = weatherData

    const weatherCondition = weatherType[weather[0].main] as { backgroundColor: string; message: string; icon: keyof typeof Icon.glyphMap}

  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherCondition.backgroundColor }]}>
      <View style={container}>
        <Icon name={weatherCondition.icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>`Feels like ${feels_like}`</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherCondition.message}
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
    alignContent: "center",
  },
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
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
    padding: 20,
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
