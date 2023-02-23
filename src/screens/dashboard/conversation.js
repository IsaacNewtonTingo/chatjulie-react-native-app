import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

import React, {useState, useCallback, useEffect, useRef} from 'react';

import globalStyles from '../../assets/styles/global-styles';
import ChatInput from '../../components/inputs/chat-input';
import colors from '../../assets/colors/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageItem from '../../components/cards/message-item';
import {showMyToast} from '../../functions/show-toast';

const {width} = Dimensions.get('window');

export default function Conversation() {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello, ask me anything',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Chat Julie',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  const [message, setMessage] = useState('');

  const [user, setUser] = useState({
    _id: 2,
    name: 'Tingo',
    avatar: null,
  });

  const flatListRef = useRef(null);

  async function sendMessage() {
    if (!message) {
      showMyToast({
        status: 'error',
        title: 'Required',
        description: 'Please write something before submitting',
      });
    } else {
      flatListRef.current.scrollToEnd();
      const newMessage = {
        _id: 3,
        text: message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Tingo',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  }

  return (
    <View style={styles.messagingscreen}>
      <View
        style={[
          styles.messagingscreen,
          {paddingVertical: 15, paddingHorizontal: 10},
        ]}>
        {messages[0] ? (
          <FlatList
            style={{paddingBottom: 100}}
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            data={messages}
            keyExtractor={item => item.message}
            renderItem={({item}) => <MessageItem item={item} user={user} />}
          />
        ) : (
          ''
        )}
      </View>

      <View style={styles.messaginginputContainer}>
        <ChatInput
          value={message}
          name="message"
          onChangeText={setMessage}
          placeholder="Write something"
          style={styles.input}
          InputRightElement={
            <TouchableOpacity
              style={globalStyles.iconRight}
              // onPress={() => setShowPass(!showPass)}
            >
              <Ionicons name="ios-mic-outline" size={30} color="black" />
            </TouchableOpacity>
          }
        />

        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="md-send-sharp" size={30} color={colors.orange} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messagingscreen: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  messaginginputContainer: {
    width: '100%',
    backgroundColor: colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
