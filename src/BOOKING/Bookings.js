import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('screen');

export default function Bookings({navigation}) {
  const {Data} = useSelector(store => store.HotelBookingDetails);

  console.log('Data in the Bookings', Data);

  const renderData = ({item}) => {
    return (
      <View style={styles.MainView}>
        <View style={styles.htlDataView}>
          <View style={styles.imgView}>
            <Image
              resizeMode="cover"
              style={styles.imgHotel}
              source={item.image}
            />
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.txtStyle}>{item.name}</Text>
            <Text style={styles.txtStylelctn}>{item.location}</Text>
          </View>
        </View>
        <View style={styles.payNowView}>
          <Text style={styles.txtStylePay}>
            {'Pay now and travel contact free'}
          </Text>

          <View style={styles.MoneyView}>
            <Text style={styles.textMoney}>{'Total amount'}</Text>
            <Text style={styles.textMoney}>₹{item.price}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.PayTocuh}>
            <Text style={styles.txtStyle}>Pay ₹{item.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.Parentcontainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.backBtnView}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backImg}
            resizeMode="contain"
            source={require('../assests/Images/leftarrow.png')}
          />
        </TouchableOpacity>

        <View style={styles.HeaderOffer}>
          <Text style={styles.headerText}>Bookings</Text>
        </View>
      </View>
      <FlatList keyExtractor={id => id} data={Data} renderItem={renderData} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  PayTocuh: {
    width: width / 1.1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#2fc479',
  },
  MoneyView: {
    width: width / 1.07,
    paddingVertical: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 0.4,
  },
  textMoney: {color: 'white', fontWeight: 'bold'},
  txtStylePay: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  payNowView: {paddingVertical: 7},
  txtStylelctn: {
    color: 'grey',
    paddingVertical: 7,
    fontSize: 13,
    fontWeight: 'bold',
  },
  txtStyle: {color: 'white', fontSize: 15, fontWeight: '600'},
  detailsView: {padding: 7, width: width / 1.6},
  htlDataView: {flexDirection: 'row', borderBottomWidth: 0.4, padding: 10},
  MainView: {padding: 10},
  imgView: {
    height: height / 8,
    width: width / 3,
  },
  imgHotel: {height: '100%', width: '100%', borderRadius: 12},

  HeaderOffer: {
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  headerText: {fontSize: 18, color: 'white', fontWeight: '400'},
  backImg: {height: '100%', width: '100%'},
  backBtnView: {height: 30, width: 30},
  Parentcontainer: {
    backgroundColor: '#272727',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  SafeAreaView: {flex: 1, backgroundColor: '#393939'},
});
