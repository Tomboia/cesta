import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  SafeAreaView,
} from "react-native";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <SafeAreaView>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da Cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.logoFazenda} />
          <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  topo: { width: "100%", height: (578 / 768) * width },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    padding: 16,
    fontFamily: "Montserrat-Medium",
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "Montserrat-Semi-Bold",
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  logoFazenda: {
    width: 32,
    height: 32,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2A9F85",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 42,
    marginTop: 8,
  },
});
