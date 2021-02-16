import React from 'react';

import LottieView from 'lottie-react-native';
import qr from  "../assets/nfc.json";

const LoginScreen = () => {
  return (
    <LottieView
      source={qr}
      autoPlay
      loop
    />
  );
};

export default LoginScreen;