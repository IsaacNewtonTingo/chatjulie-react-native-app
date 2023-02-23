import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Conversation from '../screens/dashboard/conversation';
import TabNav from './tab-nav';
import colors from '../assets/colors/colors';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={TabNav}
        name="TabNav"
      />

      <Stack.Screen
        options={{
          headerTitle: 'Chat',
          headerStyle: {
            backgroundColor: colors.orange,
          },
        }}
        component={Conversation}
        name="Conversation"
      />
    </Stack.Navigator>
  );
}
