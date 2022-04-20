import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const HeaderComponent = props => {
  console.log('props headerCompnent', props);
  return (
    <View style={styles.ViewForHead}>
      <TouchableOpacity
        style={styles.backImageTouch}
        onPress={() => {
          props.navigation.navigate(props.gotoScreen);
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
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backImage: {width: 30, height: 30, margin: 10},
  backImageTouch: {position: 'absolute', left: 10},
});
