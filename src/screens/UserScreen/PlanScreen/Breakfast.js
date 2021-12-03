import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FAB, Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import Plans from '../../../components/Plan/Plans';
import {useUserContext} from '../../../context/UserContext';
import Colors from '../../../shared/theme/Colors';

const Breakfast = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {category} = route.params;
  const {getPlan} = useUserContext();
  const listRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      listRef.current.scrollToOffset({offset: 0});
    });

    return unsubscribe;
  });
  return (
    <View style={tw`flex-1 px-2`}>
      <Plans data={getPlan(category)} category={category} listRef={listRef} />
      <FAB
        style={[tw`shadow-sm`, {...styles.fab}]}
        // small
        icon={() => (
          <Icon type="material" name="add-photo-alternate" color="#fff" />
        )}
        color={Colors.primary}
        // onPress={() => setAddModalVisible(true)}
      />
    </View>
  );
};

export default Breakfast;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
});
