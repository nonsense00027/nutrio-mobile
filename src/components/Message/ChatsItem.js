import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import thea from '../../img/dieticians/thea.jpeg';

const ChatsItem = () => {
  const navigation = useNavigation();
  const goToChat = () => {
    navigation.navigate('Chat');
  };
  return (
    <TouchableOpacity
      style={tw`flex-row items-center p-3`}
      activeOpacity={0.4}
      onPress={goToChat}>
      <Image
        style={tw`h-14 w-14 rounded-full mr-1`}
        resizeMode="cover"
        source={thea}
      />
      <View style={tw`flex-1 pl-2 pr-1`}>
        <View style={tw`flex-row pb-1`}>
          <Text style={[tw`flex-1 font-bold text-black`, {fontSize: 16}]}>
            Neil Fred
          </Text>
          <Text style={tw`text-gray-500`}>11:02am</Text>
        </View>
        <Text style={tw`text-gray-700`} numberOfLines={1}>
          Hello guys, musta naman mo dha? Hello guys, musta naman mo dha? Hello
          guys, musta naman mo dha?
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatsItem;

const styles = StyleSheet.create({});
