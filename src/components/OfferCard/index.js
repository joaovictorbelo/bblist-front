import React from "react";
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native'
import { Avatar } from "react-native-paper";

export default class OfferCard extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <View style={{borderRadius: 10}}>
        <ImageBackground
          source={{uri: 'https://static.babycenternet.com.br/produto/BERCO-AMALFI-PLUS-MEL-JC-MOVEIS_D.webp'}} 
          imageStyle={{ borderRadius: 10}}
          style={{width: 250,
            height: 250,
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: 10,
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              backgroundColor: 'green',
              width: 160,
              height: 20,
              backgroundColor: 'rgba(255,255,255,0.8)',
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
              Oferta valida ate 31/03
            </Text>
          </View>
          <View 
            style={{
              width: 230,
              height: 100,
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: 10,
              padding: 5,
              paddingHorizontal: 7,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignContent: 'space-between'
            }}
          >
            <Text
              style={{
                fontFamily: 'Montserrat-bold',
                color: '#07152A',
                fontSize: 15
              }}
            >
              Berço de madeira Baby Sleep
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center"
              }}
            >
              <Avatar.Image size={25} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjzWhJKM2Pn-XHYvnfccPPt_D97lo3Z-3qUeDQYGugg&s'}} />
              <Text> Matic Moveis</Text>
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
                R$ 300
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

OfferCard.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};