import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import FirstOyo from './FirstOyo';
import WizardMember from './WizardMember';
import Wallets from './Wallets';
import SavedProperties from './SavedProperties';

export default function index() {
  return (
    <SafeAreaView style={styles.contentContainer}>
      <ScrollView bounces={false} style={styles.container}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <View style={styles.ImageUserView}>
            <Image
              style={styles.userImage}
              resizeMode="contain"
              source={require('../../../assests/Images/Users.png')}
            />
          </View>
          <View style={styles.credentialsView}>
            <Text style={styles.nameText}>Hi Reeturaj</Text>
            <Text style={styles.nameText}>+91-8108251371</Text>
          </View>
          <View style={styles.nextImageView}>
            <Image
              style={styles.nextImage}
              resizeMode="contain"
              source={require('../../../assests/Images/next.png')}
            />
          </View>
        </TouchableOpacity>
        <FirstOyo />
        <WizardMember />
        <Wallets />
        <SavedProperties />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nextImage: {height: '100%', width: '100%'},
  nextImageView: {height: 30, width: 30, alignSelf: 'center'},
  credentialsView: {padding: 18},
  nameText: {color: 'white', fontWeight: 'bold'},
  contentContainer: {backgroundColor: '#fb1402', flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#272727',
  },
  ImageUserView: {
    height: 80,
    width: 80,
    padding: 10,
  },
  userImage: {height: '100%', width: '100%'},
});
