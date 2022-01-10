import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExampleScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Initialize" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ExampleScreen" component={ExampleScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
