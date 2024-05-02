import React, {useState} from "react";
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
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../store/Slice/userSlice';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

  const navigation = useNavigation();


  const handleLogin = () => {
    auth().signInWithEmailAndPassword(email,password)
    .then((user) =>{
      dispatch(setUserProfile({
        displayName: 'Marcus Vinicios',
        email: user.user.email,
        uid: user.user.uid
      }));
      navigation.navigate('Home')
    })
    .catch((error) => alert(error))
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.postimg.cc/7Pg0Kp6Y/Icon.png" }}
        height={50}
        width={70}
      ></Image>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login to your account</Text>
        <Text style={styles.subHeaderText}>
          Good to see you again, enter your details below to continue ordering.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email Address" style={styles.input} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />
      </View>

      <GradientButton
        title={"Login Account"}
        onPress={() => handleLogin()}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}
          onPress={() => navigation.navigate("Signup")}
        >
          Create my account
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
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
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
    fontSize: 16,
  },
});

export default Login;
