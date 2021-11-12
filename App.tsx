import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';
export default function App() {
  return (

    <View style={estilo.container} >

      {/*========================inicio do box ============*/}
      <View style={estilo.box}>
        <Text style={estilo.pesquisar}>Procurar</Text>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/54/54447.png" }} style={estilo.imgicone} />
      </View>
      {/*===================fim do box ====================*/}

      {/*====================inicio da imagem *====================*/}

      <View style={estilo.img}>
        <Image source={{ uri: "https://wakke.co/wp-content/uploads/2018/08/escolaweb-capas-artigos-qual-a-real-importancia-do-marketing-educacional-para-minha-ie-1.jpg" }} style={estilo.imgedu} />
      </View>



      {/*=========================rolagem ====================*/}
      <ScrollView horizontal={false}>


        <View style={estilo.prof}>
          <Image source={{ uri: "https://st2.depositphotos.com/1017228/11660/i/600/depositphotos_116601598-stock-photo-full-length-portrait-of-man.jpg" }} style={estilo.foto} />
          <View>
            <Text>fulano de tal</Text>
            <Text>matematica</Text>
          </View>
          <View>
            <Text> 50R$ por h</Text>
          </View>
        </View>


        <View style={estilo.prof}>
          <Image source={{ uri: "https://cdn.w600.comps.canstockphoto.com.br/-pessoas-isolado-americano-pretas-banco-de-imagem_csp40184869.jpg" }} style={estilo.foto} />
          <View>
            <Text>fulano de tal</Text>
            <Text>matematica</Text>
          </View>
          <View>
            <Text> 50R$ por h</Text>
          </View>
        </View>

        <View style={estilo.prof}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW3dfTSSKzLIVcByUADw6A7XHz6XMXayW6A&usqp=CAU" }} style={estilo.foto} />
          <View>
            <Text>fulano de tal</Text>
            <Text>matematica</Text>
          </View>
          <View>
            <Text> 50R$ por h</Text>
          </View>
        </View>

        <View style={estilo.prof}>
          <Image source={{ uri: "https://static.vecteezy.com/ti/fotos-gratis/p1/2010315-homem-bonito-asiatico-com-bigode-sorrindo-sobre-fundo-branco-gr%C3%A1tis-foto.jpg" }} style={estilo.foto} />
          <View>
            <Text>fulano de tal</Text>
            <Text>matematica</Text>
          </View>
          <View>
            <Text> 50R$ por h</Text>
          </View>
        </View>


        <View style={estilo.prof}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuljGRMkNhnzsLplTALkcNP3h_zIyRQkYOA&usqp=CAU" }} style={estilo.foto} />
          <View>
            <Text >fulano de tal</Text>
            <Text>matematica</Text>
          </View>
          <View>
            <Text> 50R$ por h</Text>
          </View>
        </View>




      </ScrollView>
     {/* ================================================fim da rolagem *=================================*/}













    </View>

  );


}


