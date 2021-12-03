import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../shared/theme/Colors';
import Texts from '../../shared/theme/Texts';
import {Button} from 'react-native-elements';
import logo from '../../img/logo.png';
import tw from 'tailwind-react-native-classnames';

export default function Welcome({navigation}) {
  return (
    <View style={styles.welcome}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Image source={logo} style={tw`h-60`} resizeMode="contain" />
      </View>
      <View style={{flex: 0.3}}>
        <Text style={styles.welcome__title}>Eat wisely, Stay healthy</Text>
        <Text style={styles.welcome__subtitle}>
          What you eat affects your baby's health.
        </Text>
      </View>
      <View style={{flex: 0.3}}>
        <Button
          title="Sign Up"
          buttonStyle={styles.welcome__button}
          titleStyle={styles.welcome__buttonText}
          onPress={() => navigation.navigate('Register')}
        />
        <View style={styles.welcome__login}>
          <Text>ALREADY HAVE AN ACCOUNT? </Text>
          <TouchableOpacity
            style={styles.welcome__loginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.welcome__loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'},
  welcome__button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 17,
    borderRadius: 38,
  },
  welcome__title: {
    textAlign: 'center',
    fontSize: Texts.title,
    fontWeight: 'bold',
    color: 'black',
  },
  welcome__subtitle: {
    textAlign: 'center',
    fontSize: Texts.subtitle,
    marginTop: 5,
    color: 'black',
  },
  welcome__buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
  },
  welcome__login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  welcome__loginButtonText: {
    textTransform: 'uppercase',
    color: Colors.primary,
    marginLeft: 3,
    fontWeight: 'bold',
  },
});
