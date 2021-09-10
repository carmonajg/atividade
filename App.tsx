import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinksHeader = ()=>{
    return(
        <View style={Obj.container}>
              <Text style={Obj.menu}>Home</Text>
              <Text style={Obj.menu}>Post</Text>
              <Text style={Obj.menu}>Videos</Text>
              <Text style={Obj.menu}>Photos</Text>
              <Text style={Obj.menu}>Community</Text>
        </View>
    );
};

const Obj = StyleSheet.create({
    container: {
      //backgroundColor: "#add8e6",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderBottomColor: "#4A4A4C",
      borderBottomWidth: 1
    },
    menu: {
      color: "#4A4A4C"
    },
});

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>

            <Image style={styles.botao} source={require("./assets/menor.png")}></Image>

                  <View style={styles.fundopesquisa}>
                      <Image style={styles.botaopesquisa} source={require("./assets/lupa.png")}></Image>

                          <TextInput style={styles.textInput} placeholder="Pesquisa"placeholderTextColor="#F5FFFF"> </TextInput>
                  </View>

            <Image style={styles.botao} source={require("./assets/compartilhar.png")}></Image>

        </View>

            <LinksHeader></LinksHeader>

        <View style={styles.reacao}>

            <View style={styles.estilizarlike}>
                      <Image style={styles.like} source={require("./assets/like.png")}></Image>
                            <TextInput style={styles.letras}>Like</TextInput>
            </View>

            <View style={styles.estilizarcomente}>
                      <Image style={styles.comentario} source={require("./assets/comentario.png")}></Image>
                            <TextInput style={styles.letras}>Comment</TextInput>
            </View>

            <View style={styles.estilizarmandar}>
                      <Image style={styles.mandar} source={require("./assets/mandar.png")}></Image>
                            <TextInput style={styles.letras1}>Share</TextInput>
            </View>


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

  like: {
    height: 23,
    width: 23,
    marginLeft: 9,
  },

  comentario: {
    height: 23,
    width: 23,
  },

  mandar:{
    height: 23,
    width: 23,
    
  },

  letras: {
    color: "#4A4A4C",
    paddingHorizontal: 5
  },

  letras1: {
    color: "#4A4A4C",
    paddingHorizontal: 5,
    marginRight: 7
  },

  reacao: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 10
  },

  estilizarlike: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  estilizarcomente: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  estilizarmandar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },  
});
