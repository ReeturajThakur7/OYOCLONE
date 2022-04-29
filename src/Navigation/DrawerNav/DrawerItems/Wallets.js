import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const Wallets = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainView}>
      <Text style={styles.textWalletMain}>Wallets</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OYOMoney');
        }}
        activeOpacity={0.8}
        style={styles.touchViewBadge}>
        <View style={styles.badgeView}>
          <Image
            style={styles.badgeImg}
            resizeMode="contain"
            source={require('../../../assests/Images/oyoMoneyBadge.png')}
          />
        </View>
        <View style={styles.MoneyView}>
          <Text style={styles.textMoney}>OYO Money</Text>
          <Text style={styles.textMoney}>₹300</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OYORupee');
        }}
        activeOpacity={0.8}
        style={styles.touchViewBadgeRupee}>
        <View style={styles.badgeView}>
          <Image
            style={styles.badgeImg}
            resizeMode="contain"
            source={require('../../../assests/Images/oyoRupee.jpeg')}
          />
        </View>
        <View style={styles.MoneyView}>
          <Text style={styles.textMoney}>OYO Rupee</Text>
          <Text style={styles.textMoney}>₹30</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.touchViewBadgeRupee}>
        <View style={styles.badgeView}>
          <Image
            style={styles.badgeImg}
            resizeMode="contain"
            source={require('../../../assests/Images/wallet.png')}
          />
        </View>
        <Text style={styles.textWallets}>All Walets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wallets;

const styles = StyleSheet.create({
  textWallets: {color: 'white', paddingHorizontal: 10},
  touchViewBadgeRupee: {
    paddingVertical: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  MoneyView: {
    width: width / 1.6,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textMoney: {color: 'white'},
  badgeImg: {height: '100%', width: '100%'},
  badgeView: {height: 20, width: 20},
  touchViewBadge: {paddingVertical: 10, flexDirection: 'row'},
  textWalletMain: {color: 'grey'},
  MainView: {
    padding: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    borderBottomEndRadius: 3,
    borderBottomLeftRadius: 4,
  },
});
