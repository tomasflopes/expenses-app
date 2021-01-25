import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/Login';

const AuthRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;