import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {color} from 'react-native-reanimated';

const {height, width} = Dimensions.get('screen');

const FirstOyo = () => {
  return (
    <TouchableOpacity style={styles.FirstContainer}>
      <Text style={styles.TextOffer}>
        {'Book your first OYO, starting from\n₹ 399'}
      </Text>
      <View style={styles.nextImageView}>
        <Image
          style={styles.nextImage}
          resizeMode="contain"
          source={require('../../../assests/Images/nextBlack.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FirstOyo;

const styles = StyleSheet.create({
  nextImage: {
    height: '100%',
    width: '100%',
  },
  nextImageView: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  TextOffer: {color: 'white', fontSize: 13, fontWeight: 'bold'},
  FirstContainer: {
    borderRadius: 4,
    backgroundColor: '#fb1402',
    alignSelf: 'center',
    width: width / 1.48,
    height: height / 13,
    flexDirection: 'row',
    padding: 10,
  },
});
