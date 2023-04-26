import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CartItem from '../common/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishList, removeFromCart} from '../redux/Actions/Actions';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{marginTop: 60}}>
        <View style={styles.header}>
          <Text style={styles.titleStyle}> Add To Cart </Text>
        </View>
      </View>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              item={item}
              onAddWishList={x => {
                dispatch(addToWishList(x));
              }}
              onRemoveItem={() => {
                dispatch(removeFromCart(index));
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 70},
  header: {flexDirection: 'row', justifyContent: 'center'},
  titleStyle: {fontWeight: '600', fontSize: 18},
});

export default Cart;
