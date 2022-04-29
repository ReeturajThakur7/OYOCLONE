import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');
const OYOMoney = ({navigation}) => {
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
          <Text style={styles.headerText}>OYO Money</Text>
        </View>
      </View>
      <View style={styles.dataView}>
        <View style={styles.walletImgView}>
          <Image
            resizeMode="contain"
            style={styles.Wallletimg}
            source={require('../assests/Images/ColorWallet.png')}
          />
        </View>
        <Text style={styles.AmountText}>{'₹ 300'}</Text>
        <View style={styles.ExpView}>
          <Text style={styles.txtExp}>Expires on</Text>
          <Text style={styles.txtExp}>{'19 Jul, 2022'}</Text>
        </View>
        <View style={styles.ExpView}>
          <Text style={styles.txtExp}>Usable this month</Text>
          <Text style={styles.txtExp}>{'₹ 300'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OYOMoney;

const styles = StyleSheet.create({
  txtExp: {color: 'white'},
  ExpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.6,
    padding: 15,
    borderTopColor: 'grey',
  },
  AmountText: {
    color: 'white',
    fontSize: 27,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  dataView: {
    padding: 10,
    width: width / 1.04,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
    height: height / 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  walletImgView: {height: height / 18, width: width / 8, alignSelf: 'center'},
  Wallletimg: {height: '100%', width: '100%'},
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
