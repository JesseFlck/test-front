import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";


// Mise en place de l'élément date

class Date extends Component {

  // Mise en place du constructeur pour récupérer le format de la date
  constructor() {
    super();
    this.state = {
      day: undefined,
      month: undefined
    }
  }

  datePart = (date) => {
    const datePart = date.split('/');
    this.setState({ day: datePart[1]});
    this.setState({ month: datePart[0]})
  }

  componentDidMount() {
    this.datePart(this.props.date)
  }



  render() {
    return(
     <div className={`${this.props.type === "headerDate" ? css.headerDate : css.cardDate}`}>
        <p className={`${css.day}`}>{this.state.day}</p>
        <p className={`${css.month}`}>{this.state.month}</p>
     </div>
    )
  }
}


Date.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string
};

Date.defaultProps = {};

export default Date;
