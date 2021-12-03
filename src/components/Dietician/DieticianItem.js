import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function DieticianItem({item, action}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{...styles.product, ...styles.shadow}}
      onPress={() => navigation.navigate('Physician', {...item})}
      activeOpacity={1}>
      {/* <View style={styles.product}> */}
      <View style={styles.product__imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: item.imageUrl}}
        />
      </View>
      <View style={styles.product__info}>
        <Text style={{fontSize: 18}}>{item.firstname}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>{item.lastname}</Text>
          <View style={styles.active}></View>
        </View>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      // width: 0,
      //   height: 10,
    },
    shadowOpacity: 0.13,
    shadowRadius: 6,
  },
  product: {
    // height: 200,
    paddingVertical: 20,
    // width: 182,
    width: '45%',
    // borderWidth: 0.5,
    // borderColor: "lightgray",
    // marginBottom: 20,
    marginVertical: 8,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    // overflow: "hidden",
  },
  product__imageContainer: {
    flex: 1,
    // backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  product__info: {
    flex: 0.3,
    // padding: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#fff",
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  product__size: {
    opacity: 0.5,
  },
  product__price: {
    fontWeight: 'bold',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
  active: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#33FF6C',
    marginLeft: 8,
  },
});
