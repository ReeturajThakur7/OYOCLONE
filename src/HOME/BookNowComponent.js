import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const BookNowComponent = props => {
  console.log(props);
  return (
    <View style={styles.BookingView}>
      <View style={styles.amountView}>
        <Text style={styles.priceText}>₹{props.price}</Text>
        <Text style={styles.amountText}>Total amount</Text>
      </View>
      <TouchableOpacity style={styles.BooknowView}>
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
