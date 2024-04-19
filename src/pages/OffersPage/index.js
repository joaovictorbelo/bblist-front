import { ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Searchbar } from 'react-native-paper';

import AppHeader from "../../components/AppHeader";
import OfferCard from "../../components/OfferCard";

import style from './style'

export default function OffersPage() {
  const [location, setLocation] = useState({
    cidade: '',
    estado: '',
    regiao: ''
  });
  const [profPic, setProfPic] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('location').then(
      (value) => {
        setLocation(JSON.parse(value));
      }
    );
    AsyncStorage.getItem('profPic').then(
      (value) => {
        setProfPic(value);
      }
    );
  }, [])

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
          <Text style={style.subsection}>Principais ofertas na sua região</Text>
          <ScrollView
            horizontal
            style={{
              width: '110%',
              left: '-5%'
            }}
          >
            <OfferCard />
            <OfferCard />
          </ScrollView>
        </View>
        <View style={{width: '90%'}}>
          <Text style={style.subsection}>Veja Também</Text>
          <View style={{width: '100%', height: 80, backgroundColor: '#ADC4FF', marginBottom: 20, borderRadius: 15, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>Pesquisa de produtos já disponivel!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  }