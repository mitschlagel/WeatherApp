import React from 'react';
import { View, SafeAreaView, Text, FlatList, StyleSheet, StatusBar, ImageBackground } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

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
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear'
      },
    ],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 4.45,
      temp_min: 2.12,
    },
    weather: [
      {
        main: 'Rain'
      },
    ],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 10.55,
      temp_min: 6.45
    },
    weather: [
      {
        main: 'Sunny'
      }
    ],
  },

]

export type Props = {
  dt_txt: string;
  min: number;
  max: number;
  condition: string;
};

const Item: React.FC<Props> = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Icon name={'sun'} size={50} color={"black"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather: React.FC = () => {
  
  const renderItem = ({ item }: {item: WeatherData}) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/upcoming-background.jpg')} 
        style={styles.image} 
      >
      <Text>Upcoming Weather</Text>
      <FlatList 
        data={DATA} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightblue'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'lightblue'
  },
  temp: {
    color: 'black',
    fontSize: 20
  },
  date: {
    color: 'black',
    fontSize: 15
  },
  image: {
    flex: 1,
  }

})

export default UpcomingWeather;
