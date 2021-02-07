import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/Login';
import ForgotPasswordFormScreen from '../screens/Auth/ForgotPassword/Form';
import ForgotPasswordSuccessScreen from '../screens/Auth/ForgotPassword/Success';

const AuthRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="ForgotPasswordForm"
        component={ForgotPasswordFormScreen}
      />
      <Stack.Screen
        name="ForgotPasswordSuccess"
        component={ForgotPasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
