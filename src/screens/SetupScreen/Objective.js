import React, {useState} from 'react';
import styles from './styles';
import {Text, View, TextInput, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Stepper from '../../components/Stepper/Stepper';
import Header from '../../components/Stepper/Header';
import {useNavigation, useRoute} from '@react-navigation/core';
import DropDownPicker from 'react-native-dropdown-picker';
import {hasBlank} from '../../shared/utilities';
import firestore from '@react-native-firebase/firestore';
import {useAuthContext} from '../../context/AuthContext';

export default function Objective() {
  const {user} = useAuthContext();
  const navigation = useNavigation();
  const route = useRoute();

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dbw, setDbw] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Normal', value: 'Normal'},
    {label: 'Underweight', value: 'Underweight'},
    {label: 'Overweight', value: 'Overweight'},
    {label: 'Obese', value: 'Obese'},
  ]);

  const handleDisabled = () => {
    return hasBlank([height, weight, dbw, bmi, bmiCategory]);
  };

  const handleSubmit = value => {
    setLoading(true);
    firestore()
      .collection('profile')
      .doc(user.id)
      .set(
        {
          ...route.params,
          height,
          weight,
          dbw,
          bmi,
          bmiCategory,
          profileComplete: true,
        },
        {merge: true},
      )
      .then(res => {
        console.log('success');
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Header title="Objective Data" number={3} />
      <Stepper max={1} active={1} />
      <View style={styles.information}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Height(cm)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setHeight}
              value={height}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Weight(kg)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setWeight}
              value={weight}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>DBW(kg)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setDbw}
              value={dbw}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>BMI(kg/m2)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setBmi}
              value={bmi}
            />
          </View>
        </View>
        <View style={{zIndex: 9999}}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textInput__label}>BMI Category</Text>

              <DropDownPicker
                style={{
                  marginTop: 5,
                  borderColor: 'lightgray',
                  backgroundColor: '#eeeeee',
                }}
                containerStyle={{
                  backgroundColor: '#fff',
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#fff',
                  borderColor: 'lightgray',
                }}
                zIndex={10000}
                open={open}
                value={bmiCategory}
                items={items}
                setOpen={setOpen}
                setValue={setBmiCategory}
                setItems={setItems}
                placeholder="Select category"
                placeholderStyle={{
                  color: 'grey',
                }}
              />
            </View>
          </View>
        </View>

        <View>
          <Button
            title="Submit"
            disabled={handleDisabled()}
            buttonStyle={styles.information__submitButton}
            loading={loading}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
}
