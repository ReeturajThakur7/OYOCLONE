import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Bookings from './Bookings';

const Tab = createBottomTabNavigator();

const NavigationHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.HomenavIcon}
                source={require('../../assests/Images/home.png')}
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
                source={require('../../assests/Images/home.png')}
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
