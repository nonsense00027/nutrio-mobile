import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../../components/Stepper/Header';
import Stepper from '../../../components/Stepper/Stepper';
import {Button} from 'react-native-elements';
import Colors from '../../../shared/theme/Colors';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useAuthContext} from '../../../context/AuthContext';

export default function Severly() {
  const {user} = useAuthContext();
  console.log('user is:', user);
  const navigation = useNavigation();
  const route = useRoute();
  console.log('severly', route.params);

  const handleSubmit = value => {
    navigation.navigate('Objective', {
      ...route.params,
      isSeverlyIll: value,
    });
  };
  return (
    <View style={{flex: 1}}>
      <Header title="Subjective Data" number={2} />
      <Stepper max={4} active={4} />
      <View style={styles.question}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.question__box}>
            <Text style={styles.question__content}>
              Are you severly ill? (e.g ICU)
            </Text>
          </View>
        </View>

        <View style={styles.question__options}>
          <Button
            title="No"
            buttonStyle={styles.question__optionsButtonNo}
            titleStyle={styles.question__optionsLabel}
            //   disabled={!noEmpty()}
            //   loading={loading}
            onPress={() => handleSubmit(false)}
          />
          <Button
            title="Yes"
            buttonStyle={styles.question__optionsButtonYes}
            titleStyle={styles.question__optionsLabel}
            //   disabled={!noEmpty()}
            //   loading={loading}
            onPress={() => handleSubmit(true)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    justifyContent: 'space-between',
  },
  question__box: {
    paddingHorizontal: 50,
  },
  question__content: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  question__options: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  question__optionsButtonNo: {
    marginVertical: 5,
    backgroundColor: '#DADADA',
    paddingVertical: 10,
  },
  question__optionsButtonYes: {
    marginVertical: 5,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
  },
  question__optionsLabel: {
    fontSize: 20,
  },
});
