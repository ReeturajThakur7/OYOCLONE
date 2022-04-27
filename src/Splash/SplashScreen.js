import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('SliderBox');
  }, 2000);
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Image
        style={{height: '100%', width: '100%'}}
        resizeMode="cover"
        source={require('../assests/Images/SplashScreen.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
