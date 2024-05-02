import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/loginScreen";
import Signup from "../screens/signupScreen";
import HomePage from "../screens/homeScreen";
import OnboardingScreen from "../screens/onboardingScreen"; // Substitua pelo caminho correto para a sua tela de onboarding

import { useAuth } from "../hooks/useAuth";
import ProductDetailScreen from "../screens/productDetails";
import CartScreen from "../screens/cartScreen";
import ProfileScreen from "../screens/profileScreen";
import PaymentScreen from "../screens/paymentScreen";
import CredCardScreen from "../screens/setCrediCardScreen";
import SuccessPaymentScreen from "../screens/succesPayment";
import FavoriteScreen from "../screens/favoritesScreen";
import NotificationsScreen from "../screens/notificationsScreen";
import SearchScreen from "../screens/searchScreen";
import RestaurantScreen from "../screens/restaurantScreen";


const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="Signup"
      component={Signup}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

const AppNavigator = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen
      name="Home"
      component={HomePage}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="ProductDetails"
      component={ProductDetailScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Cart"
      component={CartScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Payment"
      component={PaymentScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="CredCard"
      component={CredCardScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="SucessPayment"
      component={SuccessPaymentScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Notification"
      component={NotificationsScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Restaurants"
      component={RestaurantScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

const RootNavigator = () => {
  const user = useAuth();
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
