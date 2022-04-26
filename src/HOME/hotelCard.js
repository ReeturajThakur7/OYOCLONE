import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import hotels from '../consts/hotels';

import HotelListRender from './hotelListRender';

const {height, width} = Dimensions.get('screen');

const hotelCard = () => {
  const onRender = ({item}) => {
    return (
      <View style={styles.contentContainer}>
        <HotelListRender item={item} />
      </View>
    );
  };

  return (
    <View style={styles.FlatView}>
      <Text style={styles.recTagText}>Recommended OYOs for you</Text>

      <FlatList
        data={hotels}
        renderItem={onRender}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default hotelCard;

export const styles = StyleSheet.create({
  recTagText: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 7,
  },
  FlatView: {
    backgroundColor: '#393939',
  },
  textPrice: {color: 'white', width: width / 1.9},
  textLocation: {
    color: 'white',
    width: width / 1.9,
  },
  textNameHotel: {
    color: 'white',
    fontSize: 18,
    width: width / 1.9,
    marginTop: 12,
  },
  ViewForRating: {
    backgroundColor: 'green',
    width: 40,
    bottom: 40,
    left: 20,
    flexDirection: 'row',
  },
  contentContainer: {padding: 7},
  starImg: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  likeImg: {height: 30, width: 30, bottom: 30, left: 170},
  HotelImages: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  cardView: {
    width: width / 1.9,
    height: width / 2.7,
  },
});
