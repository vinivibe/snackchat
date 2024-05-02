import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderSearch from "../components/common/HeaderSearch";
import { LinearGradient } from "expo-linear-gradient";
import ToppingsCarousel from "../components/specific/toppingItem";
import { useDispatch } from "react-redux";
import { addItem } from "../store/Slice/cartSlice";
import { useToast } from "react-native-toast-notifications";


const ProductDetailScreen = ({ route, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const toast = useToast();
  const { product } = route.params; 
  const dispatch = useDispatch();

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!product.id) {
      console.error(product); // Verifique se o ID está faltando
    } else {
      dispatch(addItem({ product, quantity }));
      toast.show("Product add to cart",{
        type:'success',
        placement:'bottom',
        duration: 3000,
        offset: 30,
        animationType: 'slide-in'
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderSearch type={"details"} />
      <View style={styles.containerImage}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>
      <LinearGradient
        colors={["#F98B1F", "#FF774C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.quantityContainer}
      >
        <TouchableOpacity onPress={() => handleQuantityChange("decrease")}>
          <Icon name="minus" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange("increase")}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingContaineer}>
            <Icon name="star" size={18} color="#FFD700" />
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>
          <View style={styles.ratingContaineer}>
            <Icon name="fire" size={18} color="red" />
            <Text style={styles.ratingText}>{product.burn}</Text>
          </View>
          <View style={styles.ratingContaineer}>
            <Icon name="clock" size={18} color="black" />
            <Text style={styles.ratingText}>{product.time}</Text>
          </View>
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Adicione outras informações do produto aqui */}
      </View>
      <ToppingsCarousel />
      <TouchableOpacity onPress={handleAddToCart}>
        <LinearGradient
          colors={["#F98B1F", "#FF774C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add to cart</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerImage: {
    backgroundColor: "white",
    width: 258,
    height: 224,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 39,
  },

  productImage: {
    width: 258,
    height: 224,
    resizeMode: "contain",

    alignItems: "center",
  },
  detailsContainer: {
    padding: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 16,
    alignSelf: "center",
  },
  ratingContaineer: {
    flexDirection: "row",
    marginBottom: 16,
    alignSelf: "center",
    marginHorizontal: 30,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 18,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 16,
    borderRadius: 30,
    width: 100,
    height: 50,
    marginTop: 35,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 18,
    color: "white",
  },
  addButton: {
    borderRadius: 20,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  // ... outros estilos que você pode precisar
});

export default ProductDetailScreen;
