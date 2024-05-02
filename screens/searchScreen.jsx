import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderSearch from '../components/common/HeaderSearch';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/Slice/cartSlice";
import CartItem from '../components/common/cardItem';
import restaurants from '../constants/data';



const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );

  const addCart = (item) =>{
    dispatch(addItem(item))
  }

  return (
    <View style={styles.container}>
      <HeaderSearch />  
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="magnify" size={20} color="#000"/>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar pelo nome..."
          onChangeText={setQuery}
          value={query}
        />
        <Icon style={styles.closeIcon} name="close-circle" size={20} color="#000" onPress={() => setSearchQuery('')} />
      </View>
      {/* Lista de produtos filtrados */}
      <FlatList
        data={filteredRestaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem item={item} /> // Substitua pelo componente do seu produto
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    margin: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    color: '#424242',
  },
  closeIcon: {
    padding: 10,
  },
});

export default SearchScreen;
