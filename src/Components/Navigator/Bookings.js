// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   Dimensions,
// } from 'react-native';
// import React from 'react';
// import HeaderComponent from '../HeaderComponent';
// import hotels from '../../consts/hotels';

// const {width, height} = Dimensions.get('screen');

// const HomeScreen = ({navigation, route}) => {
//   const item = route.params;
//   return (
//     <View style={{flex: 1, width: width, height: height}}>
//       <ImageBackground
//         style={{
//           flex: 0.65,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 12,
//           },
//           shadowOpacity: 0.58,
//           shadowRadius: 16.0,

//           elevation: 24,
//         }}
//         source={item.image}
//         resizeMode={'stretch'}>
//         <HeaderComponent gotoScreen="SliderBox" {...props} />
//       </ImageBackground>
//       <View></View>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});
import {View, Text} from 'react-native';
import React from 'react';

export default function Bookings() {
  return (
    <View>
      <Text>Bookings</Text>
    </View>
  );
}
