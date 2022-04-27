import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../HOME/HomeScreen';
import Bookings from './Bookings';
import Offers from '../../OffersScreen/Offers';
import Invite from '../../Invite&Earn/Invite';

const Tab = createBottomTabNavigator();

const NavigationHome = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
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
          tabBarActiveTintColor: 'red',
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
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.HomenavIcon}
                source={
                  focused
                    ? require('../../assests/Images/discount.png')
                    : require('../../assests/Images/nodiscount.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="InviteEarn"
        component={Invite}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.HomenavIcon}
                source={
                  focused
                    ? require('../../assests/Images/inviteEarn.png')
                    : require('../../assests/Images/add-user.png')
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
