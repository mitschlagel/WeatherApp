import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";

import ListItem from "../components/ListItem";

interface WeatherData {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: { main: string }[];
}

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 4.45,
      temp_min: 2.12,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_max: 10.55,
      temp_min: 6.45,
    },
    weather: [
      {
        main: "Sunny",
      },
    ],
  },
];

const UpcomingWeather: React.FC = () => {
  const renderItem = ({ item }: { item: WeatherData }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "lightblue",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
