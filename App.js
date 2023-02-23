import {StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Decider from './src/navigators/decider';

import {CredentialsContext} from './src/context/credentials-context';
import EncryptedStorage from 'react-native-encrypted-storage';
import TabNav from './src/navigators/tab-nav';
import HomeStack from './src/navigators/home-stack';

export default function App() {
  const [storedCredentials, setStoredCredentials] = useState('');

  useEffect(() => {
    checkStoredUserData();
  }, []);

  async function checkStoredUserData() {
    try {
      const userData = await EncryptedStorage.getItem('userData');
      if (userData) {
        setStoredCredentials(JSON.parse(userData));
      } else {
        setStoredCredentials(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CredentialsContext.Provider
        value={{storedCredentials, setStoredCredentials}}>
        <NativeBaseProvider>
          <NavigationContainer>
            <HomeStack />
          </NavigationContainer>
        </NativeBaseProvider>
      </CredentialsContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
