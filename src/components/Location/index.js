import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Location extends Component {
  render() {
    return(
      <p className={`${css.location}`}>{this.props.children}</p>
    )
  }
}

Title.propTypes = {};
Title.defaultProps = {};

export default Location;
