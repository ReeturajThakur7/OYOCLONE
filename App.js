import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import SliderBox from './src/Components/SliderBox';
import {NavigationContainer} from '@react-navigation/native';
import NavigationHome from './src/Components/Navigator/NavigationHome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SliderBox" component={SliderBox} />
          <Stack.Screen name="NavigationHome" component={NavigationHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
