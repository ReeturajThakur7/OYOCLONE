import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import ContactInput from './ContactInput';

const SlideBox = ({navigation}) => {
  return (
    <>
      <View style={styles.View}>
        <SliderBox
          images={[
            '/Users/admin/Desktop/OyoClone/src/assests/Images/RoomBed.jpeg',
            '/Users/admin/Desktop/OyoClone/src/assests/Images/HotelRoom.jpeg',
            '/Users/admin/Desktop/OyoClone/src/assests/Images/HotelOuterView.jpeg',
          ]}
          sliderBoxHeight={200}
          dotColor="red"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 50,
            height: 4,
          }}
          autoplay={true}
          circleLoop
          ImageComponentStyle={{
            borderRadius: 30,

            resizeMode: 'cover',
            backgroundColor: 'red',
            height: '100%',
          }}
          paginationBoxStyle={{
            position: 'absolute',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
          imageLoadingColor="#2196F3"
          activeOpacity={0.9}
        />
      </View>
      <ContactInput navigation={navigation} />
    </>
  );
};

export default SlideBox;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
