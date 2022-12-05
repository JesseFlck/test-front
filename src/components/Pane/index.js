import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import css from "./index.module.scss";

import Title from '../Title';
import Button from '../Button'
import Date from '../Date';
import Location from '../Location';

// Récupération des données des événements
import Events from '../../mocks/events.json'



// Mise en place des cards avec mapping des événements et intégration des données

class Pane extends Component {

  render() {
    return(
      <div>
        {Events.map (event => {
          return(
            <div className={`${css.pane} ${this.props.type === 'header' ? css.header : css.card} ${this.props.cover ? css.withCover : ''}`}>
              {
                // Evénement principal
                this.props.cover ? (
                  <div className={css.cover} style={{ backgroundImage: "url(" + event.cover + ")" }}>
                    <div className={css.cover_mainCard}>
                      <div className={css.cover_title}>
                        <div className={css.cover_header}>
                          <Date type={'headerDate'}></Date>
                          <Title types={'header'}>{event.title}</Title>
                        </div>
                        <div className={css.cover_location}>
                          <Location types={'headerLocation'}>{event.address.place}</Location>
                        </div>
                      </div>
                      <div className={css.cover_button}>
                        <Button><FontAwesomeIcon icon={faChevronRight} /></Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Evénements secondaires
                    <div className={css.smallEvents}>
                      <div className={css.card} onClick={''}>
                        <div className={css.card_date}>
                          <Date type={'cardDate'}>{event.date}</Date>
                        </div>
                        <div className={css.card_emot} >
                          {event.icon}
                        </div>
                        <div className={css.card_title}>
                          <a href={event.url}><Title types={'card'}>{event.title}</Title></a>
                            <div className={css.card_location}>
                              <Location types={'cardLocation'}>{event.address.place}</Location>
                            </div>
                        </div>
                      </div>
                    </div>
                  )
              }
            </div>
          )
        })}
      </div>
    )
  }
}

Pane.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string
};

Pane.defaultProps = {};

export default Pane;
