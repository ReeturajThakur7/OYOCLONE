import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import HeaderOne from '../Components/HeaderOne';
import images from '../consts/cityImages';
import HotelCard from '../HOME/hotelCard';
import OfferCard from '../HOME/OfferCard.js';
import RestScreen from '../HOME/RestScreen.js';

const height = Dimensions.get('screen');
console.log(height);

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
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
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
          style={styles.FlatList}
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
  FlatList: {
    backgroundColor: '#393939',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
    flex: 1,
  },
  stateText: {color: 'white'},
  container: {justifyContent: 'center', alignItems: 'center', margin: 10},
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
