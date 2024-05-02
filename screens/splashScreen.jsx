import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Icon.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Same as the backgroundColor in app.json
  },
  image: {
    width: 100, // Your image width
    height: 100, // Your image height
    resizeMode: 'contain'
  }
});
