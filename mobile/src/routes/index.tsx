import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

import AuthRoutes from './auth';
import MainRoutes from './main';

import OnBoardingScreen from '../screens/Onboarding';

import AuthContext from '../context/auth';

const Routes: React.FC = () => {
  const [firstTime, setFirstTime] = useState(true);

  const { signed, SignIn } = useContext(AuthContext);

  const Stack = createStackNavigator();

  async function checkLogin() {
    const token = await AsyncStorage.getItem('jwt');

    if (token) {
      SignIn();
    }
  }

  async function checkFirstTime() {
    const token = await AsyncStorage.getItem('firstTime');

    if (token) {
      setFirstTime(false);
    }
  }

  async function clearStorage() {
    await AsyncStorage.clear();
  }

  useEffect(() => {
    clearStorage();
    checkFirstTime();
    checkLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <>
            {firstTime && (
              <Stack.Screen
                name="Onboarding"
                component={OnBoardingScreen}
                options={{ headerShown: false }}
              />
            )}
            <Stack.Screen
              name="Root"
              children={MainRoutes}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Auth"
            children={AuthRoutes}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
