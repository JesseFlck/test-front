import React from 'react';
import { storiesOf } from "@storybook/react";

import Location from "./";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

storiesOf('Exercise/Components/Location', module)
  .add('default', () => (
    <Location class='location'>bla</Location>
  ))
