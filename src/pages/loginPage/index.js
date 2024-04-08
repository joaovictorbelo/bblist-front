import { Text, View, Image } from 'react-native';
import { useState } from 'react';
import InputField from '../../components/InputField';
import ButtonSubmit from '../../components/ButtonSubmit';
import { Button } from 'react-native-paper'

import style from './style'

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={style.container}>
      <Image style={style.logo} source={require('../../../assets/logoTypePink.png')} />
      
      <View style={style.loginForm}>
        <Text style={style.text}>
          <Text style={{fontFamily: 'Montserrat-bold'}}> Ola Lojista </Text>
          {'\n'}
          Entre com email cadastrado!
        </Text>

        <InputField 
          value={text}
          onChange={setText}
          label="Email"
          icon="email"
          error={false}
          hText="Email não cadastrado"
        />
        <InputField 
          value={pass}
          onChange={setPass}
          label="Senha"
          icon="eye"
          password
          error={false}
          hText="Senha incorreta"
        />

        <ButtonSubmit
          label="Entrar"
          onClick={() => console.log('Pressed')}
        />
        <Button labelStyle={style.links} mode="text" onPress={() => console.log('Pressed')}>
          Esqueci a senha
        </Button>
      </View>
      
      <Text style={{
        fontFamily: 'Montserrat',
      }}>Ainda não é cadastrado? {' '}
        <Button labelStyle={style.links} mode="text" onPress={() => navigation.navigate('Signin')}>
           Crie sua conta
        </Button>
      </Text>
    </View>
  );
  }