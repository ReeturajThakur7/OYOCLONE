import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {height, width} = Dimensions.get('screen');
import {useNavigation} from '@react-navigation/native';

const BookNowComponent = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {Data} = useSelector(store => store.HotelBookingDetails);
  console.log('Data', Data);
  const {id, name, location, price, rating, image, details} = props.data;

  const booking = () => {
    dispatch({type: 'SHOW_DATA', payload: [props.data]});
    navigation.navigate('Bookings');
    // console.log(data);
  };

  return (
    <View style={styles.BookingView}>
      <View style={styles.amountView}>
        <Text style={styles.priceText}>₹{price}</Text>
        <Text style={styles.amountText}>Total amount</Text>
      </View>
      <TouchableOpacity style={styles.BooknowView} onPress={booking}>
        <Text style={styles.BookNowText}>Book now</Text>
        <Text style={styles.payText}>& pay at hotel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookNowComponent;

const styles = StyleSheet.create({
  payText: {color: 'white'},
  BookNowText: {color: 'white', fontWeight: '400', fontSize: 17},
  BooknowView: {
    borderRadius: 7,
    width: width / 1.6,
    marginRight: 10,
    height: height / 13,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#08f17a',
  },
  amountText: {color: 'grey'},
  priceText: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  amountView: {padding: 23, width: width / 3},
  BookingView: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: height / 9,
    backgroundColor: '#272727',
    // borderWidth: 1,
  },
});
