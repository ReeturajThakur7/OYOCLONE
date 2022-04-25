import {StyleSheet, View} from 'react-native';
import React from 'react';
import SliderBox from './src/Components/SliderBox';
import {NavigationContainer} from '@react-navigation/native';
import NavigationHome from './src/Components/Navigator/NavigationHome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/Components/Navigator/HomeScreen';
import SplashScreen from './src/Components/SplashScreen';
import DrawerItems from './src/DrawerItems/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.SafeAreaView}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SliderBox" component={SliderBox} />
          <Stack.Screen name="Drawer" component={DrawerNav} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={() => <DrawerItems />}>
      <Drawer.Screen name="NavigationHome" component={NavigationHome} />
    </Drawer.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
