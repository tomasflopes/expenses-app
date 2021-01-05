import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

import Routes from './src/routes';
import OnboardingComponent from './src/screens/OnboardingComponent';

import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const [firstTime, setFirstTime] = useState(true);

  async function getData() {
    const value = await AsyncStorage.getItem('firstTime');

    value ? setFirstTime(true) : setFirstTime(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {firstTime ? (
        <OnboardingComponent />
      ) : (
        <>
          <Routes />
          <StatusBar style="auto" />
        </>
      )}
    </>
  );
}
