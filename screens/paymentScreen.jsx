import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import HeaderSearch from "../components/common/HeaderSearch";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddress } from '../store/Slice/userSlice';

const PaymentScreen = ({ route }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("onArrival");
  const [selectedPaymentMethodd, setSelectedPaymentMethodd] = useState(null);
  const [cupon , setCupom] = useState('')
  const [couponCode, setCouponCode] = useState('');
  const [cuponApply, setApplyCupon] = useState(false)
  const [payOnArrival, setPayArrival] = useState(false)
  const [totalDiscount, setTotalDiscount] = useState("")
  const { cart } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const address = useSelector((state) => state.user.address)


  const handleProceedToPayment = () => {
    navigation.navigate('CredCard')
  };

  const handleApplyDiscount = () => {
    if(cuponApply){
      return alert("Cupom Aplicado")
    }
    handleDescont(couponCode);
  };

  const handleTotal = () => {
    return handleTotalCart() + 20 ;
  };

  const handleDescont = (cupomCode) => {
    const totalCart = handleTotalCart(); 
    if (totalCart >= 30) { 
      switch (cupomCode) {
        case 'WE10':
          setCupom(10);
          setApplyCupon(true)
          break;
        case 'Pizza30':
          if (totalCart >= 50) { 
            setCupom(30);
            setTotalDiscount(30)
            setApplyCupon(true)
          } else {
            alert('Este cupom requer um mínimo de $50 em compras');
          }
          break;
        default:
          alert('Cupom inválido ou expirado');
          setCupom(0);
          break;
      }
    } else {
      alert('O total do carrinho deve ser pelo menos $30 para aplicar cupons');
    }
  };

  
  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleTotalCart = () => {
    const total = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
    return total - cupon;
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderSearch type={"Payment"} />
      <View style={styles.deliveryMethodSection}>
        <Text style={styles.sectionTitle}>Address:</Text>
        <View>
          <Icon></Icon>
          <Text>{address.logradouro}</Text>  
        </View>
        <Text style={styles.summaryText}>{address.bairro}</Text>
        <Text style={styles.summaryText}>{address.localidade}</Text>
        <Text style={styles.summaryText}>{address.uf}</Text>
      </View>
      <View style={styles.paymentSection}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.paymentMethods}>
          {/* Icons for payment methods */}
          <TouchableOpacity style={[styles.containerImagePayment, selectedPaymentMethod === 'mastercard' ? styles.selectedPaymentMethod : null]} onPress={() => handleSelectPaymentMethod('mastercard')} >
            <Image
              source={{ uri: "https://i.postimg.cc/xdSjh6gG/mastercard.png" }}
              style={styles.paymentIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerImagePayment, selectedPaymentMethod === 'paypal' ? styles.selectedPaymentMethod : null]} onPress={() => handleSelectPaymentMethod('paypal')}>
            <Image
              source={{ uri: "https://i.postimg.cc/xCVXn0RZ/paypal.png" }}
              style={styles.paymentIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerImagePayment, selectedPaymentMethod === 'Stripe' ? styles.selectedPaymentMethod : null]} onPress={() => handleSelectPaymentMethod('Stripe')}>
            <Image
              source={{ uri: "https://i.postimg.cc/rFwK8Z1q/stripe.png" }}
              style={styles.paymentIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() =>{
             selectedPaymentMethod === "onArrival" ? 
             setSelectedPaymentMethod("ofArrival") : 
             setSelectedPaymentMethod("onArrival") 
            
            }}
        >
          <Icon
            name={
              selectedPaymentMethod === "onArrival"
                ? "radiobox-marked"
                : "radiobox-blank"
            }
            size={24}
            color="#000"
          />
          <Text style={styles.radioText}>Pay on arrival</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={handleApplyDiscount}>
            <TextInput placeholder="Cupom" style={styles.textInput} value={couponCode} onChangeText={setCouponCode}  />
              <Icon name={'ticket-confirmation'} size={22} color='#FE554A' />
            </TouchableOpacity>
      </View>
      <View style={styles.summarySection}>
        <View style={styles.containerInformationCost}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryAmount}>$20</Text>
        </View>
        <View style={styles.containerInformationCost}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryAmount}>${handleTotalCart()}</Text>
        </View>
        {cuponApply ? 
             <View style={styles.containerInformationCost}>
                <Text style={styles.summaryText}>Cupon  </Text>
                <Text style={styles.summaryAmount}>$-{cupon}</Text>
              </View>  :
              <View/>
      }
        <View style={styles.containerInformationCostTotal}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>${handleTotal()}</Text>
        </View>
      </View>
      <TouchableOpacity
         onPress={ () =>{
          selectedPaymentMethod === 'onArrival' ?
          navigation.navigate('SucessPayment') :
          handleProceedToPayment()
        }}
      >
        <LinearGradient
          colors={["#F98B1F", "#FF774C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.proceedButton}
        >
        <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FBFF",
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  deliveryMethodSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  selectedPaymentMethod: {
    borderColor: '#FFA500', // Laranja
    borderWidth: 2,
    borderRadius: 10
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deliveryAddress: {
    fontSize: 16,
    marginVertical: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginVertical: 10,
  },
  changeButton: {
    alignSelf: "flex-end",
  },
  changeButtonText: {
    color: "#007bff",
  },
  paymentSection: {
    padding: 20,
  },

  input: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    height: 50,
    backgroundColor: "white",
    borderColor: "#DFE2E5",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
  },

  paymentMethods: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  containerImagePayment: {
    width: 60,
    height: 58,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  containerInformationCostTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    width: "100%",
    paddingHorizontal: 22,
    marginVertical: 9,
  },

  paymentIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  radioContainer: {
    paddingLeft: 19,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 10,
  },
  radioText: {
    marginLeft: 10,
  },
  summarySection: {
    marginTop:50,
    justifyContent: "flex-start",
    alignItems: "baseline",
  },
  summaryText: {
    fontSize: 16,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  containerInformationCost: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 22,
    marginVertical: 9,
  },
  proceedButton: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  proceedButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  // Adicione mais estilos conforme necessário
});

export default PaymentScreen;
