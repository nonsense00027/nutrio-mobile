import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {useAuthContext} from '../../context/AuthContext';
import thea from '../../img/dieticians/thea.jpeg';
import Colors from '../../shared/theme/Colors';

const ChatItem = ({item}) => {
  const {user} = useAuthContext();
  return (
    <View
      style={[
        tw`${
          user.id === item.user ? 'self-end' : 'self-start'
        } px-6 rounded-2xl py-2 mx-2 my-2`,
        {
          backgroundColor: user.id === item.user ? '#DBDCDB' : Colors.primary,
          maxWidth: '75%',
        },
      ]}>
      <Text
        style={[
          tw`${user.id === item.user ? 'text-gray-700' : 'text-white'}`,
          {fontSize: 16},
        ]}>
        {item.message}
      </Text>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({});
