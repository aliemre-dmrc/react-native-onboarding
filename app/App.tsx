import React , {useState, useEffect, FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import LoginScreen from "./src/screens/LoginScreen";

import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

const App: FC = () => {
  
  const [isFirstLaunch, setIsFirstLaunch] = useState<any>(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); 
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); 
  
  });

  if (isFirstLaunch === null) {
    return null; 
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

    return ( 
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName={routeName}>
        <AppStack.Screen name="Onboarding" component={OnBoardingScreen} options={{header: () => null}} />
        <AppStack.Screen name="Login" component={LoginScreen} options={{header: () => null}}/>
      </AppStack.Navigator>
    </NavigationContainer>
    );
}

export default App;