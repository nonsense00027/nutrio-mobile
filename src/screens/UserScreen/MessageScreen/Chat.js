import React from 'react';
import styles from './styles';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import ChatList from '../../../components/Message/ChatList';
import thea from '../../../img/dieticians/thea.jpeg';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';

export default function Chat() {
  const navigation = useNavigation();
  return (
    <View style={styles.chat}>
      {/* <View style={tw`flex-row p-3 items-center border-b border-gray-300`}>
        <TouchableOpacity style={tw`pr-4`} onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            type="material-community"
            size={30}
            color="black"
          />
        </TouchableOpacity>

        <Image
          style={tw`h-14 w-14 rounded-full mr-1`}
          resizeMode="cover"
          source={thea}
        />
        <View style={tw`pl-2`}>
          <Text style={tw`text-black font-semibold text-lg`}>Thea Avilla</Text>
          <Text style={tw`text-gray-600`}>Oct. 8, 2021 | 6:29pm</Text>
        </View>
      </View>
      <ChatList />
      <View style={tw`bg-white flex-row items-center mt-2`}>
        <TextInput style={tw`bg-gray-300 flex-grow px-2`} />
        <Icon style={tw`px-3`} type="material" name="send" />
      </View> */}
    </View>
  );
}
