import { Text, View, ScrollView, ImageBackground, Pressable } from 'react-native';
import { Avatar } from "react-native-paper";
import { useState, useEffect } from 'react'

import AppHeader from "../../components/AppHeader";
import ButtonSubmit from "../../components/ButtonSubmit";

import style from './style'

export default function OfferPage({ route, navigation }) {
  const { location, offer } = route.params;
  const [currProd, setCurrProd] = useState('')

  useEffect(() => {
    setCurrProd(offer.produtos[0].variant);
  }, [offer])

  return (
    <View style={style.container}>
      <AppHeader elementList={['return', 'local']} userLoc={location} goBackButton={() => navigation.goBack()}/>
      <View style={{borderRadius: 10, }}>
        <ImageBackground
          source={{uri: offer.produtos.find(e => e.variant === currProd)?.imagem}} 
          imageStyle={{ borderRadius: 10}}
          style={{
            width: 350,
            height: 220,
            padding: 10,
            marginTop: 30,
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: 10,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: "center"
            }}
          >
            <Avatar.Image size={25} source={{uri: offer.fabrica.img}} />
            <View
              style={{
                height: 20,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 10,
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 10
              }}
            >
              <Text> {offer.fabrica.nome}</Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: 80,
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {offer.produtos.map(product => (
              <Pressable
                key={product.variant}
                style={{
                  width: 35, 
                  height: 35,
                  backgroundColor: product.cor,
                  borderRadius: 50,
                  margin: 7,
                  borderWidth: 3,
                  borderColor: (product.variant === currProd) ? "#407BDC" : "transparent"
                }}
                onPress={() => setCurrProd(product.variant)}
              />
            ))}
          </View>
        </ImageBackground>
      </View>
      <View 
        style={{
          width: 350,
          height: 90,
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 10,
          padding: 5,
          paddingHorizontal: 7,
          marginTop: 10,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignContent: 'space-between'
        }}
      >
        <Text
          style={{
            fontFamily: 'Montserrat-bold',
            color: '#07152A',
            fontSize: 19,
            width: '70%'
          }}
        >
          {offer.titulo}
          {'\n'}
          <Text style={{
            fontFamily: 'Hind',
            color: '#07152A',
            fontSize: 15,
            width: '70%',
            lineHeight: 25,
            marginTop: 5
          }}
          >
            Oferta válida de 15/03 até 31/03
          </Text>
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#407BDC",
            width: '27%',
            height: 70,
            borderRadius: 20
          }}
        >
          <Text
            style={{
              fontFamily: 'Hind-bold',
              color: "#e4e4e4",
              fontSize: 24,
              height: 30
            }}
          >
            R$ {offer.produtos[0].valor}
          </Text>
          <Text
            style={{
              fontFamily: 'Hind-bold',
              color: "#e4e4e4",
              fontSize: 13,
            }}
          >
            Por peça
          </Text>
        </View>
      </View>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
        <View style={{
          width: '90%',
          backgroundColor: "#E4ECF9",
          borderRadius: 15,
          padding: 15
        }}>
            <Text style={{
              color: "#07152A",
              fontFamily: "Hind",
              fontSize: 16,
              lineHeight: 20
            }}>{offer.descricao}</Text>
        </View>
        <View 
          style={{
            width: '90%',
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center'
          }}
        >
          <View style={{ alignItems: "center"}}>
            <Text style={{fontFamily: "Hind-bold", color: "#407BDC", fontSize: 32, height: 35}}>{offer.minimo}</Text>
            <Text style={{fontFamily: "Montserrat", color: "#07152A", fontSize: 13}}>Pedido mínimo</Text>
          </View>
          <View style={{ alignItems: "center"}}>
            <Text style={{fontFamily: "Hind-bold", color: "#407BDC", fontSize: 32, height: 35}}>{offer.total}</Text>
            <Text style={{fontFamily: "Montserrat", color: "#07152A", fontSize: 13}}>Total necessario</Text>
          </View>
        </View>
        
        <ButtonSubmit
          label="Fazer pedido"
          onClick={() => {navigation.navigate('Order', {offer: offer})}}
          loading={false}
          stye={{}}
          grad={["#0CB18A", '#38D1AD']}
        />
      </ScrollView>
    </View>
  );
  }