import React, { useState, useEffect } from "react";

import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env"

const useGetLocation = (): [loading: boolean, error: string | null, currentLocation: LocationResponse | null] => { 
    const [loading, setLoading] = useState<boolean>(true);
    const [location, setLocation] = useState<LocationResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [lat, setLat] = useState<number | null>(null)
    const [long, setLong] = useState<number | null>(null)

    const fetchLocation = async () => {
        try {
          const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`)
          const data = await response.json()
          setLocation(data)
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
          await fetchLocation()
        })();
      }, [lat, long]);

    return [loading, error, location]

}

export default useGetLocation;