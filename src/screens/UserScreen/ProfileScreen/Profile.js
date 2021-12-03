import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import {useAuthContext} from '../../../context/AuthContext';
import {ProfileRoute} from '../../../routes/ProfileRoute';
import Colors from '../../../shared/theme/Colors';

export default function Profile() {
  const {logout} = useAuthContext();
  const {user} = useAuthContext();
  console.log('user is: ', user);
  return (
    <View style={tw`flex-1 pb-10`}>
      <View style={tw`flex-1`}>
        <View style={tw`px-4 py-4 bg-white`}>
          <Text style={tw`text-black text-xl`}>{user.name}</Text>
          <View style={tw`flex-row items-center`}>
            <Icon
              type="material-community"
              name="gmail"
              size={16}
              color="maroon"
            />
            <Text style={tw`text-gray-500 ml-1`}>{user.email}</Text>
          </View>
        </View>
        <ProfileRoute />
      </View>
      <View style={tw`px-4`}>
        <Button
          title="Logout"
          buttonStyle={{backgroundColor: Colors.primary}}
          onPress={logout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
