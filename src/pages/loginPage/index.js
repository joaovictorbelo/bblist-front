import { Text, View, Image } from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import InputField from "../../components/InputField";
import ButtonSubmit from "../../components/ButtonSubmit";
import { Button } from "react-native-paper";

import style from "./style";

const users = require('../../utils/mock/mockStores.json');

export default function LoginScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const [mailError, setMailError] = useState(false)
  const [passError, setPassError] = useState(false)

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setMailError(false);
    setPassError(false);
    const userList = users.Users;
    const user = userList.filter(user => user.email === mail)[0];

    if (!user){
      setMailError(true);
    } else if (user.pass !== pass){
      setPassError(true);
    } else {
      navigation.navigate('Offers');
      const UserLoc = {'estado': user.state, 'cidade': user.city, 'regiao': user.reg}
      AsyncStorage.setItem('location', JSON.stringify(UserLoc));
      AsyncStorage.setItem('profPic', user.img);
    }
    
    setLoading(false);
  };

  return (
    <View style={style.container}>
      <Image
        style={style.logo}
        source={require("../../../assets/logoTypePink.png")}
      />

      <View style={style.loginForm}>
        <Text style={style.text}>
          <Text style={{ fontFamily: "Montserrat-bold" }}> Ola Lojista </Text>
          {"\n"}
          Entre com email cadastrado!
        </Text>

        <InputField
          value={mail}
          onChange={setMail}
          label="Email"
          icon="email"
          error={mailError}
          hText="Email não cadastrado"
        />
        <InputField
          value={pass}
          onChange={setPass}
          label="Senha"
          icon={visible ? 'eye-off' : 'eye'}
          iconAction={() => {setVisible(!visible)}}
          password={!visible}
          error={passError}
          hText="Senha incorreta"
        />

        <ButtonSubmit
          label="Entrar"
          onClick={handleLogin}
          loading={loading}
          disabled={!(mail && pass)}
        />

        <Button
          labelStyle={style.links}
          mode="text"
          onPress={() => console.log("Pressed")}
        >
          Esqueci a senha
        </Button>
      </View>

      <View style={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Ainda não é cadastrado?{" "}
        </Text>
        <Button
          labelStyle={style.links}
          mode="text"
          onPress={() => navigation.navigate("Signin")}
        >
          Crie sua conta
        </Button>
      </View>
    </View>
  );
}
