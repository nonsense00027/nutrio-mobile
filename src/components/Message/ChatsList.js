import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChatsItem from './ChatsItem';
import tw from 'tailwind-react-native-classnames';

const chats = [{id: '1'}, {id: '2'}];
const ChatsList = () => {
  const renderItem = ({item}) => <ChatsItem />;

  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 1}]}></View>
      )}
      //   horizontal
      renderItem={renderItem}
    />
  );
};

export default ChatsList;

const styles = StyleSheet.create({});
