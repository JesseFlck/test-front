import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";


// Mise en place des titres

class Title extends Component {
  render() {
    return(
      <h1 className={`${css.title} ${this.props.types === 'header' ? css.title_header : this.props.types === 'card' ? css.title_card : this.props.types}`}>{this.props.children}</h1>
    )
  }
}

Title.propTypes = {types: PropTypes.string};

Title.defaultProps = {};

export default Title;
