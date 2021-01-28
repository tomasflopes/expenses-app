import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

import { AuthProvider } from './src/context/auth';

import { AppLoading } from 'expo';

import { ThemeProvider } from 'styled-components';

import { light } from './src/styles/theme'; // TODO implement theme switcher

import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';

import {
  Archivo_400Regular,
  Archivo_700Bold
} from '@expo-google-fonts/archivo';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Archivo_400Regular,
    Archivo_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="light" />

        <AuthProvider>
          <ThemeProvider theme={light}>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </>
    );
  }
}
