import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Modal} from 'native-base';

import Carousel from 'react-native-reanimated-carousel';

import globalStyles from '../../assets/styles/global-styles';
import PrimaryText from '../../components/texts/primary-text';
import CharacterCard from '../../components/cards/character-card';
import PrimaryButton from '../../components/buttons/primary-button';

const {height, width} = Dimensions.get('window');

export default function Chat({navigation}) {
  const [themesModal, setThemesModal] = useState(false);

  const characters = [
    {
      backgroundColor: '#F9A826',
      title: 'Name 1',
    },

    {
      backgroundColor: '#3F3D56',
      title: 'Name 2',
    },

    {
      backgroundColor: '#3066BE',
      title: 'Name 3',
    },

    {
      backgroundColor: '#DE3C4B',
      title: 'Name 4',
    },

    {
      backgroundColor: '#7D83FF',
      title: 'Name 5',
    },

    {
      backgroundColor: '#4CD964',
      title: 'Name 6',
    },
  ];

  const themes = [
    {theme1: "require('../../assets/images/preview1.png')"},
    {theme1: "require('../../assets/images/preview2.png')"},
    {theme1: "require('../../assets/images/preview3.png')"},
  ];

  async function handleStartChatPress() {
    navigation.navigate('Conversation');
    // setThemesModal(true);
  }

  const Theme1 = () => (
    <Image
      style={styles.themeImage}
      source={require('../../assets/images/preview1.png')}
    />
  );

  const Theme2 = () => (
    <Image
      style={styles.themeImage}
      source={require('../../assets/images/preview2.png')}
    />
  );

  const Theme3 = () => (
    <Image
      style={styles.themeImage}
      source={require('../../assets/images/preview3.png')}
    />
  );

  return (
    <KeyboardAwareScrollView style={globalStyles.container}>
      <PrimaryText style={{textAlign: 'left', fontSize: 20}}>
        Choose your character
      </PrimaryText>

      <View style={styles.mapCharacters}>
        {characters.map((character, i) => (
          <CharacterCard key={i} backgroundColor={character.backgroundColor} />
        ))}
      </View>

      <PrimaryButton onPress={handleStartChatPress} title="Start chat" />

      <Modal
        style={styles.modalContainer}
        isOpen={themesModal}
        onClose={() => setThemesModal(false)}>
        <View style={styles.innerModal}>
          <Carousel
            loop
            width={width}
            // autoPlay
            height={height}
            data={themes}
            scrollAnimationDuration={5000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 300,
            }}
            renderItem={({item}) => (
              <View style={{alignItems: 'center'}}>
                <Theme1 />
                <Theme2 />
                <Theme3 />
              </View>
            )}
          />
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mapCharacters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 40,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
  },
  innerModal: {
    width: width - 40,
    height: height,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  themeImage: {
    width: width / 2,
    height: height / 1.3,
  },
});
