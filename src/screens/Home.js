import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Main from '../bottomNavigation/Main';
import Search from '../bottomNavigation/Search';
import WishList from '../bottomNavigation/WishList';
import Cart from '../bottomNavigation/Cart';
import Profile from '../bottomNavigation/Profile';
import {useSelector} from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state => state);
  console.log(data);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <Profile />
      )}
      <View style={styles.container}>
        {/* Home Navigation*/}
        <TouchableOpacity
          style={styles.tabStyle}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../asset/img/home.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        {/* Search Navigation*/}
        <TouchableOpacity
          style={styles.tabStyle}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../asset/img/search.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        {/* AddtoCart Navigation*/}
        <View style={styles.tabStyle}>
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              backgroundColor: selectedTab == 2 ? '#000' : '#8e8e8e',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 22,
            }}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={require('../asset/img/cart.png')}
              style={{width: 22, height: 22, tintColor: '#fff'}}
            />
            {/* Add to cart counter  */}
            <View
              style={styles.counterStyle}>
              <Text style={{fontWeight: '300', color: '#fff', fontSize: 10}}>
                {data.Reducers.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Wishlist Navigation*/}
        <TouchableOpacity
          style={styles.tabStyle}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../asset/img/heart.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 3 ? '#000' : '#8e8e8e',
            }}
          />
          <View
            style={styles.counterStyle2}>
               {/* wishlist to cart counter  */}
            <Text style={{fontWeight: '300', color: '#fff', fontSize: 10}}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Profile Navigation*/}
        <TouchableOpacity
          style={styles.tabStyle}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../asset/img/user.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    background: '#fff',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabStyle: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterStyle:{
    width: 14,
    height: 14,
    backgroundColor: 'red',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 1,
    top: 2,
  },
  counterStyle2:{
    width: 14,
    height: 14,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
    top: 20,
  }
});

export default Home;
