import { Text, View, ScrollView } from "react-native";
import { useState, useMemo, useEffect } from "react";
import { Button } from "react-native-paper";

import InputField from "../../components/InputField";
import ButtonSubmit from "../../components/ButtonSubmit";
import AppHeader from "../../components/AppHeader";
import cities from '../../utils/cities'

import { Autocomplete } from "@telenko/react-native-paper-autocomplete";

import style from "./style";
export default function SigninScreen({ navigation }) {
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [passError, setPassError] = useState(false);
  
  const [passVis, setPassVis] = useState("");
  const [passConfVis, setPassConfVis] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    contact: "",
    tel: "",
    insc: "",
    cnpj: "",
    cep: "",
    address: "",
    reg: "",
  });
  const [options, setStates] = useState(cities.map(est => ({label: est.nome, value: est.sigla})));
  const [cityList, setCityList] = useState([]);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const estado = cities.filter(est => (est.sigla === state))[0]
    if (estado){
      setCityList(estado['cidades']?.map(cidade => ({label: cidade, value: cidade})))
      setUserData({...userData, reg: estado.regiao})
    }
  }, [state]);

  return (
    <View style={style.container}>
      <AppHeader goBackButton={navigation.goBack} elementList={['return', 'logo']}/>

      <Text style={style.text}>
        <Text style={{ fontFamily: "Montserrat-bold" }}>
          {" "}
          Primeiro acesso?{" "}
        </Text>
        {"\n"}
        Registre-se e tenha acesso a ofertas mensais exclusivas!
      </Text>

      <ScrollView
        style={style.loginForm}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      >
        <InputField
          value={userData.email}
          keyboard='email-address'
          onChange={(value) => setUserData({ ...userData, email: value })}
          label="Email"
          icon="email"
        />
        <InputField
          value={pass}
          keyboard='visible-password'
          onChange={(e) => {
            setPass(e);
            setPassError(/^(?=.*[A-Za-z].*)(?=.*[0-9].*)[A-Za-z0-9]{8,}$/.test(e))
          }}
          label="Senha"
          icon={passVis ? 'eye-off' : 'eye'}
          iconAction={() => {setPassVis(!passVis)}}
          password={!passVis}
          error={passError}
          info={true}
          hText={"*Sua senha deve conter no mínimo 8 caracteres com pelo menos uma letra e um número"}
        />
        <InputField
          value={passConf}
          keyboard='visible-password'
          onChange={setPassConf}
          label="Confirmar senha"
          icon="eye"
          password
        />
        <InputField
          value={userData.name}
          onChange={(value) => setUserData({ ...userData, name: value })}
          label="Razao social"
        />
        <InputField
          value={userData.contact}
          onChange={(value) => setUserData({ ...userData, contact: value })}
          label="Nome do contato"
        />
        <InputField
          value={userData.tel}
          keyboard='phone-pad'
          onChange={(value) => setUserData({ ...userData, tel: value })}
          label="Telefone"
        />
        <InputField
          value={userData.insc}
          keyboard='number-pad'
          onChange={(value) => setUserData({ ...userData, insc: value })}
          label="Inscrição estadual"
        />
        <InputField
          value={userData.cnpj}
          keyboard='number-pad'
          onChange={(value) => setUserData({ ...userData, cnpj: value })}
          label="CNPJ"
        />
        <InputField
          value={userData.cep}
          keyboard='number-pad'
          onChange={(value) => setUserData({ ...userData, cep: value })}
          label="CEP"
        />
        <Autocomplete
          menuOffset={15}
          renderHost={() => (
            <InputField
              label="Estado"
              value={
                options.find((op) => op.value === state)?.label || ""
              }
              onChange={setState}
              icon="chevron-down"
              locked
            />
          )}
          filterOptions={(options) => options}
          onOpen={() => {}}
          onClose={() => {}}
          value={state}
          onChange={setState}
          options={options}
          style={{ width: "100%" }}
        />
        <Autocomplete
          menuOffset={15}
          renderHost={() => (
            <InputField
              label="Cidade"
              value={city}
              onChange={setCity}
              icon="chevron-down"
              locked
            />
          )}
          filterOptions={(cityList) => cityList}
          onOpen={() => {}}
          onClose={() => {}}
          value={city}
          onChange={setCity}
          options={cityList}
          style={{ width: "100%" }}
        />
        <InputField
          value={userData.address}
          onChange={(value) => setUserData({ ...userData, address: value })}
          label="Endereço"
        />

        <ButtonSubmit label="Cadastrar" onClick={() => console.log("Pressed")} />
      </ScrollView>

      <View style={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Já é cadastrado?{" "}
        </Text>
        <Button
          labelStyle={style.links}
          mode="text"
          onPress={() => navigation.navigate("Login")}
        >
          Entre aqui
        </Button>
        </View>
    </View>
  );
}
