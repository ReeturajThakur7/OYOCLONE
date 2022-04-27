import {TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './Offers';

const XtendFlatRender = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.renderView}>
      <View style={styles.viewForImage}>
        <Image
          resizeMode="stretch"
          style={styles.renderImg}
          source={item.image}
        />
        <View>
          <Text>{item.offerMain}</Text>
          <View style={styles.offerView}>
            <Text>{item.offer}</Text>

            <Text style={styles.BookText}>Book now</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default XtendFlatRender;
