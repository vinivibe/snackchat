import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import GradientButton from "../components/specific/gradientButton";

const SLIDER_WIDTH = 300; // Ajuste para o tamanho do seu dispositivo
const ITEM_WIDTH = 250; // Ajuste para o tamanho do seu dispositivo

const data = [
  {
    title: "Order from your favourite stores or vendors",
    imgSrc: require("../assets/onboardingOne.png"), // Substitua pelo caminho correto da sua imagem
  },
  {
    title: "Choose from a wide range of  delicious meals",
    imgSrc: require("../assets/onboardingTwo.png"), // Substitua pelo caminho correto da sua imagem
  },
  {
    title: "Enjoy instant delivery and payment",
    imgSrc: require("../assets/onboardingTree.png"), // Substitua pelo caminho correto da sua imagem
  },
  // Adicione mais itens conforme necessário
];

const renderItem = ({ item, index }) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.imgSrc} style={styles.image} />
    </View>
  );
};

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.postimg.cc/7Pg0Kp6Y/Icon.png" }}
        style={styles.imageLogo}
      />
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={data.length} // Quantidade de pontos é baseada no número de itens no carrossel
        activeDotIndex={activeIndex} // Índice ativo do ponto
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

      <GradientButton
        title={"Create an account"}
        onPress={() => navigation.navigate("Signup")}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Text>
      <Text
        style={styles.skipText}
        onPress={() => navigation.navigate("Login")}
      >
        Skip
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 60,
  },
  slide: {
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)', // Ou qualquer cor que você prefira
  },
  
  title: {
    width: 269,
    textAlign: "center",
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 68,
  },
  image: {
    width: 338, // Ajuste para o tamanho da sua imagem
    height: 255, // Ajuste para o tamanho da sua imagem
    resizeMode: "contain",
  },

  imageLogo: {
    marginTop: 23,
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 65,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  loginText: {
    color: "gray",
    marginBottom: 100,
    marginTop: 20,
  },
  skipText: {
    position: "absolute",
    right: 20,
    top: 20,
    color: "#FA5A1E",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default OnboardingScreen;
