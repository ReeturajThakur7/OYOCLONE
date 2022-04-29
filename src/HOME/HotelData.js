import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import BookNowComponent from './BookNowComponent';

const {height, width} = Dimensions.get('screen');

const HotelData = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {id, name, location, price, rating, image, details} = route.params;
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView
        stickyHeaderIndices={[0]}
        style={styles.ScrollView}
        bounces={false}>
        <View style={styles.HeadCompContainer}>
          <HeaderComponent />
        </View>
        <Image resizeMode="stretch" style={styles.Images} source={image} />
        <View style={styles.detailsMain}>
          <Text style={styles.TextName}>{name}</Text>
          <Text style={styles.textLocation}>{location}</Text>
          <View style={styles.RatingsView}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Image
              style={styles.starRating}
              source={require('../assests/Images/star.png')}
            />
          </View>
          <Text style={styles.TextName}>Description</Text>
          <Text style={styles.DetailsText}>{details}</Text>
          <Text style={styles.textOffersLine}>Best offers for you</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.OffersView}>
              <View style={styles.FlatContainer}>
                <Text style={styles.DetailsText}>Flat 25% off</Text>
                <Text style={styles.OYOTextOffers}>𝐎𝐘𝐎</Text>
              </View>
              <Text style={styles.textFlat}>
                Get Flat 25% off on your booking using
              </Text>

              <View style={styles.ViewTicket}>
                <Image
                  style={styles.ticketsImage}
                  source={require('../assests/Images/ticketOff.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BookNowComponent data={route.params} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{backgroundColor: 'red'}}>
        <View style={styles.modalview}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.closeImageView}>
              <Image
                style={styles.closeImage}
                source={require('../assests/Images/close.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.TextName}>Flat 25% off on all OYO Hotels</Text>

          <Text style={styles.textOffersLine}>
            25% off exclusively for users on their bookings
          </Text>
          <View style={styles.modalTicket}>
            <Image
              style={styles.ticketsImageModal}
              source={require('../assests/Images/ticketOff.png')}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalApplyView}>
              <Text style={styles.applyText}>Apply</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HotelData;

const styles = StyleSheet.create({
  safearea: {backgroundColor: '#272727'},
  applyText: {color: 'red', fontSize: 19},
  modalApplyView: {
    marginTop: 9,
    borderWidth: 0.7,
    borderColor: 'grey',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 1.1,
    paddingVertical: 6,
  },
  ticketsImageModal: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  modalTicket: {
    marginTop: 9,
    height: height / 25,
    width: width / 4,
  },
  closeImage: {height: 15, width: 15},
  closeImageView: {alignItems: 'flex-end'},
  modalview: {
    padding: 14,
    borderRadius: 13,
    backgroundColor: '#1e1f22',
    height: height / 4,
    marginTop: 'auto',
  },
  ticketsImage: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
    marginTop: 10,
  },
  ViewTicket: {height: 50, width: 90},
  textFlat: {color: 'white'},
  OYOTextOffers: {
    color: 'red',
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  FlatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OffersView: {
    padding: 5,
    marginTop: 7,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: 'grey',
    width: width / 1.3,
  },
  textOffersLine: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  DetailsText: {fontSize: 18, color: 'white', paddingVertical: 10},
  starRating: {height: 15, width: 15},
  ratingText: {color: 'white'},
  RatingsView: {
    paddingVertical: 4,
    flexDirection: 'row',
    borderWidth: 0.9,
    borderRadius: 2,
    borderColor: 'white',
    backgroundColor: '#ace600',
    width: width / 5,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  textLocation: {paddingVertical: 10, color: 'grey', fontSize: 16},
  TextName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  detailsMain: {flex: 0.5, padding: 10},
  HeadCompContainer: {top: 1},
  ScrollView: {backgroundColor: '#272727', height: '90%'},
  Images: {
    height: height / 2,
  },
});
