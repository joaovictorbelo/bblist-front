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
        iconColor={this.props.selected ? "#407BDC" : "grey"}
        style={{
          borderRadius: 16,
          borderWidth: 2,
          borderColor: this.props.selected ? "#407BDC" : "transparent",
          width: 50,
          height: 50,
          marginVertical: 0
        }}
        size={28}
        onPress={this.props.onPress}
      />
    )
  }
}

FilterButton.propTypes = {
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};