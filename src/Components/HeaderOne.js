import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const HeaderOne = () => {
  const navigation = useNavigation();
  console.log('Header pr', navigation);
  return (
    <View style={styles.container}>
      <View style={styles.HeaderOneView}>
        <TouchableOpacity
          style={styles.Hamburger}
          onPress={() => {
            console.log('Press hua');
            navigation.openDrawer();
          }}>
          <Image
            style={styles.Hamburger}
            source={require('../assests/Images/menu.png')}
          />
        </TouchableOpacity>

        <Text style={styles.OYOTEXT}>𝐎𝐘𝐎</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image
            style={styles.notificationIcon}
            source={require('../assests/Images/notification-bell.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.TextinputView}>
        <TouchableOpacity>
          <Image
            source={require('../assests/Images/search-interface-symbol.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={`Try "Couple friendly hotels in INDIA"`}
          placeholderTextColor="#D4D4D4"
          color="white"
          style={styles.TextInputsearch}></TextInput>
      </View>
    </View>
  );
};

export default HeaderOne;

const styles = StyleSheet.create({
  TextInputsearch: {
    height: height / 30,
    left: 5,
    width: width / 1.2,
  },
  searchIcon: {height: 15, width: 15, top: 7},
  TextinputView: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  container: {
    height: height / 7,
    backgroundColor: '#fb1402',
  },
  OYOTEXT: {color: 'white', fontWeight: 'bold', fontSize: 30},
  Hamburger: {
    height: height / 40,
    width: width / 20,
    margin: 5,
  },
  notificationIcon: {
    height: height / 30,
    width: width / 15,
    margin: 3,
  },
  HeaderOneView: {
    width: width,
    height: height / 20,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
