import React, { useState } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper'

export default class InputField extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{width: '100%'}}>
        <TextInput
          editable={!this.props.locked}
          label={this.props.label}
          mode='outlined'
          keyboardType={this.props.keyboard || 'default'}
          value={this.props.value}
          onChangeText={text => this.props.onChange(text)}
          underlineColor='white'
          outlineStyle={{
            borderRadius: 20,
          }}
          outlineColor={this.props.error ? '#FA5D5D' : 'rgba(165, 183, 200, 0.2)'}
          activeOutlineColor={this.props.error ? '#FA5D5D' : '#4D84DF'}
          style={{
            backgroundColor: 'rgba(165, 183, 200, 0.2)',
            fontFamily: 'Hind-bold',
            color: 'rgba(7, 21, 42, 0.5)',
            width: '100%',
            height: 60,
            lineHeight: 30
          }}
          contentStyle={{
            fontFamily: 'Hind',
            height: 60,
          }}
          selectionColor='blue'
          right={
            <TextInput.Icon
              icon={this.props.icon}
              color="#a2a2a2"
              style={{marginTop: 15}}
              disabled={!['eye', 'eye-off'].includes(this.props.icon)}
              onPress={this.props.iconAction}
            />
          }
          secureTextEntry={this.props.password}
        />
        <HelperText style={{color: this.props.error ? '#FA5D5D' : "#a2a2a2"}} type="error" visible={(this.props.error || this.props.info) || false}>
          {this.props.hText}
        </HelperText>
      </View>
    )
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconAction: PropTypes.func,
  icon: PropTypes.string,
  password: PropTypes.bool,
  error: PropTypes.bool,
  info: PropTypes.bool,
  hText: PropTypes.string,
  locked: PropTypes.bool,
  keyboard: PropTypes.string,
};