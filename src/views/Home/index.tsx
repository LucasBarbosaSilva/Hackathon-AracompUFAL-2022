
import * as Location from 'expo-location';
import MapView, { Marker } from "react-native-maps";
import { locations_default } from "../../constants/locations";
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {useLocations} from '../../hooks/Locations'

function getDistanceFromLatLonInKm(position1:any, position2:any) {
  "use strict";
  var deg2rad = function (deg:number) { return deg * (Math.PI / 180); },
      R = 6371,
      dLat = deg2rad(position2.latitude - position1.latitude),
      dLng = deg2rad(position2.latitude - position1.latitude),
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
          + Math.cos(deg2rad(position1.latitude))
          * Math.cos(deg2rad(position1.latitude))
          * Math.sin(dLng / 2) * Math.sin(dLng / 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      console.log(a)
      console.log(c)
  return ((R * c).toFixed(2));
}

export const Home = () => {
    const { functionSetLocations } = useLocations();

    const locations = {
        markers: locations_default
      }
      const [origin, setOrigin] = useState(null)
      const [destination, setDestination] = useState(null)
      const baseView = {
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
      useEffect(() => {
        (async function() {
          const {status} = await Location.requestForegroundPermissionsAsync();
          if (status == 'granted') {
            let location = await Location.getCurrentPositionAsync({});
            setOrigin({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            })
            const newLocations = locations_default
            const locationsWithDistance = newLocations.map((locationObject) => {
              const userDistance = getDistanceFromLatLonInKm(location.coords,locationObject.coordinates )
              locationObject.userDistance = Number(userDistance)
              return (locationObject)
            })

            functionSetLocations(locationsWithDistance)
            //setLocation(location);
          }else{
            throw new Error("Location permission not granted")
          }
        }) ();
      }, [])
    
    return (
        <View style={styles.container}>
        <MapView 
            style={styles.map}
            initialRegion={origin}
            showsUserLocation = {true}
            loadingEnabled = {true}
          >
        {locations.markers.map((marker, index) => (
            <Marker
              key={`marker${index}`}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>)
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });