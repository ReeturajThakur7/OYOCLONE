import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';

const ContactInput = ({navigation}) => {
  const [number, setValue] = useState('');

  const [isNumberValid, setNumberValid] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [isDisabled, setisDisabled] = useState(true);
  const phoneInput = useRef();

  const numberValidator = val => {
    console.log('jdkf', val);
    let reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

    if (val.length == 0) {
      setNumberValid('Please Enter Number');
      setisDisabled(true);
    } else if (val.length > 13) {
      setNumberValid('Number Limit Exceeded');
      setisDisabled(true);
    } else if (val.length !== 13) {
      setisDisabled(true);
    } else if (reg.test(val) === false) {
      setNumberValid('Enter Valid Phone Number');
      setisDisabled(true);
    } else if (reg.test(val) === true) {
      setNumberValid('');
      setisDisabled(false);
    }
  };

  return (
    <View style={styles.BlackView}>
      <View style={styles.ContactView}>
        <PhoneInput
          value={number}
          defaultCode="IN"
          onChangeText={value => {
            setValue(value);
            numberValidator(value);
          }}
          onChangeFormattedText={value => {
            setFormattedValue(value);
            setCountryCode(phoneInput.current?.getCountryCode() || '');
            numberValidator(value);
          }}
          countryPickerProps={{withAlphaFilter: true}}
          withDarkTheme
          containerStyle={{borderRadius: 10}}
        />
        <View>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={() => {
              navigation.navigate('NavigationHome');
            }}>
            <Image
              style={styles.Image}
              source={require('../assests/Images/right-arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{position: 'absolute'}}>
        {isNumberValid.trim() ? (
          <Text style={styles.TextValidation}>{number && isNumberValid}</Text>
        ) : null}
      </View>
      <View style={styles.SignUpSkipView}>
        <Text style={{color: 'white', alignSelf: 'center', margin: 4}}>OR</Text>

        <Text
          style={styles.Textsignup}
          onPress={() => {
            navigation.navigate('Drawer');
          }}>
          I'll signup later
        </Text>
      </View>
    </View>
  );
};
export default ContactInput;

const styles = StyleSheet.create({
  Textsignup: {color: 'white', fontWeight: 'bold'},
  TextValidation: {color: 'red', marginLeft: 10},
  Image: {height: '97%', top: 2, right: 7, borderRadius: 10},
  ContactView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: '30%',
    width: '95%',
  },
  BlackView: {
    flex: 0.3,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpSkipView: {padding: 16, marginTop: 20},
});
