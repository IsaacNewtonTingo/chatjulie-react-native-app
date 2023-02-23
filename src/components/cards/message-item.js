import {StyleSheet, Text, Dimensions, View} from 'react-native';
import React from 'react';
import PrimaryText from '../texts/primary-text';
import colors from '../../assets/colors/colors';

const {width} = Dimensions.get('window');

export default function MessageItem({item, user}) {
  const status = item.user._id !== user._id;
  return (
    <View
      style={
        status
          ? styles.responseMessageContainer
          : styles.requestMessageContainer
      }>
      <PrimaryText style={{color: colors.black}}>{item.text}</PrimaryText>
    </View>
  );
}

const styles = StyleSheet.create({
  responseMessageContainer: {
    maxWidth: width / 2,
    backgroundColor: colors.veryLightOrange,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: -14,
    borderBottomRightRadius: 14,
    padding: 20,
    marginBottom: 10,
  },

  requestMessageContainer: {
    maxWidth: width / 2,
    backgroundColor: colors.white,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: -14,
    padding: 20,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
