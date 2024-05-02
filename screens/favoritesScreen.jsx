import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderSearch from "../components/common/HeaderSearch";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/Slice/favoritesSlice";
import { useNavigation } from "@react-navigation/native";
import { addItem } from '../store/Slice/cartSlice';
import { useToast } from "react-native-toast-notifications";

const FavoriteScreen = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFavorite(id));
  };
  
  const handleAddCart = (product) => {
    dispatch(addItem({ product, quantity: 1 }));
    toast.show("One Product add to Cart", {
      type: 'success',
      placement: 'bottom',
      duration: 3000,
      offset: 30,
      animationType: 'slide-in'
    });
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleRemoveFromFavorites(item.id)}>
          <Icon name="heart-remove" size={22} color="#FE554A" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 12}} onPress={() => handleAddCart(item)}>
          <Icon name="cart-plus" size={22} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <HeaderSearch />
        <Image
          source={{ uri: "https://i.postimg.cc/c4hBy5Y7/1-removebg-preview.png" }}
          style={styles.emptyImage}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderSearch />
      <SwipeListView
        data={favorites}
        renderItem={renderItem}
        disableRightSwipe
        rightOpenValue={-75}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  emptyImage: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoriteScreen;
