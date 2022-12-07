import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import css from "./index.module.scss";

import Title from '../../Title';
import Button from '../../Button'
import Date from '../../Date';
import Location from '../../Location';


// Mise en place de la card de l'événement principal

class MainEvent extends Component {
  render() {
    return(
      <div className={`${css.header}`}>
        <div className={css.cover} style={{ backgroundImage: "url(" + this.props.cover + ")" }}>
          <div className={css.cover_mainCard}>
            <div className={css.cover_title}>
              <div className={css.cover_header}>
                <Date type={'headerDate'} date={this.props.date}/>
                <Title types={'header'}>{this.props.title}</Title>
              </div>
              <div className={css.cover_location}>
                <Location types={'headerLocation'}>{this.props.location}</Location>
              </div>
            </div>
            <div className={css.cover_button}>
              <Button><a href={this.props.url}><FontAwesomeIcon icon={faChevronRight} /></a></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MainEvent.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  url: PropTypes.string
};

MainEvent.defaultProps = {};


export default MainEvent;
