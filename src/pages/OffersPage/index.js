import { ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import {  Modal, Portal, Searchbar } from 'react-native-paper';

import AppHeader from "../../components/AppHeader";
import HorizontalCard from "../../components/HorizontalCard";
import FilterButton from "../../components/FilterButton";
import FilterChip from "../../components/FilterChip";

import style from './style'

const offers = require('../../utils/mock/mockOffers.json');
const today = new Date();

export default function OffersPage({ route, navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState([
    {
      type: 'date',
      value: new Date(today.getFullYear(), today.getMonth()+1, 0).toLocaleDateString('pt-br', {month:"short", day:"numeric"})
    }
  ])

  const { propFilters, location } = route.params;

  useEffect(() => {
    setFilters(filters.concat(propFilters));
  }, [propFilters])

  const removeFilter = (value) => {
    const newFilters = filters.filter((e) => e.value != value);
    setFilters(newFilters);
  }

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={style.container}>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={style.modal}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
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
          <FilterButton onPress={showModal} selected={filters.length != 0}/>
          <View style={style.chips}>
            {filters.map(
              (filter) => (
                <FilterChip key={filter.value} filter={filter} close={removeFilter}/>
            ))}
          </View>
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