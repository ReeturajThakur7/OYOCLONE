import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const RestScreen = () => {
  return (
    <View style={{backgroundColor: 'black', padding: 10}}>
      <Text style={{color: 'white'}}>Play & Win</Text>
      <View
        style={{
          borderRadius: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          style={{
            width: width / 1.02,
            height: height / 6,
            borderWidth: 2,
            borderRadius: 6,
          }}
          source={require('../assests/Images/OyoPrize.png')}
        />
      </View>
    </View>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
