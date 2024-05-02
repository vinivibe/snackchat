import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native"
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';


const ProfileScreen = () => {
  const userProfile = useSelector(state => state.user.profile );
  console.log('******************', userProfile.user)
  const navigation = useNavigation();


  const handleLogout = () => {
    auth().signOut().then(() => console.log('Logout success'));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
      >
        <Icon name="close" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.userInfoSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/e4be/c0c7/03fb14f457f9f4376c2fd46ffc0b71c6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUv-9D2MZLHm4mpcNeOZd1YeHVeJvT8EjUC8kS8~RpSDXfrXFc36HJ5SAMvPs1aY0rTUSX8tf5jVt10b16LTI2va0IyQqrDjSuQ5pV~8lxtXoYSDMbpfssxvmSqy8KX2h7IhsEekzSHfRYv3l-wUQIkFdF9DJ1MtBBGkBY-VitkbT7VPoFSusiTRrfP1gzPR7FnXVPr4pRu~HX2~YPUUXJvHtU1uIRxpUYB9C0SsDFFzERTqo2SFkow3Q31Jg1RhurXH3MoyDjeRjZfCIR1oqLUFmTNhUFp1wtHIK6BkF36w5AoKbL6YWWPqu~jsGnSC6tWDzH~DMrE-ZRs~-hU2kA__' }} // Substitua pelo caminho correto para a imagem do usuário
          style={styles.avatar}
        />
        </TouchableOpacity>
        <Text style={styles.name}>{ userProfile ? userProfile.displayName : 'Marcus Vinicios'}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <ScrollView>
        <View style={styles.menuWrapper}>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="account-outline" size={25} color="#666" />
            <Text style={styles.menuItemText}>My profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="credit-card-outline" size={25} color="#666" />
            <Text style={styles.menuItemText}>Payment method</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="cog-outline" size={25} color="#666" />
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="help-circle-outline" size={25} color="#666" />
            <Text style={styles.menuItemText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="shield-outline" size={25} color="#666" />
            <Text style={styles.menuItemText}>Privacy policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeButton: {
    marginTop: 20,
    marginLeft: 16,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  email: {
    color: '#666',
    fontSize: 16,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#666',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen;
