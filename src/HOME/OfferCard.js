import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Offer from '../consts/Offers';

const {height, width} = Dimensions.get('screen');

const renderOffer = ({item}) => {
  return (
    <View style={styles.renderView}>
      <Image style={styles.renderimg} source={item.image} />
    </View>
  );
};

const OfferCard = () => {
  return (
    <View style={styles.ViewParent}>
      <Text style={styles.txtBooking}>Make your first booking!</Text>
      <FlatList
        pagingEnabled
        bounces={false}
        data={Offer}
        renderItem={renderOffer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.expView}>
        <Text style={styles.exptxt}>Explore all offers</Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  exptxt: {color: 'white'},
  expView: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    width: width / 1.1,
    borderRadius: 3,
    backgroundColor: '#393939',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  txtBooking: {paddingHorizontal: 7, color: 'white', fontSize: 16},
  ViewParent: {
    backgroundColor: '#494d4e',
    paddingVertical: 20,
    paddingHorizontal: 3,
    justifyContent: 'center',
  },
  renderView: {padding: 5},
  renderimg: {
    borderRadius: 10,
    width: width / 1.04,
    height: width / 2.4,
  },
});
