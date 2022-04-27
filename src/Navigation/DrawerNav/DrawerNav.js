import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationHome from '../BottomTab/NavigationHome';
import DrawerItems from './DrawerItems/index';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="NavigationHome"
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={() => <DrawerItems />}>
      <Drawer.Screen name="NavigationHome" component={NavigationHome} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
