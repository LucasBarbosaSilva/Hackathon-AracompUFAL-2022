import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme/light'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/views/Home/index'
import { RegisterPointScreen } from './src/views/RegisterNavigator/index'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'react-native-linear-gradient'


const Tab = createBottomTabNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


function NearbyPoints() {
  return (
    <View style={styles.container}>
      <Text>New Post!</Text>
    </View>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // const Drawer = createDrawerNavigator();


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
      <NavigationContainer>
        {/* <Drawer.Navigator
       drawerType="front"
       initialRouteName="Profile"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       }}
>
  </Drawer.Navigator> */}
        <View onLayout={onLayoutRootView}>
        </View>
        <Tab.Navigator initialRouteName='Mapa' screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Registrar Ponto':
                iconName = 'plus';
                break;
              case 'Mapa':
                iconName = 'map';
                break;
              case 'Onde descartar':
                iconName = 'list';
                break;
              default:
                iconName = 'circle';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

        })} tabBarOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: '#777',
          showLabel: false,
        }} >
          <Tab.Screen name="Registrar Ponto" component={RegisterPointScreen} />
          <Tab.Screen
            name="Mapa"
            component={Home}
            options={() => ({
              tabBarIcon: () => (
                <View>
                  <View style={styles.iconTabRound} >
                    <Icon name="map" size={26} color='#FFF' />
                  </View>
                </View>
              ),
            })}
          />
          <Tab.Screen name="Onde descartar" component={NearbyPoints} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {

  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    backgroundColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});


