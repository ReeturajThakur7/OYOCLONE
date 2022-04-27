import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const WizardMember = () => {
  return (
    <TouchableOpacity style={styles.ToucView}>
      <View style={styles.ImageUserView}>
        <Image
          style={styles.userImage}
          resizeMode="contain"
          source={require('../../../assests/Images/w.png')}
        />
      </View>
      <View style={styles.credentialsView}>
        <Text style={styles.nameText}>Become an OYO Wizard Member</Text>
        <Text style={styles.nameTextSub}>Enjoy upto 10% on your bookings</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WizardMember;

const styles = StyleSheet.create({
  ToucView: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 0.17,
    borderBottomColor: 'grey',
    borderBottomEndRadius: 3,
    borderBottomLeftRadius: 4,
  },
  nameTextSub: {color: 'white', fontSize: 10, paddingVertical: 5},
  nameText: {color: 'white', fontWeight: 'bold', fontSize: 12},
  credentialsView: {paddingHorizontal: 9},
  ImageUserView: {
    height: 35,
    width: 35,
  },
  userImage: {height: '100%', width: '100%'},
});
