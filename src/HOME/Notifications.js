import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();
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
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            alignItems: 'center',
          }}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
      </View>
      <View style={styles.NotificationsCountView}>
        <Text style={styles.notiText}>{'0 New Notification(s)'}</Text>
      </View>
      <Text style={{backgroundColor: 'grey', padding: 10}}>
        Check this spaces for exciting offers, coupon codes and recommendations
      </Text>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notiText: {color: 'white', fontSize: 15},
  NotificationsCountView: {
    padding: 14,
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
    paddingVertical: 18,
    backgroundColor: '#272727',
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
