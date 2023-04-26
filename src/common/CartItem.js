import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CartItem = ({
  item,
  onRemoveItem,
  onAddWishList,
  isWishList,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  return (
    <View
      style={{
        width: 350,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        alignSelf: 'center',
      }}>
      <Image source={item.image} style={{width: '20%', height: '60%'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 10, marginVertical: 10}}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.gender}</Text>
          <Text>{item.size}</Text>
        </View>
        <View style={{}}>
          {isWishList ? (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginRight: 15,
                backgroundColor: '#eee',
              }}
              onPress={() => {
                onAddToCart(item);
              }}>
              <Text>Add To Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginRight: 15,
                backgroundColor: '#eee',
              }}
              onPress={() => {
                onRemoveItem();
              }}>
              <Text>Remove Item</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {isWishList ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#eee',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onRemoveFromWishlist();
          }}>
          <Image
            source={require('../asset/img/like.png')}
            style={{width: 20, height: 20, tintColor: 'red'}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#eee',
            borderRadius: 20,
            elevation: 5,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onAddWishList(item);
          }}>
          <Image
            source={require('../asset/img/heart.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartItem;
