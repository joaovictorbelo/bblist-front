import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper'

export default class InputField extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
        <TextInput
          label={this.props.label}
          mode='outlined'
          value={this.props.value}
          onChangeText={text => this.props.onChange(text)}
          underlineColor='white'
          outlineStyle={{
            borderRadius: 20,
          }}
          outlineColor='#E1E1E7'
          activeOutlineColor='#4D84DF'
          style={{
            backgroundColor: '#E1E1E7',
            fontFamily: 'Hind',
            width: '100%',
            height: 60,
            margin: 10,
          }}
          selectionColor='blue'
          right={
            <TextInput.Icon
              icon={this.props.password ? 'eye' : this.props.icon}
              color="#a2a2a2"
            />
          }
          secureTextEntry={this.props.password}
        />
    )
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  password: PropTypes.bool
};