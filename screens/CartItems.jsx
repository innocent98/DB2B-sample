/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeCart} from '../redux/cartRedux';

const CartItem = ({item}) => {
  const [itemPrice, setItemPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleRemoveToCart = item => {
    dispatch(removeCart(item));
  };

  const updateItemPriceAndQuantity = sign => {
    if (sign === '-') {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        setItemPrice(itemPrice - item.price);
      }
    }

    if (sign === '+') {
      setQuantity(quantity + 1);
      setItemPrice(itemPrice + item.price);
    }
  };

  return (
    <Pressable
      key={item.id}
      style={{padding: 4, gap: 10}}
      onPress={() => handleRemoveToCart(item)}>
      <View style={{alignItems: 'center', gap: 10}}>
        <Text>
          {item.name}: {quantity}
        </Text>

        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Pressable
            onPress={() => updateItemPriceAndQuantity('-')}
            style={{
              backgroundColor: 'blue',
              padding: 6,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>-</Text>
          </Pressable>

          <Text>Price: {item.price}CFA</Text>

          <Pressable
            onPress={() => updateItemPriceAndQuantity('+')}
            style={{
              backgroundColor: 'blue',
              padding: 6,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>+</Text>
          </Pressable>
        </View>

        <Text>Total price: {itemPrice}CFA</Text>
      </View>
    </Pressable>
  );
};

const CartItems = () => {
  const {cart} = useSelector(state => state.cart);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
      }}>
      {cart.map(item => (
        <CartItem item={item} />
      ))}
    </View>
  );
};

export default CartItems;
