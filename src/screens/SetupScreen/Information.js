import React, {useState} from 'react';
import styles from './styles';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import Stepper from '../../components/Stepper/Stepper';
import Header from '../../components/Stepper/Header';
import {useNavigation} from '@react-navigation/core';
import {hasBlank} from '../../shared/utilities';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function Information() {
  const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [religion, setReligion] = useState('');
  const [medicalDiagnosis, setMedicalDiagnosis] = useState('');
  const [physician, setPhysician] = useState('');
  const [admissionDate, setAdmissionDate] = useState(new Date());
  const [dietOrder, setDietOrder] = useState('');

  const handleDisabled = () => {
    return hasBlank([
      fullname,
      address,
      age,
      occupation,
      religion,
      medicalDiagnosis,
      physician,
      dietOrder,
    ]);
  };

  const [show, setShow] = useState(false);

  const handleConfirm = date => {
    setAdmissionDate(date);
    setShow(false);
  };

  const handleSubmit = () => {
    const data = {
      fullname,
      address,
      age,
      occupation,
      religion,
      medicalDiagnosis,
      physician,
      dietOrder,
    };
    navigation.navigate('Bmi', data);
  };

  return (
    <ScrollView>
      <Header title="Patient Profile" number={1} />
      <Stepper max={1} active={1} />
      <View style={styles.information}>
        {/* <Text>Information</Text> */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setFullname}
              value={fullname}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Address</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setAddress}
              value={address}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Age</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setAge}
              value={age}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Religion</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setReligion}
              value={religion}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Occupation</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setOccupation}
              value={occupation}
            />
          </View>
        </View>

        {/* <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Religion</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setReligion}
              value={religion}
            />
          </View>
        </View> */}

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Medical Diagnosis</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setMedicalDiagnosis}
              value={medicalDiagnosis}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Physician</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setPhysician}
              value={physician}
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Date of Admission</Text>
            <TouchableOpacity
              style={styles.textInputDate}
              onPress={() => setShow(true)}>
              <Text>{moment(admissionDate).format('MMMM Do YYYY')}</Text>
            </TouchableOpacity>
            {/* <TextInput
              style={styles.textInput}
              onChangeText={setAddress}
              value={address}
            /> */}
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Diet Order</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setDietOrder}
              value={dietOrder}
            />
          </View>
        </View>

        <View>
          <Button
            title="Submit"
            disabled={handleDisabled()}
            buttonStyle={styles.information__submitButton}
            //   titleStyle={styles.information__submitButtonLabel}
            //   disabled={!noEmpty()}
            //   loading={loading}
            onPress={handleSubmit}
          />
        </View>
      </View>
      <DateTimePickerModal
        isVisible={show}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setShow(false)}
      />
    </ScrollView>
  );
}
