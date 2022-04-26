import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './src/Navigation/Stack/StackScreen.js';

const App = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
