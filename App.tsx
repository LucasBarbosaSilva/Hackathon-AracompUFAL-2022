import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


export default function App() {

  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)

  useEffect(() => {
    (async function() {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status == 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
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
      </MapView>
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
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