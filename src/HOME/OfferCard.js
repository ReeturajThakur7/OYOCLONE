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
    <View style={{padding: 5}}>
      <Image
        style={{
          borderRadius: 10,
          width: width / 1.04,
          height: width / 2.4,
        }}
        source={item.image}
      />
    </View>
  );
};

const OfferCard = () => {
  return (
    <View
      style={{
        backgroundColor: '#494d4e',
        // height: height / 3,
        paddingVertical: 20,
        paddingHorizontal: 3,
        justifyContent: 'center',
        // alignSelf: 'center',
      }}>
      <Text style={{paddingHorizontal: 7, color: 'white', fontSize: 16}}>
        Make your first booking!
      </Text>

      <FlatList
        pagingEnabled
        bounces={false}
        data={Offer}
        renderItem={renderOffer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          // justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          // height: 30,
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
        }}>
        <Text style={{color: 'white'}}>Explore all offers</Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({});
