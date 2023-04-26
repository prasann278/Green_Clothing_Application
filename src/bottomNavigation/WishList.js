import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CartItem from '../common/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  removeFromCart,
  removeFromWishList,
} from '../redux/Actions/Actions';

const WishList = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {/* here list is created once product is WishList form home page  */}
      <View style={{marginTop: 60}}>
        <View style={styles.header}>
          <Text style={styles.titleStyle}>WishList</Text>
        </View>
      </View>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              isWishList={'ee'}
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishList(index));
              }}
              onAddToCart={x => {
                dispatch(addItemToCart(x));
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

export default WishList;
