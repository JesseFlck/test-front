import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

import Title from '../../Title';
import Date from '../../Date';
import Location from '../../Location';


// Mise en place de la card des événements secondaires

class SmallEvents extends Component {
  render() {
    return(
      <div className={css.card} onClick={''}>
        <div className={css.card_date}>
          <Date type={'cardDate'}>{this.props.date}</Date>
        </div>
        <div className={css.card_emot} >
          {this.props.icon}
        </div>
        <div className={css.card_title}>
          <a href='#'><Title types={'card'}>{this.props.title}</Title></a>
          <div className={css.card_location}>
            <Location types={'cardLocation'}>{this.props.location}</Location>
          </div>
        </div>
      </div>
    )
  }
} 

SmallEvents.propTypes = {};

SmallEvents.defaultProps = {};


export default SmallEvents;
