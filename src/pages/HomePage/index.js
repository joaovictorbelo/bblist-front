import { ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import { Searchbar, Button } from 'react-native-paper';
import categs from '../../utils/mock/mockCategories';

import AppHeader from "../../components/AppHeader";
import OfferCard from "../../components/OfferCard";
import CategoryBubble from "../../components/CategoryBubble";

import style from './style'

const offers = require('../../utils/mock/mockOffers.json');

export default function HomePage({ route, navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const { location, profPic } = route.params;

  const getMonth = () => {
    const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']; 
    const d = new Date();
    return meses[d.getMonth()];
  }

  return (
    <View style={style.container}>
      <AppHeader elementList={['local', 'image']} userLoc={location} image={profPic}/>
      <ScrollView
        style={{width: '100%', marginTop: 30}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <View style={{width: '90%'}}>
          <Text style={style.title}>Ofertas</Text>
          <Text style={style.subtitle}>
            Disponiveis para o mês de 
            <Text style={{color: "#407BDC"}}> {getMonth()}</Text>
          </Text>
          <Searchbar
            placeholder="Buscar ofertas..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={style.search}
            inputStyle={{
              fontFamily: 'Hind',
              color: '#07152A'
            }}
          />
        </View>
        <View style={{width: '90%', marginBottom: 15}}>
          <View style={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={style.subsection}>
              Ofertas na sua região
            </Text>
            <Button
              labelStyle={style.links}
              mode="text"
              onPress={() => navigation.navigate('Offers')}
            >
              Ver todas
            </Button>
          </View>
          <ScrollView
            horizontal
            style={{
              width: '110%',
              left: '-5%'
            }}
          >
            {offers.Offers.map(
              (offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  onClick={() => navigation.navigate('OfferDetail', {offer: offer})}
                />
              )
            )}
          </ScrollView>
        </View>
        <View style={{width: '90%'}}>
          <Text style={{...style.subsection, marginBottom: 15}}>Veja Também</Text>
          <ScrollView
            horizontal
            alwaysBounceHorizontal={false}
            style={{
              width: '110%',
              marginBottom: 15
            }}
          >
            {categs.map(
              (categ) => (
                <CategoryBubble
                  key={categ.nome}
                  imagem={categ.imagem || ''}
                  nome={categ.nome}
                  onClick={() => console.log('teste')}
                />
              )
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
  }