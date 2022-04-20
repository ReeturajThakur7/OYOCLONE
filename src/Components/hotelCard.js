import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import hotels from '../consts/hotels';

const {height, width} = Dimensions.get('screen');

const onRender = ({item}) => {
  return (
    <View style={{padding: 7}}>
      <View style={styles.cardView}>
        <Image
          resizeMode="stretch"
          style={styles.HotelImages}
          source={item.image}
        />
        <Image
          style={styles.likeImg}
          source={require('../assests/Images/heart.png')}
        />
        <View
          style={{
            backgroundColor: 'green',
            width: 40,
            bottom: 40,
            left: 20,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white'}}>{item.rating}</Text>
          <Image
            style={styles.starImg}
            source={require('../assests/Images/star.png')}
          />
        </View>
        <Text
          style={{color: 'white', fontSize: 18, marginBottom: 6, bottom: 30}}>
          {item.name}
        </Text>
        <Text style={{color: 'white', marginBottom: 6, bottom: 30}}>
          {item.location}
        </Text>
        <Text style={{color: 'white', bottom: 30}}>₹{item.price}</Text>
      </View>
    </View>
  );
};
const hotelCard = () => {
  return (
    <View style={{height: 300, backgroundColor: '#393939', padding: 15}}>
      <Text style={{color: 'white', fontSize: 20}}>
        Recommended OYOs for you
      </Text>
      <FlatList
        data={hotels}
        renderItem={onRender}
        horizontal={true}
        bounces={false}
      />
    </View>
  );
};

export default hotelCard;

const styles = StyleSheet.create({
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
