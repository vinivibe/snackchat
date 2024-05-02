import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddress } from '../../store/Slice/userSlice';

const HeaderSearch = ({ type }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const addres = useSelector((state) => state.user.address)


  const fetchAddress = async () => {
    if (cep.length < 8) {
      alert("Please enter a valid CEP");
      return;
    }
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        throw new Error("CEP not found.");
      }
      setAddress(
        `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
      )
      dispatch(setUserAddress(
        {
          logradouro: data.logradouro,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf
        }
      ));
      setModalVisible(false)
    } catch (error) {
      alert("Failed to fetch address: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          type === "Home" ? console.log("menu") : navigation.goBack()
        }
      >
        {type === "Home" ? (
          <Icon name="menu" size={30} color="black" />
        ) : (
          <Icon name="arrow-left-circle" size={30} color="#FE554A" />
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.deliveryContainer}>
          <View style={styles.containerSearchLocation}>
            <Text style={styles.deliveryText}>Delivery to</Text>
            <Icon name="chevron-down" size={20} color="black" />
          </View>
          <Text style={styles.addressText}>{addres ? `${addres.logradouro}, ${addres.uf}` : null}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View style={styles.containerProfileImage}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/e4be/c0c7/03fb14f457f9f4376c2fd46ffc0b71c6?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUv-9D2MZLHm4mpcNeOZd1YeHVeJvT8EjUC8kS8~RpSDXfrXFc36HJ5SAMvPs1aY0rTUSX8tf5jVt10b16LTI2va0IyQqrDjSuQ5pV~8lxtXoYSDMbpfssxvmSqy8KX2h7IhsEekzSHfRYv3l-wUQIkFdF9DJ1MtBBGkBY-VitkbT7VPoFSusiTRrfP1gzPR7FnXVPr4pRu~HX2~YPUUXJvHtU1uIRxpUYB9C0SsDFFzERTqo2SFkow3Q31Jg1RhurXH3MoyDjeRjZfCIR1oqLUFmTNhUFp1wtHIK6BkF36w5AoKbL6YWWPqu~jsGnSC6tWDzH~DMrE-ZRs~-hU2kA__",
            }}
            style={styles.profileImage}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Enter CEP"
              value={cep}
              onChangeText={setCep}
              keyboardType="number-pad"
            />
            <TouchableOpacity style={styles.containerSearchCep}>
              <LinearGradient
                colors={["#F98B1F", "#FF774C"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.containerButton}
              >
                <TouchableOpacity>
                  <Text style={styles.buttonSearch} onPress={fetchAddress}>
                    Search
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 45,
  },
  containerSearchCep: {
    flexDirection: "row",
  },
  deliveryContainer: {
    alignItems: "center",
  },
  containerSearchLocation: {
    flexDirection: "row",
  },
  deliveryText: {
    fontSize: 12,
    color: "#888",
    marginRight: 5,
  },
  addressText: {
    width: 133,
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  containerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonSearch: {
    borderRadius: 22,
    margin: 10,
    color: "white",
  },

  containerButton: {
    borderRadius: 22,
    marginHorizontal: 10,
  },
});

export default HeaderSearch;
