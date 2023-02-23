import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Discover from '../screens/dashboard/discover';
import Settings from '../screens/dashboard/settings';

const Stack = createNativeStackNavigator();

export default function SettingsNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Settings}
        name="Settings"
      />
    </Stack.Navigator>
  );
}
