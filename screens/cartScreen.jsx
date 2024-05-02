import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderSearch from "../components/common/HeaderSearch";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/Slice/cartSlice";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onIncreaseQuantity = (item) => {
    dispatch(addItem({ product: item, quantity: 1 }));
  };

  const onDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addItem({ product: item, quantity: -1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <LinearGradient
          colors={["#F98B1F", "#FF774C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <TouchableOpacity onPress={() => onDecreaseQuantity(item)}>
            <Icon name="minus" size={22} color="white" />
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <LinearGradient
          colors={["#F98B1F", "#FF774C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <TouchableOpacity onPress={() => onIncreaseQuantity(item)}>
            <Icon name="plus" size={22} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <HeaderSearch />
        <Image
          source={{ uri: "https://i.postimg.cc/15srdZg5/2-removebg-preview.png" }}
          style={styles.emptyImage}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderSearch />
      <SwipeListView
        data={cart}
        renderItem={renderItem}
        disableRightSwipe
        rightOpenValue={-75}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Payment", { cart: cart })}
        style={styles.checkoutButton}
      >
        <LinearGradient
          colors={["#F98B1F", "#FF774C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  gradient: {
    borderRadius: 11,
  },
  checkoutButton: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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

export default CartScreen;
