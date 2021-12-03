import React from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {useAuthContext} from '../../../context/AuthContext';

const Waiting = () => {
  const {user} = useAuthContext();

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`font-semibold`}>Waiting for approval.</Text>
    </View>
  );
};

export default Waiting;
