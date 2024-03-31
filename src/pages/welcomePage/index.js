import { Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import style from './style'

export default function HomeScreen({ navigation }) {
  const change = () => {() => navigation.navigate('Details')}

  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#FFB7B8', '#4F7BC5']}
        style={style.background}
      />
      <Image style={style.logo} source={require('../../../assets/logoType.png')} />
      <Text style={style.text}>
        Ofertas
        <Text style={{fontWeight: 'bold'}}> exclusivas </Text>
        todo mês
      </Text>
    </View>
  );
  }