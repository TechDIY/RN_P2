import React from 'react';
import { View, TouchableWithoutFeedback ,Animated } from 'react-native';
import ClickCard from './ClickCard';


const Item = ({ item , onClick }) =>
  <TouchableWithoutFeedback onPress={() => onClick(item)}>
    <View>
      <ClickCard.CardItem
        item={item}
      />
    </View>
  </TouchableWithoutFeedback>;

export default Item;
