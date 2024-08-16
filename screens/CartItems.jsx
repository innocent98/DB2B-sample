/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeCart} from '../redux/cartRedux';

const CartItems = () => {
  const {cart} = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleRemoveToCart = item => {
    dispatch(removeCart(item));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {cart.map(item => (
        <Pressable
          key={item.id}
          style={{padding: 4, gap: 10}}
          onPress={() => handleRemoveToCart(item)}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CartItems;
