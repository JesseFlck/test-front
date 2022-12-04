import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import Events from "../../mocks/events.json"



// Mise en place de l'élément date

class Date extends Component {
  render() {
    return(
     <div className={`${this.props.type === "headerDate" ? css.headerDate : css.cardDate}`}>
        <p className={`${css.day}`}>23</p>
        <p className={`${css.month}`}>03</p>
     </div>
    )
  }
}

// remettre 'this.props.day' et 'this.props.month' dans le return


Date.propTypes = {
  type: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string
};
Date.defaultProps = {};

export default Date;