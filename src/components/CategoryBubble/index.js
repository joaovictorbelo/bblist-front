import React from "react";
import PropTypes from 'prop-types';
import { View, Text, Image, Pressable } from 'react-native'
import { Avatar } from "react-native-paper";

export default class CategoryBubble extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <Pressable key={this.props.nome} onPress={this.props.onClick} style={{alignItems: 'center', marginRight: 25}}>
        <View 
          style={{
            width: 65,
            height: 65,
            backgroundColor: "#D9D9D9",
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'            
          }}
        >
          <Image source={this.props.imagem}/>
        </View>
        <Text>{this.props.nome}</Text>
      </Pressable>
    )
  }
}

CategoryBubble.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};