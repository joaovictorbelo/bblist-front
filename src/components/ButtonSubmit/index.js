import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper'

export default class ButtonSubmit extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <Button
        mode="contained"
        onPress={this.props.onClick}
        buttonColor="#407BDC"
        loading={this.props.loading || false}
        contentStyle={{
          height: 60,
        }}
        style={{
          width: '70%',
          height: 50,
          justifyContent: 'center',
          borderRadius: 50,
          marginTop: 60,
          marginBottom: 20
        }}
        labelStyle={{
          fontFamily: 'Hind',
          fontWeight: "bold",
          fontSize: 18
        }}
      >
        {this.props.label}
      </Button>
    )
  }
}

ButtonSubmit.propTypes = { label: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired, loading: PropTypes.bool };