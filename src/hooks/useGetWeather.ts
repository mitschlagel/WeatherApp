import React, { useState, useEffect } from "react";

import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env"


export const useGetWeather  = (): [boolean, string | null, WeatherForecast | null] => {

    const [loading, setLoading] = useState<boolean>(true);
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [weather, setWeather] = useState<WeatherForecast | null>(null)
    const [lat, setLat] = useState<number | null>(null)
    const [long, setLong] = useState<number | null>(null)

    const fetchWeatherData = async () => {
        try {
          const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`)
          const data = await response.json()
          setWeather(data)
          setLoading(false)
        } catch (error: any) {
          setError(error.message)
        } finally {
          setLoading(false)
        }
        
      }
    
      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setError("Permission to access location was denied");
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude)
          setLong(location.coords.longitude)
          await fetchWeatherData()
        })();
      }, [lat, long]);

    return [loading, error, weather]
}