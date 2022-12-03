import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";


// Mise en place de l'élément date

class Date extends Component {
  render() {
    return(
     <div className={`${this.props.type === "headerDate" ? css.headerDate : css.cardDate}`}>
        <p className={`${css.day}`}>{this.props.day}</p>
        <p className={`${css.month}`}>{this.props.month}</p>
     </div>
    )
  }
}

Date.propTypes = {
  type: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string
};
Date.defaultProps = {};

export default Date;