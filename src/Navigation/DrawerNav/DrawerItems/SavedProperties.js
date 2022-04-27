import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SavedProperties = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={styles.touchViewBadgeRupee}>
        <View style={styles.badgeView}>
          <Image
            style={styles.badgeImg}
            resizeMode="contain"
            source={require('../../../assests/Images/heart.png')}
          />
        </View>
        <Text style={styles.textWallets}>Your Saved Properties</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.touchViewBadgeRupee}>
        <View style={styles.badgeView}>
          <Image
            style={styles.badgeImg}
            resizeMode="contain"
            source={require('../../../assests/Images/add-user.png')}
          />
        </View>
        <View>
          <Text style={styles.textWallets}>Invite and Earn</Text>
          <Text style={styles.textSubInvite}>
            {'Refer your friends and earn OYO Rupee'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SavedProperties;

const styles = StyleSheet.create({
  textSubInvite: {paddingHorizontal: 9, fontSize: 11, color: 'white'},
  textWallets: {color: 'white', paddingHorizontal: 10},
  touchViewBadgeRupee: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
  },
  badgeImg: {height: '100%', width: '100%'},
  badgeView: {height: 20, width: 20},
});
