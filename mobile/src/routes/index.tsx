import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth';
import MainRoutes from './main';

import AuthContext from '../context/auth';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <Stack.Screen
            name="Root"
            children={MainRoutes}
            options={{ headerShown: false }}
          />
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
