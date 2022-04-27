import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../Splash/SplashScreen';
import SliderBox from '../../SliderBox/SliderBox';
import HotelData from '../../HOME/HotelData';
import DrawerNav from '../DrawerNav/DrawerNav';
import Notifications from '../../HOME/Notifications';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SliderBox" component={SliderBox} />
      <Stack.Screen name="Drawer" component={DrawerNav} />
      <Stack.Screen name="HotelData" component={HotelData} />
      <Stack.Screen name="notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default StackScreen;

const styles = StyleSheet.create({});
