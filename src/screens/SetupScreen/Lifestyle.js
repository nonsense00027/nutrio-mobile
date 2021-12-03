import React, {useState, useRef, useCallback, useEffect} from 'react';
import styles from './styles';
import {Text, View, Image} from 'react-native';
import Stepper from '../../components/Stepper/Stepper';
import BackButton from '../../components/BackButton';
import {Button} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import sedentary from '../../img/lifestyle/sedentary.png';
import light from '../../img/lifestyle/light.png';
import active from '../../img/lifestyle/active.png';
import very from '../../img/lifestyle/very.png';
import {useAuthContext} from '../../context/AuthContext';
import {useFirebaseContext} from '../../context/FirebaseContext';

const semesters = [
  {
    id: 0,
    name: 'Sedentary',
    type: 'Spending most of the day sitting',
    image: sedentary,
  },
  {
    id: 1,
    name: 'Lightly Active',
    type: 'I work out ocassionally',
    image: light,
  },
  {
    id: 2,
    name: 'Active',
    type: 'Daily exercise that is equal to walking for 1 hour and 45 minutes at 4mph',
    image: active,
  },
  {
    id: 3,
    name: 'Very Active',
    type: 'Daily exercise that is equal to walking for 4 hours and 15 minutes at 4mph',
    image: very,
  },
];

const getInfo = index => {
  let item = semesters.filter(sem => sem.id === index)[0];
  return (
    <>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center',
        }}>
        {item.name}
      </Text>
      <Text style={{fontSize: 16, textAlign: 'center', opacity: 0.5}}>
        {item.type}
      </Text>
    </>
  );
};
export default function Lifestyle({navigation, route}) {
  const {age, height, weight, semester} = route.params;
  const {user} = useAuthContext();
  const {database} = useFirebaseContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    let lifestyle = semesters.filter(item => item.id === activeIndex)[0].name;

    database
      .collection('profile')
      .doc(user.id)
      .set(
        {
          age,
          height,
          weight,
          semester,
          lifestyle,
          profileComplete: true,
          welcomeMessage: true,
        },
        {merge: true},
      )
      .then(result => {
        console.log('success');
        setLoading(false);
      });
  };

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.lifestyle__card}>
        <Image
          resizeMode="contain"
          style={{height: 101, width: '100%'}}
          source={item.image}
        />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Stepper max={5} active={5} />
      <View style={styles.back__container}>
        <BackButton action={() => navigation.pop()} />
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={styles.title}>What’s your current activity level?</Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <Carousel
              layout={'default'}
              ref={ref}
              data={semesters}
              sliderWidth={300}
              itemWidth={159}
              inactiveSlideScale={0.5}
              inactiveSlideOpacity={0.2}
              renderItem={renderItem}
              onSnapToItem={index => setActiveIndex(index)}
            />
          </View>

          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              marginHorizontal: 25,
            }}>
            {getInfo(activeIndex)}
          </View>
        </View>
        <Button
          title="Finish"
          buttonStyle={styles.age__nextButton}
          titleStyle={styles.age__nextButtonLabel}
          // disabled={!noEmpty()}
          loading={loading}
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  );
}
