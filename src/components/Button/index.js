import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";


// Mise en place du bouton de l'événement principal

class Button extends Component {
  render() {
    return(
      <button className={`${css.btn} btn`}>
        {this.props.children}
      </button>
    )
  }
}


Button.propTypes = {};

Button.defaultProps = {};


export default Button;
