
import * as Location from 'expo-location';
import MapView, { Marker } from "react-native-maps";
import { locations_default } from "../../constants/locations";
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Home = () => {
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