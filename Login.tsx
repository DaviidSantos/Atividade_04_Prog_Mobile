import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "./assets/Logo.svg";

const Login = () => {
  const [login, setLogin] = useState<string | null>();
  const [senha, setSenha] = useState<string | null>();
  const [resultado, setResultado] = useState<string | null>();

  const handleLogin = () => {
    if (login === "admin" && senha === "1234") {
      setResultado("Logado");
    } else {
      setResultado("Combinação de usuário e senha inválida");
    }
  };

  return (
    <>
      <Logo height={40} />

      <View style={styles.input_group}>
        <Text style={styles.input_text}>Login</Text>
        <TextInput style={styles.input} onChangeText={setLogin} />
      </View>

      <View style={styles.input_group}>
        <Text style={styles.input_text}>Senha</Text>
        <TextInput style={styles.input} onChangeText={setSenha} />
      </View>

      <TouchableOpacity style={styles.login_button} onPress={handleLogin}>
        <Text style={styles.login_text}>Logar</Text>
      </TouchableOpacity>

      <Text style={styles.input_text}>{resultado}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input_group: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    width: "100%",
  },

  input_text: {
    fontSize: 12,
    fontFamily: "sans-serif",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 8,
    borderRadius: 10,
    width: "100%",
  },

  login_button: {
    backgroundColor: "#3A01DF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  login_text: {
    color: "white",
    fontSize: 18,
  },
});

export default Login;
function alert(arg0: string) {
  throw new Error("Function not implemented.");
}
