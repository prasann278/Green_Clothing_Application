import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {products} from '../screens/Product';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import MyProductItem from '../common/MyProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishList} from '../redux/Actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [bagList, setBagList] = useState([]);
  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setBagList(products.category[1].data);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator="false"
      style={{flex: 1, marginBottom: 60}}>
      <View>
        <ScrollView>
          <Image
            // images is fetched form the asset folder under the source
            source={require('../asset/img/banner.jpeg')}
            style={{
              width: '95%',
              height: 250,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
        </ScrollView>
        <View style={{marginVertical: 20}}>
          {/* List of category  of product*/}
          <FlatList
            horizontal
            data={categoryList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }}>
                  <Text style={{color: '#000'}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: '#000',
            fontSize: 20,
            fontWeight: '600',
          }}>
          T-Shirt
        </Text>
        {/* list of tshirt is listed her after fetching form json from product.js file */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator="false"
          data={tshirtList}
          renderItem={({item, index}) => {
            return (
              <MyProductItem
                item={item}
                onAddWishList={x => {
                  dispatch(addToWishList(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(x));
                }}
              />
            );
          }}
        />
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: '#000',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Bags
        </Text>
        {/* list of bags is listed her after fetching form json from product.js file */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator="false"
          data={bagList}
          renderItem={({item, index}) => {
            return (
              <MyProductItem
                item={item}
                onAddWishList={x => {
                  dispatch(addToWishList(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(x));
                }}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Main;
