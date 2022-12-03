import React from 'react';
import { storiesOf } from "@storybook/react";

import Location from './';


storiesOf('Exercise/Components/Location', module)
  .add('headerLocation', () => (
    <Location types='headerLocation'>Header Location</Location>
  )).add('cardLocation', () => (
    <Location types='cardLocation'>Card Location</Location>
  ))
