import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {WEATHER_API_KEY} from '@env'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
          const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
          const data = await res.json()
          setWeatherData(data)
          
        } catch (error){
          setError('Could not fetch weather')
        } finally {// execute something after try catch is completed
          setLoading(false)
        }
    
      }
    
      
      // async function: https://docs.expo.dev/versions/latest/sdk/location/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=CjwKCAjwhJukBhBPEiwAniIcNQOVpLmHDIqiOra3Kaqf8U52PV8q6fYjCpLE2e_OsA-_UX_Weix6aBoCWToQAvD_BwE
      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
    
          if (status !== "granted") {
            setError("permission to access location was denied");
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude)
          setLon(location.coords.longitude)
          await fetchWeatherData()
        })() // () for immediate invoke
      }, [lat, lon]) // [] empty means no dependencies and will only run once
      return [loading, error, weatherData]// return the state required by app component
}