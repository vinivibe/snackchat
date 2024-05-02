import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeaderSearch from '../components/common/HeaderSearch';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const SuccessPaymentScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderSearch />
      <View style={styles.successContainer}>
        <Image source={{uri:'https://i.postimg.cc/DzVR7ZWL/Group-457.png'}} style={styles.successImage} />
        <Text style={styles.successText}>Your order has been successfully placed</Text>
        <Text style={styles.subTitle}>Sit and relax while your orders is being worked on . It’ll take 5min before you get it</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <LinearGradient
        colors={['#F98B1F', '#FF774C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Back to home</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  successText: {
    width: 252,
    height: 62,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 31.25,
    textAlign: 'center',
    color: '#3D3D3D',
  },

  subTitle:{
    width: 296,
    height: 46,
    fontSize: 15,
    fontWeight:'400',
    lineHeight: 22.85,
    color:'#3D3D3D',
    textAlign:'center'
  },

  backButton: {
    backgroundColor: '#E88B20',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    width: '80%',
    alignSelf: 'center'
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuccessPaymentScreen;
