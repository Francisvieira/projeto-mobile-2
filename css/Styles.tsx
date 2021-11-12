import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1

    },
    box: {
        flexDirection:"row",
       
        alignItems:"center",
        alignContent:"center",
        borderColor:'black',
        borderWidth:1
        
    },

    icone: {},

    imgicone: {
        height:50,
        width:50,
        position:"absolute",
        right:5,
        top:50
    },
    pesquisar:{
        padding:10,
        backgroundColor:'lightgrey',
        paddingTop:20,
        paddingBottom:20,
        width: '80%',
        marginLeft: 10,
        marginRight: 30,
        marginTop: 50,
        borderRadius: 60,
    },


    //imagem abaixo//
    img:{
        paddingTop:10,
        paddingLeft:10
    },
    imgedu:{
        
        height:200,
        width:350

    },
    // barra de rolgem //
  
    foto:{
        height:50,
        width:50
    },
    prof:{
        
    }


    

    
})