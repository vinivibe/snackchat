import React,{ useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/Slice/favoritesSlice";
import { useToast } from "react-native-toast-notifications";
import restaurants from '../../constants/data'; 
import DATA from "../../constants/restaurants";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.63);

const CarouselCardItem = ({ item, index }) => {
  const [isFavorite, setFavorite] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleAddToFavorites = (product) => {
    dispatch(addFavorite(product));
    setFavorite(true);
    toast.show("Product added to favorites", {
      type: 'success',
      placement: 'bottom',
      duration: 3000,
      offset: 30,
      animationType: 'slide-in'
    });
  };

  const handleRemoveFromFavorites = (product) => {
    dispatch(removeFavorite(product.id));
    setFavorite(false);
    toast.show("Product removed from favorites", {
      type: 'warning',
      placement: 'bottom',
      duration: 3000,
      offset: 30,
      animationType: 'slide-in'
    });
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { product: item })}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={18} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
          <TouchableOpacity onPress={() => isFavorite ? handleRemoveFromFavorites(item) : handleAddToFavorites(item)} style={styles.likeButton}>
            <Icon name={isFavorite ? "cards-heart" : "cards-heart-outline"} size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RestaurantCarousel = () => {
  const navigation = useNavigation();
  const selectedFoodType = useSelector(state => state.food.selectedFoodType);
  // Filtrar somente se selectedFoodType não é uma string vazia
  const filteredRestaurants = selectedFoodType ? restaurants.filter(r => r.type === selectedFoodType) : restaurants;

  const renderItem = ({ item, index }) => {
    return <CarouselCardItem item={item} index={index} />;
  };

  return (
    <View style={styles.containerSection}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Popular Restaurants</Text>
        <TouchableOpacity onPress={ () => navigation.navigate('Restaurants')}>
        <Text style={styles.titleButtonViewAll}>View all({DATA.length})</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={filteredRestaurants}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCarrousel: {
    height: 260,
  },

  titleButtonViewAll:{
    color: "#FE554A"
  },

  containerSection: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },

  titleContainer: {
    width: 381,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20.83,
    color: "#3D3D3D",
    marginLeft: 21,
  },

  carouselContainer: {
    marginTop: 30,
  },

  cardContainer: {
    height: 300,
    backgroundColor: "white",
    borderRadius: 32,
    alignContent: "center",

    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    height: 150,
    width: ITEM_WIDTH,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "#3D3D3D",
    fontWeight: "500",
    lineHeight: 18.28,
    padding: 10,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
  },
  likeButton: {
    marginLeft: "auto",
  },

  subTitle: {
    color: "#FE554A",
    textDecorationLine: "underline",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21.32,
  },
});

export default RestaurantCarousel;
