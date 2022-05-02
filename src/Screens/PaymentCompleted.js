import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';

const PaymentCompleted = props => {
  const animation = useRef(null);
  const [lotti, setLotti] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLotti(false);

      animation.current.reset();
    }, 3000);
  }, []);

  const changeShowLottie = isCancelled => {
    // console.log('------------>>>>>>>', isCancelled);
    props.navigation.navigate('Home');
  };

  return (
    <LottieView
      style={styles.lotView}
      ref={animation}
      source={require('../assests/Images/8878-done')}
      autoPlay
      loop
      onAnimationFinish={changeShowLottie}
    />
  );
};

export default PaymentCompleted;

const styles = StyleSheet.create({
  lotView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
