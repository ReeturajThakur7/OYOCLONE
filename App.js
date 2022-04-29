import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './src/Navigation/Stack/StackScreen.js';
import {Provider} from 'react-redux';
import store from './src/reducer/store.js';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
