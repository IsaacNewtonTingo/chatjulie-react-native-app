import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import globalStyles from '../../assets/styles/global-styles';

export default function Settings() {
  return (
    <KeyboardAwareScrollView style={globalStyles.container}>
      <Text>Chat</Text>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
