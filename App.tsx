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

     




      {/*=========================rolagem ====================*/}
      <ScrollView horizontal={false}>
      <View style={estilo.img}>
        <Image source={{ uri: "https://wakke.co/wp-content/uploads/2018/08/escolaweb-capas-artigos-qual-a-real-importancia-do-marketing-educacional-para-minha-ie-1.jpg" }} style={estilo.imgedu} />
      </View>

        <View style={estilo.prof}>
          <Image source={{ uri: "https://st2.depositphotos.com/1017228/11660/i/600/depositphotos_116601598-stock-photo-full-length-portrait-of-man.jpg" }} style={estilo.foto} />
          <View>
            <Text style={estilo.texto1}>Rodrigo</Text>
            <Text style={estilo.texto2}>Matematica</Text>
          </View>
          <View>
            <Text style={estilo.texto3}> 50R$ por h</Text>
          </View>
        </View>


        <View style={estilo.prof}>
          <Image source={{ uri: "https://cdn.w600.comps.canstockphoto.com.br/-pessoas-isolado-americano-pretas-banco-de-imagem_csp40184869.jpg" }} style={estilo.foto} />
          <View>
            <Text style={estilo.texto4}>Henrique</Text>
            <Text style={estilo.texto5}>Geografia</Text>
          </View>
          <View >
          <Text style={estilo.texto6}> 50R$ por h</Text>
          </View>
        </View>

        <View style={estilo.prof}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW3dfTSSKzLIVcByUADw6A7XHz6XMXayW6A&usqp=CAU" }} style={estilo.foto} />
          <View>
            <Text style={estilo.texto7}>Fernanda</Text>
            <Text style={estilo.texto8}>Matematica</Text>
          </View>
          <View>
            <Text style={estilo.texto9}> 50R$ por h</Text>
          </View>
        </View>

        <View style={estilo.prof}>
          <Image source={{ uri: "https://static.vecteezy.com/ti/fotos-gratis/p1/2010315-homem-bonito-asiatico-com-bigode-sorrindo-sobre-fundo-branco-gr%C3%A1tis-foto.jpg" }} style={estilo.foto} />
          <View>
            <Text style={estilo.texto10}>Roger</Text>
            <Text style={estilo.texto11}>Ingles</Text>
          </View>
          <View>
            <Text style={estilo.texto12}> 30R$ por h</Text>
          </View>
        </View>


        <View style={estilo.prof}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuljGRMkNhnzsLplTALkcNP3h_zIyRQkYOA&usqp=CAU" }} style={estilo.foto} />
          <View>
            <Text style={estilo.texto1} >Marcia</Text>
            <Text style={estilo.texto2}>matematica</Text>
          </View>
          <View>
            <Text style={estilo.texto3}> 50R$ por h</Text>
          </View>
        </View>




      </ScrollView>
      {/* ================================================fim da rolagem *=================================*/}



      {/*===================================roda pé===========================*/}
      <View style={estilo.footer}>
        
        <Image source={{uri:"https://www.iconpacks.net/icons/2/free-home-icon-2502-thumb.png"}} style={estilo.fotofooter0}/>
        

        <Image source={{uri:"https://www.iconpacks.net/icons/1/free-compass-icon-881-thumb.png"}} style={estilo.fotofooter1}/>
        
        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}} style={estilo.fotofooter2}/>
        
        <Image source={{uri:"https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"}} style={estilo.fotofooter3}/>
      
      </View> 


      











    </View>



  );


}


