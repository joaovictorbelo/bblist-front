import { Text, View } from 'react-native';
import { useState } from 'react';
import InputField from '../../components/InputField';
import ButtonSubmit from '../../components/ButtonSubmit';
import AppHeader from '../../components/AppHeader';
import { Button } from 'react-native-paper'

import style from './style'

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={style.container}>
      <AppHeader />
      
      <View style={style.loginForm}>
        <Text style={style.text}>
          <Text style={{fontFamily: 'Montserrat-bold'}}> Primeiro acesso? </Text>
          {'\n'}
          Registre-se e tenha acesso a ofertas mensais exclusivas!
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
        <Button labelStyle={style.links} mode="text" onPress={() => console.log('Pressed')}>
          Esqueci a senha
        </Button>
      </View>
      
      <Text style={{
        fontFamily: 'Montserrat',
      }}>Ainda não é cadastrado? {' '}
        <Button labelStyle={style.links} mode="text" onPress={() => console.log('Pressed')}>
           Crie sua conta
        </Button>
      </Text>
    </View>
  );
  }