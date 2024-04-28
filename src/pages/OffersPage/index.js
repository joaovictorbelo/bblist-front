import { ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import { Searchbar, Button } from 'react-native-paper';

import AppHeader from "../../components/AppHeader";
import HorizontalCard from "../../components/HorizontalCard";
import FilterButton from "../../components/FilterButton";

import style from './style'

const offers = require('../../utils/mock/mockOffers.json');

export default function OffersPage({ route, navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const { filters, location } = route.params;

  return (
    <View style={style.container}>
      <AppHeader elementList={['return', 'local']} userLoc={location} goBackButton={navigation.goBack}/>
      <ScrollView
        style={{width: '100%', marginTop: 30}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <View style={style.searchArea}>
          <Text style={style.title}>Todas as ofertas</Text>
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
          <FilterButton />
        </View>
        <ScrollView style={{width: '90%', marginBottom: 15}}>
          {offers.Offers.map(
            (offer) => (
              <HorizontalCard
                key={offer.id}
                offer={offer}
                onClick={() => navigation.navigate('OfferDetail', {offer: offer})}
              />
            )
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
  }