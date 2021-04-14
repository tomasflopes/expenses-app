import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import CreateExpenseScreen from '../screens/CreateExpense';
import ListExpensesScreen from '../screens/ListExpenses';

import Header from '../components/Header';

const MainRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="CreateExpense"
        component={CreateExpenseScreen}
        options={{
          headerShown: true,
          header: () => <Header confirmMessage title="Create Expense" />
        }}
      />
      <Stack.Screen
        name="ListExpenses"
        component={ListExpensesScreen}
        options={{
          headerShown: true,
          header: () => <Header confirmMessage title="Create Expense" />
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRoutes;
