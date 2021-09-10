import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image source={require("./assets/menor.png")}></Image>

            <Image source={require("./assets/lupa.png")}></Image>

            <Image source={require("./assets/compartilhar.png")}></Image>
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
    minHeight: 30,
    backgroundColor: '#4369B0',
    paddingTop: 30,
  } 
});
