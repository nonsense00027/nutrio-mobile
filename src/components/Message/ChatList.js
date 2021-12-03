import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChatItem from './ChatItem';
import tw from 'tailwind-react-native-classnames';

const chats = [
  {
    id: '1',
    message: 'how are you today? youfdd jdsj ksdlsdl lsd sdkskalq sjasj',
    user: '123',
  },
  {id: '2', message: 'Im fine thank you', user: 'SpOPhTuFdoYD7CiHPxa91fApY652'},
];
const ChatList = () => {
  const renderItem = ({item}) => <ChatItem item={item} />;

  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      inverted
    />
  );
};

export default ChatList;

const styles = StyleSheet.create({});
