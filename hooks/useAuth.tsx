import { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber; // Cleanup na desmontagem
  }, []);

  return user;
}
