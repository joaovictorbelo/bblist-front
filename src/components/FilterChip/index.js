import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Chip } from 'react-native-paper'

export default class FilterChip extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Chip
        key={this.props.filter.value}
        closeIcon="close"
        onClose={() => this.props.close(this.props.filter.value)}
        style={{
          marginTop: 5,
          marginRight: 5,
          borderRadius: 20,
          backgroundColor: (this.props.filter.type==='date') ? 'rgba(2, 188, 119, .3)' : '#E4ECFF'
        }}
      >
        {(this.props.filter.type==='date') ? 'até ' : ''}
        {this.props.filter.value}
      </Chip>
    )
  }
}

FilterChip.propTypes = {
  filter: PropTypes.object.isRequired,
  close: PropTypes.func
};