import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image style={styles.botao} source={require("./assets/menor.png")}></Image>

        <View style={styles.fundopesquisa}>
            <Image style={styles.botaopesquisa} source={require("./assets/lupa.png")}></Image>

                <TextInput style={styles.textInput} placeholder="Pesquisa"
                placeholderTextColor="#F5FFFF">

                </TextInput>
        </View>

            <Image style={styles.botao} source={require("./assets/compartilhar.png")}></Image>
        </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    minHeight: 70,
    backgroundColor: '#4369B0',
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  botao: {
    height: 32,
    width: 32,
    marginRight: 10,
    marginLeft: 10,
  },

  botaopesquisa: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },

  fundopesquisa: {
    backgroundColor: '#2C4877',
    borderRadius: 28,
    flex: 1,
    marginHorizontal: 10,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',

  },

  textInput: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 5,
    color: "#F5FFFF",

  },

});
