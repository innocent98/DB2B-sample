/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../redux/cartRedux';
import {useNavigation} from '@react-navigation/native';

const dummyData = [
  {id: 1, name: 'Apple', isAvailable: true, price: 20},
  {id: 2, name: 'Orange', isAvailable: true, price: 15},
  {id: 3, name: 'Pineapple', isAvailable: true, price: 25},
  {id: 4, name: 'Watermelon', isAvailable: true, price: 40},
  {id: 5, name: 'Banana', isAvailable: true, price: 30},
  {id: 6, name: 'Cashew', isAvailable: true, price: 35},
  {id: 7, name: 'Mango', isAvailable: true, price: 20},
  {id: 8, name: 'Plantain', isAvailable: true, price: 10},
  {id: 9, name: 'Pawpaw', isAvailable: true, price: 35},
  {id: 10, name: 'Pear', isAvailable: true, price: 40},
  {id: 11, name: 'Coconut', isAvailable: true, price: 50},
];

const Items = () => {
  const {cart} = useSelector(state => state.cart);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addCart(item));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{position: 'absolute', zIndex: 9, top: 100}}
        onPress={() => navigation.navigate('CartItems')}>
        Carts: {cart?.length}
      </Text>

      {dummyData.map(item => (
        <Pressable
          key={item.id}
          style={{padding: 4, gap: 10}}
          onPress={() => handleAddToCart(item)}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Items;
