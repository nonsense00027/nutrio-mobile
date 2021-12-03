import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Chip} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useAuthContext} from '../../../context/AuthContext';

const Physician = () => {
  const route = useRoute();
  const {user} = useAuthContext();
  const {id, imageUrl, firstname, lastname, age, trainings, gender} =
    route.params;
  const [loading, setLoading] = useState(false);

  const getGenderIcon = () => {
    if (gender === 'male') return '👨‍⚕️';
    else if (gender === 'female') return '👩‍⚕️';
  };

  const handleConnect = () => {
    console.log('connecting..');
    firestore().collection('profile').doc(user.id).set(
      {
        pending: true,
        dietician: id,
      },
      {merge: true},
    );
  };

  return (
    <View style={styles.physician}>
      <View>
        <View style={styles.physician__imageContainer}>
          <View
            style={tw`w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md`}>
            <Image style={tw`w-full h-full`} source={{uri: imageUrl}} />
          </View>
        </View>

        <View style={tw`mt-5`}>
          <Text style={tw`text-black text-center text-xl font-semibold`}>
            {firstname} {lastname}
          </Text>
          <Text style={[tw`text-center text-gray-600`, {fontSize: 16}]}>
            {getGenderIcon()} Clinical Dietitian
          </Text>
          <Text style={[tw`text-center text-gray-600`, {fontSize: 15}]}>
            {age} yrs old
          </Text>
        </View>
        <Text style={tw`text-center mt-4 text-xs text-black`}>
          Trainings attended:{' '}
        </Text>
        <View style={tw`flex-row flex-wrap justify-center my-1`}>
          {trainings?.map(item => (
            <Chip
              key={item.title}
              title={item.title}
              type="outline"
              titleStyle={{fontSize: 10}}
              containerStyle={{margin: 2}}
            />
          ))}
        </View>
      </View>
      <CustomButton
        title="Proceed"
        // disabled={hasEmpty()}
        loading={loading}
        action={handleConnect}
      />
    </View>
  );
};

export default Physician;
