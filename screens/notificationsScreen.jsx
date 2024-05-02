import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HeaderSearch from '../components/common/HeaderSearch';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const notifications = [
  { id: '1', user: '30% discount on pizza', action: 'How about going for pizza today?', detail: 'exclusive to pizza hut', time: '5 Minutes Ago', image: 'https://i.postimg.cc/rsJ3LLW2/10565063-removebg-preview.png' },
  { id: '2', user: '10% discount on Mexican Day!', action: 'How about going for Tacos today?', detail: 'exclusive to buy $30', time: '5 Minutes Ago', image: 'https://i.postimg.cc/rsJ3LLW2/10565063-removebg-preview.png' },
  { id: '3', user: '5% discount on Waffle House', action: 'How about going for Waffle today?', detail: 'exclusive to 16h00', time: '5 Minutes Ago', image: 'https://i.postimg.cc/rsJ3LLW2/10565063-removebg-preview.png' },
  { id: '4', user: '15% discount on Mac', action: 'How about going for Hamburguer today?', detail: 'exclusive to Mac Donalds', time: '5 Minutes Ago', image: 'https://i.postimg.cc/rsJ3LLW2/10565063-removebg-preview.png' },

];

const NotificationItem = ({ item, onRemove }) => (
  <View style={styles.notificationContainer}>
    <LinearGradient
      colors={["#F98B0F", "#FF773C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.notificationCard}
    >
      <Image source={{uri:item.image}} style={styles.userImage} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.userAction}>{item.action}</Text>
        <Text style={styles.userDetail}>{item.detail}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={() => onRemove(item.id)}>
        <Icon name={'close-circle'} size={24} color={'white'} />
      </TouchableOpacity>
    </LinearGradient>
  </View>
);

const NotificationsScreen = () => {
    const [activeNotifications, setActiveNotifications] = useState(notifications);

    const handleRemoveNotification = (id) => {
        setActiveNotifications(currentNotifications =>
          currentNotifications.filter(notification => notification.id !== id),
        );
      };

    return(
        <View style={styles.screenContainer}>
        <HeaderSearch  type={'discount'}/>
        <Text style={styles.screenTitle}>Your notifications</Text>
        <FlatList
          data={activeNotifications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <NotificationItem item={item} onRemove={handleRemoveNotification} />}
        />
      </View>
    )
}

// ... (o restante do seu código e imports)

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF', 
      paddingTop: 0,
    },
    screenTitle: {
      fontSize: 20, 
      fontWeight: 'bold', 
      marginLeft: 20, 
      marginBottom: 20, 
    },
    notificationContainer: {
      paddingHorizontal: 20, 
      paddingVertical: 10, 
    },
    notificationCard: { 
      borderRadius: 15, 
      padding: 15, 
      flexDirection: 'row', 
      alignItems: 'center', 
      shadowColor: "#000000", 
      shadowOffset: {
        width: 0,
        height: 10, 
      },
      shadowOpacity: 0.25, 
      shadowRadius: 3.5, 
      elevation: 5, 
    },
    userImage: {
      width: 50, 
      height: 50, 
      borderRadius: 25, 
      marginRight: 10, 
    },
    notificationTextContainer: {
      flex: 1, 
    },
    userName: {
      fontWeight: 'bold', 
    },
    userAction: {
      
    },
    userDetail: {
      color: '#555555', 
      fontSize: 12, 
    },
    notificationTime: {
      color: 'white', 
      fontSize: 12, 
    },
    closeButton: {
      // Estilo para o botão de fechar
    },
    closeButtonText: {
      // Estilo para o texto do botão de fechar
    },
    paymentButton: { 
      borderRadius: 20, 
      padding: 15, 
      margin: 20, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    paymentButtonText: {
      color: '#FFFFFF', 
      fontWeight: 'bold', 
    },
    
  });


  export default NotificationsScreen;
  