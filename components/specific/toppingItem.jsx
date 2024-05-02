import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import toppings from "../../constants/toppingsData";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/Slice/cartSlice";
const ToppingItem = ({ topping, onPress }) => {
const dispatch = useDispatch()

const addToCart = (product,quantity) =>{
  dispatch(addItem({ product, quantity }));
  alert(`Add topping ${product.name} Additional charge $${product.price}` )
}
let toppingSelected = null
useEffect(()=>{
  toppingSelected = false
},[])

const handleStyleSelected = (toppingSelected) => {
  if(toppingSelected){
   return styles.toppingSelected
  }
  return styles.toppingItem
}


  return (
    <TouchableOpacity
    style={handleStyleSelected(toppingSelected)}
      onPress={() => addToCart(topping,1)}
    >
      <Image source={{ uri: topping.image }} style={styles.toppingImage} />
      <Text style={styles.toppingName}>{topping.name}</Text>
    </TouchableOpacity>
  );
};

const ToppingsCarousel = () => {
  const [selectedToppingss, setSelectedToppings] = useState(toppings);

  const handleTopping = (index) => {
    
    const newToppings = selectedToppingss.map((topping, i) => {
      if (i === index) {
        return { ...topping, selected: !topping.selected };
      }
      return topping;
    });

    setSelectedToppings(newToppings);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toppings for you</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {selectedToppingss.map((topping, index) => (
          <ToppingItem
            key={index}
            topping={topping}
            onPress={() => handleTopping(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 19,
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
  },
  toppingItem: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedTopping: {
    borderColor: "orange",
  },
  toppingImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  toppingName: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18.28,
  },
});

export default ToppingsCarousel;
