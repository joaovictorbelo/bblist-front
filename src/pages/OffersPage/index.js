import { Text, View, Image } from 'react-native';
import { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import style from './style'

export default function HomeScreen({ navigation }) {

  return (
    <View style={style.container}>
      <Text style={style.text}>
        MainPage
      </Text>
    </View>
  );
  }