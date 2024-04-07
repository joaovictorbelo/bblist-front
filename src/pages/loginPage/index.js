import { Text, View, Image } from 'react-native';
import { useState } from 'react';
import InputField from '../../components/InputField';
import ButtonSubmit from '../../components/ButtonSubmit';

import style from './style'

export default function LoginScreen() {
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
        />
        <InputField 
          value={pass}
          onChange={setPass}
          label="Senha"
          icon="eye"
          password
        />

        <ButtonSubmit
          label="Entrar"
          onClick={() => console.log('Pressed')}
        />
        <Text>Esqueci a senha</Text>
      </View>
      
      <Text>Ainda não é cadastrado? Registre-se</Text>
    </View>
  );
  }