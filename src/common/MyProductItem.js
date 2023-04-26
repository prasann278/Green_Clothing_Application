import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const MyProductItem = ({item, onAddToCart, onAddWishList}) => {
  return (
    <View style={styles.banner}>
      {/* banner image  */}
      <Image source={item.image} style={{width: '100%', height: '70%'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* infromation of product */}
        <View style={{marginLeft: 30, marginVertical: 20}}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.gender}</Text>
          <Text>{item.size}</Text>
        </View>
        {/* add to cart button */}
        <TouchableOpacity
          style={styles.addCart}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      {/* add to WishList button */}
      <TouchableOpacity
        style={styles.addWishButton}
        onPress={() => {
          onAddWishList(item);
        }}>
        <Image
          source={require('../asset/img/heart.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet for Homepage
const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 400,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addCart: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 15,
    backgroundColor: '#eee',
  },
  addWishButton: {
    width: 40,
    height: 40,
    backgroundColor: '#efc',
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyProductItem;
