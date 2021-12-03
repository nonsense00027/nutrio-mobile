import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {getIcon} from '../../../shared/utilities';

const Info = () => {
  const route = useRoute();
  const {foodItem} = route.params;

  return (
    <View style={tw`px-4`}>
      <Text style={tw`text-black text-center font-semibold text-2xl mt-4`}>
        {getIcon(foodItem)} {foodItem}
      </Text>
    </View>
  );
};

export default Info;
