import { Text, View, ScrollView, Image } from 'react-native';
import { Avatar, TextInput, RadioButton, Button, Divider } from "react-native-paper";
import { useState, useEffect } from 'react'

import AppHeader from "../../components/AppHeader";
import ButtonSubmit from "../../components/ButtonSubmit";

import style from './style'

export default function OrderPage({ route, navigation }) {
  const { location, offer } = route.params;
  const [quants, setQuants] = useState({});
  const [total, setTotal] = useState(0);
  const [frete, setFrete] = useState(0);
  const [checked, setChecked] = useState('CIF');

  useEffect(() => {
    const qnt = {}
    offer.produtos.map((product) => {
      qnt[product.variant] = 0;
    })
    setQuants(qnt)
  }, [offer])

  const calcTotal = () => {
    setTotal(offer.produtos.reduce((a,p) => a + p.valor*quants[p.variant], 0))
    setFrete(offer.frete*total)
    console.log(offer.frete)
  }

  return (
    <View style={style.container}>
      <AppHeader elementList={['return', 'local']} userLoc={location} goBackButton={() => navigation.goBack()}/>
      <View
        style={{
          width: '90%',
          padding: 7,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          marginVertical: 7,
          marginTop: 30
        }}
      >
        <Image
          source={{uri: offer.produtos[0].imagem}} 
          style={{
            borderRadius: 10,
            height: 105,
            width: '40%',
          }}
        />
        <View 
          style={{
            borderRadius: 10,
            width: '60%',
            paddingHorizontal: 7,
            paddingHorizontal: 20,
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'flex-start'
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat-bold',
              color: '#07152A',
              fontSize: 17,
              width: '100%',
              marginBottom: 15
            }}
          >
            {offer.titulo}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: "center"
            }}
          >
            <Avatar.Image size={25} source={{uri: offer.fabrica.img}} />
            <Text> {offer.fabrica.nome}</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
        <View style={{backgroundColor: "#E4ECF9", width: '90%', alignItems:'center', padding: 10, borderRadius: 13}}>
          <Text style={{fontFamily: 'Montserrat', color: '#07152A', fontSize: 16, marginBottom: 5}}>Quantidades</Text>
          <View style={{backgroundColor: "white", width: '100%', borderRadius: 10}}>
            {offer.produtos.map((product) => (
              <View key={product.variant} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 35, 
                      height: 35,
                      backgroundColor: product.cor,
                      borderRadius: 50,
                      margin: 7,
                    }}
                  />
                  <Text style={{fontFamily: 'Hind', color: '#07152A', fontSize: 16}}>{product.variant}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontFamily: 'Hind', color: '#595959', fontSize: 14}}>R$ {product.valor}</Text>
                  <TextInput
                    mode='outlined'
                    value={quants[product.variant]}
                    keyboardType='number-pad'
                    onChangeText={val => {
                      var newQuants = quants
                      newQuants[product.variant] = val
                      setQuants(newQuants)
                      calcTotal()
                    }}
                    style={{
                      height:30,
                      width:50,
                      marginHorizontal: 10,
                      borderRadius: 9,
                      backgroundColor: '#E4ECF9',
                      justifyContent:'center'
                    }}
                    outlineColor='transparent'
                    activeOutlineColor='#407BDC'
                    textColor='#595959'
                    placeholder='0'
                  />
                </View>
                <Divider style={{width: '100%'}}/>
              </View>
            ))}
          </View>
        </View>
        <View style={{backgroundColor: "#E4ECF9", width: '90%', alignItems:'center', padding: 10, borderRadius: 13, marginTop: 10}}>
          <Text style={{fontFamily: 'Montserrat', color: '#07152A', fontSize: 16, marginBottom: 5}}>Frete</Text>
          <View style={{backgroundColor: "white", width: '100%', borderRadius: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 50}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="CIF"
                  status={ checked === 'CIF' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('CIF')}
                  color='#407BDC'
                />
                <Text style={{fontFamily: 'Hind', color: '#07152A', fontSize: 16}}>CIF</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20}}>
                <Text style={{fontFamily: 'Hind', color: '#595959', fontSize: 16}}>5% do produto</Text>
              </View>
            </View>
            <Divider />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 50}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="FOB"
                  status={ checked === 'FOB' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('FOB')}
                  color='#407BDC'
                />
                <Text style={{fontFamily: 'Hind', color: '#07152A', fontSize: 16}}>FOB</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10}}>
                <Button
                  mode="contained"
                  style={{fontFamily: 'Hind', color: '#595959', fontSize: 10, height: 30,}}
                  labelStyle={{ fontSize: 14, height: 30, marginVertical: 3 }}
                  buttonColor='#407BDC'
                  disabled={checked !== 'FOB'}
                >
                  Transportadora
                </Button>
              </View>
            </View>
          </View>
        </View>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginVertical: 5}}>
            <Text style={{fontFamily: 'Montserrat', fontSize: 16, color: '#07152A'}}>Total Produtos</Text>
            <Text style={{fontFamily: 'Hind-bold', fontSize: 22, color: '#979797'}}>R$ {parseFloat(total)}</Text>
          </View>
          <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginVertical: 5}}>
            <Text style={{fontFamily: 'Montserrat', fontSize: 14, color: '#07152A'}}>Valor CIF</Text>
            <Text style={{fontFamily: 'Hind-bold', fontSize: 20, color: '#979797'}}>R$ {frete}</Text>
          </View>
          <Divider />
          <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginVertical: 5}}>
            <Text style={{fontFamily: 'Montserrat', fontSize: 18, color: '#07152A'}}>Valor Total</Text>
            <Text style={{fontFamily: 'Hind-bold', fontSize: 24, color: '#407BDC'}}>R$ {frete+total}</Text>
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