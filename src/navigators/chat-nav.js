import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chat from '../screens/dashboard/chat';
import Conversation from '../screens/dashboard/conversation';

const Stack = createNativeStackNavigator();

export default function ChatNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Chat}
        name="Chat"
      />
    </Stack.Navigator>
  );
}
