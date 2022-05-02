import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

import LottieView from 'lottie-react-native';

const BookingCompleted = props => {
  const animation = useRef(null);
  const [lotti, setLotti] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLotti(false);

      animation.current.reset();
    }, 10000);
  }, []);

  const changeShowLottie = isCancelled => {
    console.log('------------>>>>>>>', isCancelled);
    props.navigation.navigate('PaymentDone');
  };

  return (
    <LottieView
      style={styles.lotView}
      ref={animation}
      source={require('../assests/Images/3017-man-and-travel.json')}
      autoPlay
      loop
      onAnimationFinish={changeShowLottie}
    />
  );
};

export default BookingCompleted;

const styles = StyleSheet.create({
  lotView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
