import React from "react";
import PropTypes from 'prop-types';
import { View, Text, Image, Pressable } from 'react-native'
import { Avatar } from "react-native-paper";

export default class  HorizontalCard extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <Pressable style={{borderRadius: 10}} onPress={this.props.onClick}>
        <View
          style={{
            width: '100%',
            padding: 7,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 10,
            marginVertical: 7,
            backgroundColor: "#E4ECFF"
          }}
        >
          <Image
            source={{uri: this.props.offer.produtos[0].imagem}} 
            style={{
              borderRadius: 10,
              height: 105,
              width: 105
            }}
          />
          <View 
            style={{
              width: 220,
              borderRadius: 10,
              paddingHorizontal: 7,
              paddingTop: 5,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignContent: 'space-between'
            }}
          >
            <View
              style={{
                height: 20,
                borderRadius: 10,
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontFamily: 'Hind-bold',
                  color: '#07152A'
                }}
              >
                Oferta valida ate <Text style={{color: "#407BDC"}}>{this.props.offer.prazo}</Text>
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Montserrat-bold',
                color: '#07152A',
                fontSize: 15
              }}
            >
              {this.props.offer.titulo}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center"
              }}
            >
              <Avatar.Image size={25} source={{uri: this.props.offer.fabrica.img}} />
              <Text> {this.props.offer.fabrica.nome}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: 'Hind-bold',
                  color: '#07152A',
                  fontSize: 10,
                  height: 12
                }}
              >
                A partir de
              </Text>
              <Text
                style={{
                  fontFamily: 'Hind-bold',
                  color: "#407BDC",
                  fontSize: 22
                }}
              >
                R$ {this.props.offer.produtos.reduce((prev, curr) => (prev.valor < curr.valor) ? prev.valor : curr.valor)}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    )
  }
}

HorizontalCard.propTypes = {
  offer: PropTypes.object.isRequired,
  onClick: PropTypes.func
};