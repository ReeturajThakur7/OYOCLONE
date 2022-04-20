import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderOne from '../HeaderOne';
import images from '../../consts/cityImages';
import HotelCard from '../hotelCard.js';

const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.img} source={item.img} />
      </TouchableOpacity>
      <Text style={styles.stateText}>{item.name}</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <View>
        <HeaderOne />
      </View>
      <View
        style={{
          backgroundColor: '#393939',
          borderBottomWidth: 0.2,
          borderBottomColor: 'white',
        }}>
        <FlatList
          data={images}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => {
            item.id;
          }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <HotelCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  stateText: {color: 'white'},
  container: {justifyContent: 'center', alignItems: 'center', margin: 10},
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
