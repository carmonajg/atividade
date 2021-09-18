import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  viewButtom: {
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:40,
    paddingVertical:40,
  },

  button: {
    backgroundColor:"#4369B0",
    //marginHorizontal:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    color:'white',
  },
  viewButtonText:{
    color:"#F5FFFF",
    fontSize:15,
  }
  });

  export const styleOneLinkHeader = StyleSheet.create({
    link:{
        color:"#4A4A4C",
    }
});