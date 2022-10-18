import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components' 
import {theme} from './src/theme/light'
import * as Location from 'expo-location';
import MapView, { Marker } from "react-native-maps";
import { locations_default } from "./locations";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container} onLayout={onLayoutRootView}>
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
    </View>
    </ThemeProvider>
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


// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MapView from 'react-native-maps';
// import * as Location from 'expo-location';
// import {ThemeProvider} from 'styled-components' 
// import {theme} from './src/theme/light'


// export default function App() {

//   const [origin, setOrigin] = useState(null)
//   const [destination, setDestination] = useState(null)

//   useEffect(() => {
//     (async function() {
//       const {status} = await Location.requestForegroundPermissionsAsync();
//       if (status == 'granted') {
//         let location = await Location.getCurrentPositionAsync({});
//         console.log(location)
//         setOrigin({
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         })
//         //setLocation(location);
//       }else{
//         throw new Error("Location permission not granted")
//       }
//     }) ();
//   }, [])

//   return (
//     <ThemeProvider theme={theme}>
//     <View style={styles.container}>
//       <MapView 
//           style={styles.map}
//           initialRegion={origin}
//           showsUserLocation = {true}
//           loadingEnabled = {true}
//         >
//       </MapView>
//     </View>
//     </ThemeProvider>
//   );
// }

// /*const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });*/
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });