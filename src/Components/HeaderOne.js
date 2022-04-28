import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ModalScreen from '../Screens/ModalScreen';

const {height, width} = Dimensions.get('screen');

const HeaderOne = () => {
  const [modal, setModal] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.HeaderOneView}>
        <StatusBar backgroundColor={'#fb1402'} />
        <TouchableOpacity
          style={styles.Hamburger}
          onPress={() => {
            navigation.openDrawer();
            // navigation.closeDrawer();
          }}>
          <Image
            style={styles.Hamburger}
            source={require('../assests/Images/menu.png')}
          />
        </TouchableOpacity>

        <Text style={styles.OYOTEXT}>𝐎𝐘𝐎</Text>
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={() => {
            navigation.navigate('notifications');
          }}>
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
          onFocus={() => {
            setModal(!modal);
            Keyboard.dismiss();
          }}
          placeholder={`Try "Couple friendly hotels in INDIA"`}
          placeholderTextColor="#D4D4D4"
          color="white"
          style={styles.TextInputsearch}
        />
        <ModalScreen modal={modal} setModal={setModal} />
      </View>
    </View>
  );
};

export default HeaderOne;

const styles = StyleSheet.create({
  TextInputsearch: {
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 14,
  },
  searchIcon: {height: 15, width: 15},
  TextinputView: {
    borderRadius: 5,
    width: width / 1.03,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  container: {
    padding: 6,
    backgroundColor: '#fb1402',
  },
  OYOTEXT: {color: 'white', fontWeight: 'bold', fontSize: 30, bottom: 8},
  Hamburger: {
    height: height / 40,
    width: width / 20,
    left: 5,
  },
  notificationIcon: {
    height: height / 30,
    width: width / 15,
    right: 5,
  },
  HeaderOneView: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});
