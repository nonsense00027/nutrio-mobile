import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {useAuthContext} from '../../../context/AuthContext';
import foods from '../../../img/foods.jpg';
import firestore from '@react-native-firebase/firestore';
import {collectIdsAndDocs} from '../../../shared/utilities';
import {PlanRoute} from '../../../routes/PlanRoute';

const Plan = () => {
  const {user} = useAuthContext();
  
  return (
    <View style={tw`flex-1 bg-white pt-10 z-50`}>
      <View style={tw`px-6 mb-4`}>
        <Text style={tw`text-black text-2xl font-semibold`}>
          Hi {user.name.split(' ')[0]} 👋
        </Text>
        <Text style={tw`text-black text-lg opacity-60`}>
          Here's your Dietary Plan.
        </Text>
      </View>

      <View style={{flex: 1}}>
        <PlanRoute />
      </View>
    </View>
  );
};

export default Plan;
