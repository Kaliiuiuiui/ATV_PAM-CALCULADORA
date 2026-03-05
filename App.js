import React, { useState } from "react";
import { StyleSheet, Text, View, Button, textAlign, TextInput, ImageBackground, TouchableOpacity, } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
    } else {
      setResultado(n1 + n2);
    }
  
};

  return (
    <ImageBackground 
    source={require("./assets/fundo_onePiece.png")}
    style={styles.background}
    resizeMode="cover">

    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Soma </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao} titulo="somar" onPress={somar}>
        Somar
        </Text>
      </TouchableOpacity>


      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  background: {
    flex: 1,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },

  input: {
    width: "80%",
    borderEndWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#E8D0F5",
    color: "#53158C",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: "center",
    shadowRadius: 120,
    shadowColor: "#8453AD",
  },
  botao: {
    borderWidth: 1,
    borderColor: "#9662B5",
    width: "40%",
    paddingVertical: 9,
    alignItems: "center",
    backgroundColor: "#53158C",
    borderRadius: 12,
    shadowRadius: 20,
    shadowColor: "#8453AD",
    },
    textBotao: {
      color: "#ffffff",
    },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#53158C",
  },
});