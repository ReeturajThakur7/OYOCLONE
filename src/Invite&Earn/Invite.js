import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const Invite = () => {
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
          <Text style={styles.headerText}>Invite & Earn</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.imgView}>
          <Image
            style={styles.imgInvite}
            resizeMode="stretch"
            source={require('../assests/Images/Invite&earn.png')}
          />
        </View>
        <View
          style={{
            bottom: '3%',
            alignSelf: 'center',
            height: height / 6,
            width: width / 1.2,
            borderWidth: 2,
            borderColor: 'white',
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Invite;

const styles = StyleSheet.create({
  imgInvite: {height: '100%', width: '100%'},
  imgView: {height: height / 2.6, width: width},
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
