import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import axios from 'axios';
import React, {useState, useEffect} from 'react';

const {height, width} = Dimensions.get('screen');

// .get('https://reqres.in/api/users?page=1')

const OYOMoney = ({navigation}) => {
  const [data, setData] = useState([]);

  const getAPI = () => {
    axios.get('https://reqres.in/api/users?page=1').then(response => {
      console.log(response.data.data);
      // data = response.data.data;

      setData(response.data.data);
      console.log(data);
    });
  };

  useEffect(() => {
    getAPI();
  }, []);

  const onRender = ({item}) => {
    return (
      <View style={styles.DataView}>
        <View style={styles.imgCon}>
          <Image
            resizeMode="cover"
            resizeMethod="resize"
            source={{uri: item.avatar}}
            style={styles.imgStyle}
          />
        </View>
        <View style={styles.rightCon}>
          <Text style={styles.textStyle}>{item.email}</Text>
          <Text
            style={
              styles.textStyle
            }>{`${item.first_name} ${item.last_name}`}</Text>
        </View>
      </View>
      //   //   <View style={styles.imgCon}>
      //   //     <Image
      //   //       resizeMode="cover"
      //   //       resizeMethod="resize"
      //   //       source={{uri: item.avatar}}
      //   //       style={styles.imgStyle}
      //   //     />
      //   //   </View>
      //   //   <View style={styles.rightCon}>
      //   //     <Text style={styles.textStyle}>{item.email}</Text>
      //   //     <Text
      //   //       style={
      //   //         styles.textStyle
      //   //       }>{`${item.first_name} ${item.last_name}`}</Text>
      //   //   </View>
    );
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
        <View style={styles.labelView}>
          <View style={styles.HeaderOffer}>
            <Image
              style={styles.labelimg}
              source={require('../assests/Images/OYOTEXT.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.BodyimgView}>
        <Image
          resizeMode="cover"
          style={styles.Rupeeimg}
          source={require('../assests/Images/OYORupee.webp')}
        />
      </View>
      <View style={styles.restViewParent}>
        <Text style={styles.TranTxt}>Transaction History</Text>

        <FlatList bounces={false} data={data} renderItem={onRender} />
      </View>
    </SafeAreaView>
  );
};

export default OYOMoney;

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 5,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  rightCon: {
    padding: 20,
  },
  imgCon: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  DataView: {
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    width: width / 1.1,
    borderWidth: 1,
    height: height / 7,
    marginTop: 7,
    borderRadius: 10,
    alignSelf: 'center',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  TranTxt: {color: 'white', fontSize: 18, fontWeight: '500'},
  restViewParent: {marginTop: 7, height: height / 2},
  Rupeeimg: {height: '100%', width: '100%'},
  BodyimgView: {width: width, height: height / 3},
  labelView: {
    alignSelf: 'center',
    alignItems: 'center',

    width: width / 1.26,
  },

  HeaderOffer: {
    height: height / 35,
    width: width / 7,
  },
  labelimg: {height: '100%', width: '100%'},
  backImg: {height: '100%', width: '100%'},
  backBtnView: {height: 30, width: 30},
  Parentcontainer: {
    backgroundColor: '#171717',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  SafeAreaView: {flex: 1, backgroundColor: '#393939'},
});
