import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Colors from '../../shared/theme/Colors';
import {getIcon} from '../../shared/utilities';

const PlanItem = ({foodItem, servings}) => {
  const navigation = useNavigation();

  return (
    <View
      style={tw`relative bg-white p-4 rounded-sm shadow-md flex-row items-center overflow-hidden justify-between border-r-2 border-green-400`}>
      <Text style={tw`text-lg mr-2`}>{getIcon(foodItem)}</Text>
      <Text style={[tw`text-black text-sm flex-grow`, {fontSize: 14}]}>
        {foodItem}
      </Text>
      <View style={tw`items-center`}>
        <Text style={tw`text-green-600 text-lg font-bold`}>{servings}</Text>
        <Text style={tw`text-xs`}>serving/s</Text>
      </View>
      <TouchableOpacity
        style={tw`ml-6`}
        onPress={() => navigation.navigate('Info', {foodItem})}>
        <Icon type="ionicon" name="information-circle" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default PlanItem;
