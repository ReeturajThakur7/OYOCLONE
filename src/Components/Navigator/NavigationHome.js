import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Bookings from './Bookings';
import SplashScreen from '../SplashScreen';

const Tab = createBottomTabNavigator();

const NavigationHome = ({navigation}) => {
  console.log('Drawer se aya nav', navigation);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.HomenavIcon}
                source={
                  focused
                    ? require('../../assests/Images/home-button.png')
                    : require('../../assests/Images/home.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.HomenavIcon}
                source={
                  focused
                    ? require('../../assests/Images/briefcase.png')
                    : require('../../assests/Images/suitcase.png')
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationHome;

const styles = StyleSheet.create({HomenavIcon: {height: 20, width: 20}});
