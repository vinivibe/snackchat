import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icone from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderSearch from "../components/common/HeaderSearch";
import { LinearGradient } from "expo-linear-gradient";
import DATA from "../constants/restaurants";
import { useDispatch } from "react-redux";
import restaurantes from "../constants/data";
import { addItem } from "../store/Slice/cartSlice";

const RestaurantScreen = () => {
  const [restaurants, setRestaurants] = useState(DATA);
  const dispatch = useDispatch();

  const toggleExpand = (id) => {
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.id === id) {
        return { ...restaurant, expanded: !restaurant.expanded };
      }
      return restaurant;
    });
    setRestaurants(updatedRestaurants);
  };

  const addToCart = (item) => {
    dispatch(addItem({ product: item, quantity: 1 }));
  };

  const renderRestaurant = ({ item }) => (
    <View style={styles.containerCard}>
      <TouchableOpacity
        onPress={() => toggleExpand(item.id)}
        style={styles.card}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <LinearGradient
          colors={["#F98B1F", "#FF774C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 20 }}
        >
          <Icon
            name={item.expanded ? "expand-less" : "expand-more"}
            size={24}
            color="#000"
          />
        </LinearGradient>
      </TouchableOpacity>
      {item.expanded &&
        restaurantes.map((menuItem) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: menuItem.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{menuItem.name}</Text>
              <Text style={styles.itemPrice}>${menuItem.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => addToCart(menuItem)}>
                <Icone name="cart-plus" size={22} color="#FE554A99" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderSearch />
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  containerCard: {},
  card: {
    width: 335,
    height: 112,
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 5,
  },
  cardHeader: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItem: {
    width: 335,
    alignSelf: "center",
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 2,
    borderRadius: 4,
  },
  description: {
    width: 180,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18.2,
  },
  image: {
    marginLeft: 15,
    width: 70,
    height: 70,
  },
  itemContainer: {
    width: 335,
    alignSelf: "center",
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
    width: 35,
    height: 35,
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
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
});

export default RestaurantScreen;
