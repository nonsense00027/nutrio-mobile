import React from 'react';
import styles from './styles';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useAuthContext} from '../../../context/AuthContext';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../../../shared/theme/Colors';
import Diets from './Diets';
import Articles from './Articles';
import foods from '../../../img/foods.jpg';

export default function Home() {
  const {user} = useAuthContext();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.home}>
        <View style={styles.header}>
          <Text style={styles.header__title}>
            Hello {user.name.split(' ')[0]},
          </Text>
          <Text style={styles.header__subtitle}>
            Start planning your meals and stay healthy!
          </Text>
        </View>

        <Articles />

        <View style={styles.meal__ter}>
          <View style={styles.meal__terOverlay}></View>
          <View style={styles.meal__terLeft}>
            <Text style={styles.meal__terLeftTitle}>
              Know what’s best meals for you.
            </Text>
          </View>
          <View style={styles.meal__terRight}>
            <TouchableOpacity
              style={styles.meal__generateButton}
              activeOpacity={0.7}>
              <Text style={styles.meal__terRightTitle}>Start</Text>
              <MaterialCommunityIcons
                name="play"
                size={24}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Diets />
      </View>
    </SafeAreaView>
  );
}
