import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import ContactInput from '../Components/ContactInput';
import sliderimg from './imgslider.js';

const SlideBox = ({navigation}) => {
  return (
    <>
      <View style={styles.View}>
        <SliderBox
          images={sliderimg.img}
          sliderBoxHeight={200}
          dotColor="red"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 100,
            height: 4,
          }}
          autoplay={true}
          circleLoop
          ImageComponentStyle={{
            resizeMode: 'stretch',
            height: '100%',
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
