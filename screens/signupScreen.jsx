import React ,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import GradientButton from "../components/specific/gradientButton";
import { useNavigation } from "@react-navigation/native";
import auth, { firestore } from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../store/Slice/userSlice';




const AccountCreationScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmePassword, setConfirmPassword] = useState('')
  const navigation = useNavigation();
  const dispatch = useDispatch();

 

  function handleCreateAccount () {
    if(password != confirmePassword){
      return alert("Confirmed password")
    }
    auth().createUserWithEmailAndPassword(email,password)
    .then((user) =>{
      console.log('User account Created', user.uid)

      dispatch(setUserProfile({
        displayName: name,
        email: user.user.email,
        uid: user.user.uid
      }));

    })
    .catch(error =>{
      switch(error){
        case  'auth/email-alredy-in-use':
          alert('That emailAddres is alredy in use!')
          break;
        case 'auth/invalid-email':
          alert('That email address is invalid!')
          break;
      }
      console.error(error);
    })
  }



  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.postimg.cc/7Pg0Kp6Y/Icon.png" }}
        height={50}
        width={70}
      ></Image>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create an account</Text>
        <Text style={styles.subHeaderText}>
          Welcome friend, enter your details so lets get started in ordering
          food.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email Address" style={styles.input} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Name" style={styles.input} onChangeText={(text) => setName(text)} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <GradientButton title={"Create Account"} onPress={handleCreateAccount} />

      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}
          onPress={() => navigation.navigate("Login")}
        >
          Login to my account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1C",
    textAlign: "left",
    lineHeight: 31.25,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#666",
    textAlign: "left",
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderColor: "#DFE2E5",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  loginButton: {
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#FE554A",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default AccountCreationScreen;
