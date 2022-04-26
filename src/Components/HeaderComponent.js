import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeaderComponent = () => {
  const navigation = useNavigation();
  // console.log('props headerCompnent', props);
  return (
    <View style={styles.ViewForHead}>
      <TouchableOpacity
        style={styles.backImageTouch}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assests/Images/leftarrow.png')}
          style={styles.backImage}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={require('../assests/Images/heart.png')}
          style={styles.backImage}
        />
      </View>
      <View>
        <Image
          source={require('../assests/Images/share.png')}
          style={styles.backImage}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  ViewForHead: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  backImage: {width: 30, height: 30, margin: 10},
  backImageTouch: {position: 'absolute', left: 10},
});
