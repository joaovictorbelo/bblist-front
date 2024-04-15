import { Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AppHeader from "../../components/AppHeader";

import style from './style'

export default function OffersPage({ navigation }) {
  const [location, setLocation] = useState({
    cidade: '',
    estado: '',
    regiao: ''
  })
  const [profPic, setProfPic] = useState('')

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
      <View>
        <Text>Ofertas</Text>
        <Text>Disponiveis para o mês de {getMonth()}</Text>
      </View>
    </View>
  );
  }