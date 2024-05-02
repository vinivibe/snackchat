import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux"; // Importação necessária do Provider
import StackNavigator from "./navigation/stackNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ToastProvider } from 'react-native-toast-notifications'
import store from './store/configureStore'; // View foi adicionado para usar em styles
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider successColor="#FE554A" textStyle={{ fontSize: 18 , color: 'white' }}>
      <GestureHandlerRootView style={{ flex: 1 }} >
      <NavigationContainer>
        <View style={styles.container}> 
          <StatusBar style="auto" />
          <StackNavigator />
        </View>
      </NavigationContainer>
      </GestureHandlerRootView>
      </ToastProvider> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
