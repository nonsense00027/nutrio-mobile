import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import PlanItem from './PlanItem';

const Plans = ({data, category, listRef}) => {
  const renderItem = ({index, item}) => {
    return <PlanItem foodItem={item.foodItem} servings={item[category]} />;
  };
  return (
    <FlatList
      ref={listRef}
      data={data}
      keyExtractor={item => item.foodItem.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={{height: 8, backgroundColor: 'transparent'}} />
      )}
      ListHeaderComponent={() => <View style={{height: 10}} />}
      ListFooterComponent={() => <View style={{height: 90}} />}
    />
  );
};

export default Plans;
