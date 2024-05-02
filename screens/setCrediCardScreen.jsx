import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import FlipCard from "react-native-flip-card";
import HeaderSearch from "../components/common/HeaderSearch";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const CredCardScreen = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [fullName, setFullName] = useState("")
  const [cardDetails, setCardDetails] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigation = useNavigation();

  const focusOnExpDateOrCvv = () => {
    setIsFlipped(true);
  };

  const focusOnCardDetails = () => {
    setIsFlipped(false);
  };


  return (
    <View style={styles.container}>
      <HeaderSearch />
      <Text style={styles.title}>Payment</Text>
      <FlipCard
        flip={isFlipped}
        flipHorizontal={true}
        flipVertical={false}
        style={styles.cardContainer}
      >
        {/* Face Front */}
        <LinearGradient
        colors={['#F98B1F', '#FF774C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.cardFront}>
            <View style={styles.containerTitleCard}>
                <Text style={styles.textTitleCardFront}>Master Credit Card</Text>
                <Image source={{uri: 'https://i.postimg.cc/nrKkxFDV/Logo.png'}} style={styles.imageLogo} ></Image>
            </View>
            <View style={styles.containerCardFrontNameNumber}>
                <Text style={{color:'white'}}>{fullName}</Text>
                <Text style={{color:'white'}}>{cardDetails}</Text>
            </View>
        </View>
        </LinearGradient>
        {/* Face Back */}
        <LinearGradient
        colors={['#F98B1F', '#FF774C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.cardBack}>

            <View style={styles.cardBackTarja}/>
            <View style={{flexDirection: 'row', justifyContent:'space-between', width:'100%'}}>
            <Text style={{marginLeft: 23,color:'white'}}>CVV:{cvv}</Text>
            <Text style={{marginRight: 23,color:'white'}}>{expDate}</Text>
            </View>
            
        </View>
        </LinearGradient>
      </FlipCard>
      <View style={styles.containerInputs}>
        <TextInput
          placeholder="Enter full name"
          value={fullName}
          onChangeText={setFullName}
          onFocus={focusOnCardDetails}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Enter card number"
          value={cardDetails}
          onChangeText={setCardDetails}
          onFocus={focusOnCardDetails}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Exp Date"
          value={expDate}
          onChangeText={setExpDate}
          onFocus={focusOnExpDateOrCvv}
          style={styles.textInput}
        />
        <TextInput
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          onFocus={focusOnExpDateOrCvv}
          style={styles.textInput}
        />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('SucessPayment')} >
      <LinearGradient
        colors={['#F98B1F', '#FF774C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.checkoutButtonText} >Pay now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
     // A cor de fundo da tela
  },

  title: {
    marginTop: 48,
    fontSize:24,
    fontWeight: '700',
    lineHeight: 31.25
  },
  cardContainer: {
    height: 185,
    width: 335,
    alignSelf: "center",
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 35
  },
  cardFront: {
    width: "100%",
    height: 185, 
    borderRadius: 15,
   
    // Sombras e outras estilizações necessárias para a parte da frente
  },

  textTitleCardFront:{
    color: 'white'
  },

  containerTitleCard:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:24,
    marginBottom: 47,
  },

  imageLogo:{
    width:27,
    height:16
  },

  containerCardFrontNameNumber:{
    alignSelf: 'flex-start',
    marginLeft: 24
  },

  cardBack: {
    width: "100%",
    height: 185,
    borderRadius: 15,
    // Sombras e outras estilizações necessárias para a parte de trás
  },

  cardBackTarja:{
    width: '100%',
    height: 47,
    backgroundColor: 'black',
    marginBottom: 60,
    marginTop: 15
  },

  containerInputs:{
    alignSelf: 'center',
    width: '100%',
    borderRadius: 15,
    margin:10,
    marginBottom: 50
  },

  textInput: {
    height: 40,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: '#DFE2E5',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  // Aqui adicionamos o estilo para o botão
  gradient: {
    alignSelf: 'center',
    backgroundColor: "#F9881F", // Use aqui a cor que deseja para o botão
    padding: 15,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    marginBottom: 32
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  // Se precisar de mais estilos, você pode continuar aqui...
});

export default CredCardScreen;
