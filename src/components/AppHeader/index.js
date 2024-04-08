import React from "react";
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native'
import { IconButton } from 'react-native-paper'

import style from './style'

export default class AppHeader extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <View style={style.header}>
        <IconButton
          icon="chevron-left"
          mode="contained"
          iconColor="white"
          size={40}
          onPress={() => this.props.goBackButton()}
          style={{
            width: 50,
            height: 40,
            backgroundColor: "#407BDC",
            fontSize: 40,
            borderRadius: 15
          }}
        />
        <Image style={style.logo} source={require('../../../assets/logoTypePink.png')} />
      </View>
    )
  }
}

AppHeader.propTypes = { goBackButton: PropTypes.func };