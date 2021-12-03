import React, {useState, useEffect} from 'react';
import styles from './styles';
import {
  Text,
  View,
  TextInput,
  Picker,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Button, Icon} from 'react-native-elements';
import {hasBlank} from '../../shared/utilities';
import tw from 'tailwind-react-native-classnames';
import Colors from '../../shared/theme/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [religion, setReligion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState({});
  const [photoName, setPhotoName] = useState('Upload your lab result image');

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      // console.log('result is: ', result.assets[0].uri);
      if (result) {
        const {fileName, uri} = result.assets[0];
        setPhotoName(fileName.split('rn_image_picker_lib_')[1]);
        setPhoto(uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    setLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        let user = res.user;

        const reference = storage().ref(`/images/${photoName}-${user.uid}`);
        const task = reference.putFile(photo);
        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });
        task.then(() => {
          storage()
            .ref(`/images/${photoName}-${user.uid}`)
            .getDownloadURL()
            .then(url => {
              firestore().collection('profile').doc(user.uid).set({
                name,
                address,
                age,
                religion,
                occupation,
                email,
                password,
                role: 'pregnant',
                labResult: url,
                phoneNumber,
              });
              setLoading(false);
            });
        });
      })
      .catch(err => {
        console.log(err.message);
        // ToastAndroid.showWithGravityAndOffset(
        //   "Something went wrong, please try again.",
        //   ToastAndroid.SHORT,
        //   ToastAndroid.BOTTOM,
        //   0,
        //   50
        // );
        setLoading(false);
      });
  };

  const hasEmpty = () => {
    // return email.length > 0 && password.length > 0 && name.length > 0;
    return hasBlank([name, address, age, occupation, email, password]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
      style={{flex: 1, backgroundColor: '#fff'}}
      contentContainerStyle={{backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={{backgroundColor: '#fff'}}>
        <View style={styles.login}>
          {/* <View style={{flex: 1, justifyContent: 'center'}}> */}
          <View style={styles.login__header}>
            <Text style={styles.login__title}>Create your account</Text>
          </View>
          <View style={styles.login__error}>
            {error && <Text style={styles.login__errorText}>{error}</Text>}
          </View>

          <TextInput
            style={styles.login__formTextInput}
            autoFocus
            onChangeText={val => setName(val)}
            value={name}
            placeholder="Full name"
          />
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={val => setAddress(val)}
            value={address}
            placeholder="Address"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TextInput
              style={{...styles.login__formTextInput, flex: 1}}
              // style={{[...styles.login__formTextInput, flex:1]}}
              onChangeText={val => setAge(val)}
              value={age}
              keyboardType="numeric"
              placeholder="Age"
            />
            <View style={{width: 5}} />
            <TextInput
              style={{...styles.login__formTextInput, flex: 1}}
              onChangeText={val => setReligion(val)}
              value={religion}
              placeholder="Religion"
            />
          </View>
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={val => setOccupation(val)}
            value={occupation}
            placeholder="Occupation"
          />
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={val => setPhoneNumber(val)}
            value={phoneNumber}
            placeholder="Phone number"
          />
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={val => setEmail(val)}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.login__formTextInput}
            onChangeText={val => setPassword(val)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />

          <View style={tw`flex-row items-center bg-gray-100 rounded-lg`}>
            <View style={tw`py-4 px-3 flex-1`}>
              <Text style={tw`text-gray-500`} numberOfLines={1}>
                {photoName}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                tw`h-full px-4 flex-row items-center `,
                {backgroundColor: Colors.primary},
              ]}
              onPress={selectImage}>
              <Icon type="antdesign" name="upload" color="white" />
            </TouchableOpacity>
          </View>

          <Button
            title="Get started"
            buttonStyle={styles.login__button}
            titleStyle={styles.login__buttonLabel}
            disabled={hasEmpty()}
            loading={loading}
            onPress={() => handleRegister()}
          />
          {/* </View> */}
          <View>
            <View style={styles.login__signup}>
              <Text>ALREADY HAVE AN ACCOUNT? </Text>
              <TouchableOpacity
                style={styles.login__signupButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login__signupButtonText}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
