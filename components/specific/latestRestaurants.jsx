import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const latestRestaurants = [
  {
    name: "Pizza Hut",
    image:
      "https://i.postimg.cc/T3CWZ5Fk/png-clipart-pizza-hut-logo-symbol-food-mall-promotions-food-logo-removebg-preview.png",
  },
  {
    name: "McDonalds",
    image:
      "https://i.postimg.cc/50FYY70G/png-clipart-mcdonalds-logo-hamburger-history-of-mcdonald-s-nyse-mcd-food-mcdonald-s-logo-text-orange.png",
  },
  {
    name: "BK",
    image:
      "https://i.postimg.cc/ry47C921/png-transparent-burger-logo-burger-king-hamburger-milkshake-fast-food-restaurant-yellow.png",
  },
  {
    name: "KFC",
    image:
      "https://i.postimg.cc/htQmfhdt/png-transparent-kfc-logo-illustration-hamburger-kfc-take-out-fast-food-fried-chicken-round-kfc-logo.png",
  },
  {
    name: "Starbuck",
    image: "https://i.postimg.cc/bYLk57Pp/15a10bcc2406f1b33749e95936920b6c.jpg",
  },
  {
    name: "Dominos Pizza",
    image:
      "https://i.postimg.cc/MHGMxGwx/png-transparent-domino-s-pizza-logo-domino-s-pizza-pizza-delivery-logo-pizza-domino-s-pizza-pizza-pi.png",
  },
];

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.2);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.cardContainer} key={index}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

const LatestRestaurantsCarousel = () => {
  const renderItem = ({ item, index }) => {
    return <CarouselCardItem item={item} index={index} />;
  };

  return (
    <View style={styles.containerLatest}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Latest restaurants</Text>
          <Text style={styles.headerSubtitle}>
            Choose who you already trust!
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Ver mais clicked")}>
          <Text style={styles.viewMoreText}>View more</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={latestRestaurants}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        activeSlideAlignment={"center"}
        firstItem={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLatest: {
    marginBottom: 22,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  viewMoreText: {
    fontSize: 14,
    color: "blue",
  },
  cardContainer: {
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: ITEM_WIDTH / 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LatestRestaurantsCarousel;
