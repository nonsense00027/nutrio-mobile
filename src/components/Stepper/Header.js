import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../shared/theme/Colors';
import {useNavigation} from '@react-navigation/core';

export default function Header({title, number}) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon
          name="chevron-left"
          type="material-community"
          size={30}
          color="black"
        />
      </TouchableOpacity>
      <Icon
        name="account-circle"
        type="material-community"
        size={60}
        color={Colors.primary}
      />
      <View style={{marginLeft: 5}}>
        <Text style={styles.header__number}>
          Step {number} <Text style={styles.header__max}>/ 3</Text>
        </Text>
        <Text style={styles.header__title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  header__number: {
    fontSize: 14,
    color: Colors.primary,
  },
  header__max: {
    color: '#333',
  },
  header__title: {
    fontSize: 15,
  },
});
