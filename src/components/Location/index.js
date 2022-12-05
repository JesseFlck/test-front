import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


// Mise en place de la localisation

class Location extends Component {
  render() {
    return(
      <div className={`${css.location} ${this.props.types === 'cardLocation' ? css.location_card : this.props.types === 'headerLocation' ? css.location_header : this.props.types}`}><FontAwesomeIcon icon={faMapMarkerAlt} style={{'color': '#28a49a', 'font-size': '18px'}}/> {this.props.children}</div>
    )
  }
}

Location.propTypes = {types: PropTypes.string};

Location.defaultProps = {};

export default Location;
