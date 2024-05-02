import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useDispatch } from 'react-redux';
import { setSelectedFoodType } from '../../store/Slice/foodSlice';  // Verifique o caminho para garantir que está correto

const data = [
  {
    title: "Pizza",
    image: "https://i.postimg.cc/B6brs5d6/comida-rapida.png",
    type: "Pizza",  // Certifique-se que cada item tem uma propriedade 'type' correspondente
  },
  {
    title: "Burger",
    image: "https://i.postimg.cc/05Fsk35q/comida-rapida-1.png",
    type: "Hamburguer",
  },
  {
    title: "Sausage",
    image: "https://i.postimg.cc/N0p3WCCS/guacamole.png",
    type: "Sausage",
  },
  {
    title: "Sushi",
    image: "https://i.postimg.cc/nzW6LjJ1/sushi.png",
    type: "Japonesa",
  },
  {
    title: "Lamen",
    image: "https://i.postimg.cc/nLgyF9ZG/ramen.png",
    type: "Chinesa",
  },
  {
    title: "Gohan",
    image: "https://i.postimg.cc/wvNS7xj8/arroz.png",
    type: "Japonesa",
  },
  {
    title: "Mexican",
    image: "https://i.postimg.cc/4yTjtCYK/tacos.png",
    type: "Mexican",
  },
  {
    title: "Gourmet",
    image: "https://i.postimg.cc/nVvyxLWq/chefe-de-cozinha.png",
    type: "Gourmet",
  },
];

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.2;

const CarouselItem = ({ item, index, onSelect }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity key={index} onPress={() => onSelect(item.type)}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.itemLabel}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const FoodCarousel = () => {
  const dispatch = useDispatch();

  const handleSelectFood = (type) => {
    dispatch(setSelectedFoodType(type));
  };

  return (
    <View style={styles.containerCarousel}>
      <Carousel
        data={data}
        renderItem={({ item, index }) => <CarouselItem item={item} index={index} onSelect={handleSelectFood} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        activeSlideAlignment={"center"}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  itemLabel: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "700",
  },
  containerCarousel: {
    marginBottom: 32,
  },
});

export default FoodCarousel;

