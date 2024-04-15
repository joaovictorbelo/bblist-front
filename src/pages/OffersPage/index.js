import { Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Searchbar } from 'react-native-paper';

import AppHeader from "../../components/AppHeader";

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
      <View style={{width: '90%'}}>
        <Text style={{fontFamily: 'Montserrat-bold', fontSize: 40, color: '#07152A'}}>Ofertas</Text>
        <Text style={{fontFamily: 'Hind-bold', fontSize: 17, color: '#07152A'}}>
          Disponiveis para o mês de 
          <Text style={{color: "#407BDC"}}> {getMonth()}</Text>
        </Text>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            backgroundColor: 'rgba(165, 183, 223, 0.2)'
          }}
        />
      </View>
    </View>
  );
  }