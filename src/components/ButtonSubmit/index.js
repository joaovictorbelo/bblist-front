import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';

export default class ButtonSubmit extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <LinearGradient colors={this.props.disabled ? ["#eee", '#eee'] : this.props.grad}
        style={{
          borderRadius: 50,
          width: '80%',
          marginVertical: 20
        }} 
        start={{ y: 1, x: 1 }} end={{ y: 0, x: 1 }}
      >
        <Button
          mode="contained"
          disabled={this.props.disabled}
          onPress={this.props.onClick}
          buttonColor="transparent"
          loading={this.props.loading || false}
          contentStyle={{
            height: 60,
          }}
          style={{
            width: '100%',
            borderRadius: 50,
            height: 60
          }}
          labelStyle={{
            fontFamily: 'Hind',
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          {this.props.label}
        </Button>
      </LinearGradient>
    )
  }
}

ButtonSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  grad: PropTypes.arrayOf(PropTypes.string)
};