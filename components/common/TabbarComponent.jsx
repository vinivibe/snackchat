import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Certifique-se de importar o pacote correto dos ícones
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();


const HomeScreen = () => <View />;
const WishlistScreen = () => <View />;
const NotificationsScreen = () => <View />;
const CartScreen = () => <View />;
const SearchScreen = () => <View />; 

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "orange",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const TabBarComponent = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.items);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.container,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={30} color={focused ? "#FE554A" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="heart"
              size={30}
              color={focused ? "#FE554A" : "#AAACAE"}
              onPress={() => navigation.navigate("Favorite")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="magnify"
              size={30}
              color={focused ? "#FE554A" : "#AAACAE"}
              onPress={() => navigation.navigate("Search")}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bell"
              size={30}
              color={focused ? "#FE554A" : "#AAACAE"}
              onPress={() => navigation.navigate("Notification")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            cart.length > 0 ?
            <Icon
              name="cart-variant"
              size={30}
              color={"#FE554A"}
              onPress={() => navigation.navigate("Cart")}
            /> :
            <Icon
            name="cart"
            size={30}
            color={focused ? "#FE554A" : "#AAACAE"}
            onPress={() => navigation.navigate("Cart")}
          />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderTopEndRadius: 22,
    borderTopLeftRadius: 22,
  },
});

export default TabBarComponent;
