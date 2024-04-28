import React, { useState } from "react";
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper'

export default class FilterButton extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <IconButton
        icon="filter-outline"
        mode="contained"
        containerColor='rgba(165, 183, 200, 0.2)'
        iconColor="grey"
        style={{
          borderRadius: 16,
          width: 50,
          height: 50,
          marginVertical: 0
        }}
        size={28}
        onPress={() => console.log('Pressed')}
      />
    )
  }
}

FilterButton.propTypes = {
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