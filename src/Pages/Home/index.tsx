import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput , TouchableOpacity} from 'react-native';
import {styleOneLinkHeader, styles } from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from './types';
import 'react-native-gesture-handler';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};

const LinksHeader = (props:any)=>{
    return(
        <View style={styles.container}>
              <Text>Home</Text>
              <Text>Post</Text>
              <Text>Videos</Text>
              <Text>Photos</Text>
              <Text>Community</Text>
        </View>
    );
};

type HomePros = NativeStackNavigationProp<StackNavigatorParamList,'Home'>;


const Home = () => {
    const navigation = useNavigation<HomePros>();
    function irParaTelaLogin(){
        // console.log("oi");
        navigation.navigate('Login');
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

      <View style={styles.viewButtom}>
                <TouchableOpacity style={styles.button} onPress={irParaTelaLogin}>
                    <Text style={styles.viewButtonText}> Ir para outra tela</Text>
                </TouchableOpacity>
                    
            </View>
            
    </View>
  );
}
}
export default Home;