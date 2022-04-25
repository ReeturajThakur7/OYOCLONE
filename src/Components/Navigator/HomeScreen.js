import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderOne from '../HeaderOne';
import images from '../../consts/cityImages';
import HotelCard from '../hotelCard.js';
import OfferCard from '../OfferCard.js';
import RestScreen from '../RestScreen.js';

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
    <SafeAreaView style={{flex: 1}}>
      <HeaderOne />
      <ScrollView bounces={false}>
        <FlatList
          data={images}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => {
            item.id;
          }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: '#393939',
            borderBottomWidth: 0.2,
            borderBottomColor: 'white',
            flex: 1,
          }}
        />
        <HotelCard />
        <OfferCard />
        <RestScreen />
      </ScrollView>
    </SafeAreaView>
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
