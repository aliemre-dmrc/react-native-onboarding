import React, { FC } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

import business from  "../assets/buisness.json";
import qr from  "../assets/nfc.json";
import nfc from  "../assets/qr.json";
import social from  "../assets/social.json";

import LottieView from 'lottie-react-native';


interface Selcet {
    selected: any;
}

interface Nav {
    navigation: any;
}


const Dots: FC<Selcet> = (props) => {
    var dotsColor;
    dotsColor = props.selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return (
        <View style={{ backgroundColor: dotsColor , ...styles.dots}}/>
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity style={styles.button}{...props}>
        <Text style={styles.buttonText}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity style={styles.button}{...props}>
        <Text style={styles.buttonText} >Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity style={styles.button}{...props}>
        <Text style={styles.buttonText}>Done</Text>  
    </TouchableOpacity>
);


const OnboardingScreen: FC<Nav> = (props) => {
    
    return (
        <Onboarding
        transitionAnimationDuration={500}

        bottomBarHeight={ Dimensions.get("window").height / 7.5}
        bottomBarHighlight={true}
        bottomBarColor={"transparent"}

        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}

        onSkip={() => props.navigation.replace("Login")}
        onDone={() => props.navigation.replace("Login")}

        containerStyles={styles.container}
        imageContainerStyles={styles.imageContainerStyles}

        pages={
            [
          {
            backgroundColor: '#a6e4d0',
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
            titleStyles: styles.titleStyles,
            subTitleStyles: styles.subTitleStyles,
            image:(<LottieView
                    style={styles.lotties}
                    autoPlay
                    loop
                    source={business}
                  />),
          },
          {
            backgroundColor: '#e9bcbe',
            title: 'Connect with NFC',
            subtitle: "Uppl uses NFC technologies",
            titleStyles: styles.titleStyles,
            subTitleStyles: styles.subTitleStyles,
            image:(<LottieView
                    style={styles.lotties}
                    autoPlay
                    loop
                    source={qr}
                   />),
          },
          {
            backgroundColor: '#fdeb93',
            title: 'Share Your Business Card',
            subtitle: 'Share your business card with QR Cards ',
            titleStyles: styles.titleStyles,
            subTitleStyles: styles.subTitleStyles,
            image:(<LottieView
                    style={styles.lotties}
                    autoPlay
                    loop
                    source={nfc}
                  />),
          },
          {
            backgroundColor: '#fdeb93',
            title: 'Share Your Social Media',
            subtitle: 'Share Your Social Media Accounts With People',
            titleStyles: styles.titleStyles,
            subTitleStyles: styles.subTitleStyles,
            image:(<LottieView
                    style={styles.lotties}
                    autoPlay
                    loop
                    source={social}
                  />),

          },
        ]}
      />
    );
};


const styles = StyleSheet.create({
  container: {},
  imageContainerStyles: {},
  subTitleStyles:{},
  titleStyles:{},
  button:{},

  dots:{
    width:15,
    height: 15,
    marginHorizontal: 3,
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
  },
  buttonText:{
    fontSize: 20,
    marginHorizontal: 30,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  lotties: {
    height: Dimensions.get("window").height / 2.5,
  },
});
 
export default OnboardingScreen;