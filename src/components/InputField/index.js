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
          value={this.props.value}
          onChangeText={text => this.props.onChange(text)}
          underlineColor='white'
          outlineStyle={{
            borderRadius: 20,
          }}
          outlineColor={this.props.error ? '#FA5D5D' : '#E1E1E7'}
          activeOutlineColor={this.props.error ? '#FA5D5D' : '#4D84DF'}
          style={{
            backgroundColor: '#e1e6eb',
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
        <HelperText style={{color: '#FA5D5D'}} type="error" visible={this.props.error || false}>
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
  hText: PropTypes.string,
  locked: PropTypes.bool
};