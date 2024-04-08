import { Text, View, Image } from 'react-native';
import { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import style from './style'

export default function HomeScreen({ navigation }) {
  const change = () => navigation.navigate('Login')

  useEffect(()=>{
    //setInterval(change, 3000)
  }, [])

  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#FFB7B8', '#4F7BC5']}
        style={style.background}
      />
      <Image style={style.logo} source={require('../../../assets/logoType.png')} />
      <Text style={style.text} onPress={change}>
        Ofertas
        <Text style={{fontFamily: 'Montserrat-bold'}}> exclusivas </Text>
        todo mês
      </Text>
    </View>
  );
  }