import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather as Icon } from "@expo/vector-icons";

import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tab = createBottomTabNavigator();


interface TabProps {
  weather: WeatherForecast | null
}

const Tabs: React.FC<TabProps> = ({weather}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "royalblue",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "navy",
        },
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"droplet"}
              size={25}
              color={focused ? "navy" : "darkgrey"}
            />
          ),
        }}
      >
        {() => weather && weather.list && weather.list.length > 0 ? <CurrentWeather weatherData={weather.list[0]} /> : null}
      </ Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"clock"}
              size={25}
              color={focused ? "navy" : "darkgrey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Location"}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"home"}
              size={25}
              color={focused ? "navy" : "darkgrey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
