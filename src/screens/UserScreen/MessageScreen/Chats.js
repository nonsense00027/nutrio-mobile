import React from 'react';
import styles from './styles';
import {Text, View, Image} from 'react-native';
import chat from '../../../img/chat2.png';
import ChatsList from '../../../components/Message/ChatsList';

export default function Chats() {
  return (
    <View style={styles.chats}>
      {/* <Image
        source={chat}
        height={100}
        width={100}
        style={{height: 120}}
        resizeMode="contain"
      />
      <Text>You haven't received/sent any messages yet.</Text> */}
      {/* <ChatsList /> */}
    </View>
  );
}
