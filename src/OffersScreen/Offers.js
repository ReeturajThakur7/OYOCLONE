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
import xtendOffer from '../consts/Xtendstay';
import XtendFlatRender from './XtendFlatRender';

const {height, width} = Dimensions.get('screen');

const Offers = ({navigation}) => {
  const onRender = ({item}) => {
    return <XtendFlatRender item={item} />;
  };
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
          <Text style={styles.headerText}>Offers</Text>
        </View>
      </View>
      <ScrollView bounces={false} style={{flex: 1}}>
        <View style={styles.DiscoverView}>
          <Text style={styles.DiscoverText}>Discover OYO</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.TouchViewDiscover}>
            <Image
              resizeMode="stretch"
              style={styles.DiscImg}
              source={require('../assests/Images/offer4.webp')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.FlatView}>
          <Text style={styles.xTenStayText}>Xtend your Stay</Text>
        </View>
        <FlatList
          data={xtendOffer}
          renderItem={onRender}
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.DiscoverView}>
          <Text style={styles.DiscoverText}>SOS for your safety</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.TouchViewDiscover}>
            <Image
              resizeMode="stretch"
              style={styles.DiscImg}
              source={require('../assests/Images/offer2.webp')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Offers;

export const styles = StyleSheet.create({
  xTenStayText: {color: 'white', fontWeight: '700', fontSize: 16},
  offerView: {flexDirection: 'row', justifyContent: 'space-between'},
  viewForImage: {height: height / 6.7, width: width / 2.05},
  BookText: {
    fontSize: 10,
    alignSelf: 'center',
    bottom: 5,
    right: 2,
    backgroundColor: 'black',
    color: 'white',
  },
  FlatView: {
    padding: 10,
  },
  renderImg: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  renderView: {
    borderRadius: 10,
    height: height / 5,
    width: width / 2,
    marginHorizontal: 10,
  },
  HeaderOffer: {
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
  },
  DiscImg: {height: '100%', width: '100%', borderRadius: 10},
  TouchViewDiscover: {
    height: height / 5,
    width: width / 1.05,
    borderRadius: 10,
    marginTop: 8,
  },
  DiscoverText: {color: 'white', fontWeight: '600', fontSize: 16},
  DiscoverView: {padding: 10},
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
