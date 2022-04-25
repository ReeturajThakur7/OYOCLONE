import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import heart from '../../assests/Images/heart.png';
import fillHeart from '../../assests/Images/like.png';
import {styles} from '../hotelCard';

const hotelListRender = ({item}) => {
  const [color, setColor] = useState(false);
  const img = !color ? heart : fillHeart;

  const changeImg = () => {
    setColor(!color);
  };
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.cardView}>
          <Image
            resizeMode="stretch"
            style={styles.HotelImages}
            source={item.image}
          />
          <TouchableOpacity onPress={changeImg}>
            <Image style={styles.likeImg} source={img} />
          </TouchableOpacity>
          <View style={styles.ViewForRating}>
            <Text style={{color: 'white'}}>{item.rating}</Text>
            <Image
              style={styles.starImg}
              source={require('../../assests/Images/star.png')}
            />
          </View>
        </View>
        <View style={{padding: 2}}>
          <Text style={styles.textNameHotel}>{item.name}</Text>
          <Text numberOfLines={2} style={styles.textLocation}>
            {item.location}
          </Text>
          <Text style={styles.textPrice}>₹{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default hotelListRender;
