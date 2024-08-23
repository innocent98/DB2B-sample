/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Pressable, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../redux/cartRedux';
import {useNavigation} from '@react-navigation/native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

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

  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = item => {
    dispatch(addCart(item));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={() => navigation.navigate('Search')}
        style={{
          height: 50,
          width: '70%',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <Text>Search Item</Text>
      </Pressable>

      <Text
        style={{position: 'absolute', zIndex: 9, top: 100}}
        onPress={() => navigation.navigate('CartItems')}>
        Carts: {cart?.length}
      </Text>

      {isLoading && (
        <View style={{gap: 10}}>
          <ShimmerPlaceHolder
            style={{width: 300, height: 50, borderRadius: 20}}
          />

          <View style={{}}>
            <ShimmerPlaceHolder
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          </View>
        </View>
      )}

      {!isLoading && (
        <>
          {dummyData.map(item => (
            <Pressable
              key={item.id}
              style={{padding: 4, gap: 10}}
              onPress={() => handleAddToCart(item)}>
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </>
      )}
    </View>
  );
};

export default Items;
