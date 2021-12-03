import React from 'react';
import styles from './styles';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useAuthContext} from '../../../context/AuthContext';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../../../shared/theme/Colors';
import DieticianList from '../../../components/Dietician/DieticianList';
import {useDieticianContext} from '../../../context/DieticianContext';

export default function Collab() {
  const {user} = useAuthContext();
  const {dieticians} = useDieticianContext();
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView> */}
      <View style={styles.collab}>
        <View style={styles.collab__header}>
          <Text style={styles.collab__headerTitle}>Dietitian</Text>
          <Text style={styles.collab__headerSubtitle}>
            Consult with a dietitian
          </Text>
        </View>

        <DieticianList data={dieticians} />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
