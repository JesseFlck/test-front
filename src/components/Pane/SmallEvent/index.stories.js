import React from 'react';
import { storiesOf } from "@storybook/react";

import SmallEvents from "./";

storiesOf('Exercise/Components/Pane/SmallEvent', module)
  .add('smallEvents', () => (
    <SmallEvents
      type= {'card'}
      icon= '🍓'
      date= "03/23/2021"
      title= "le Printemps des Jardiniers"
      url= 'https://www.savigny-le-temple.fr/domaine-grange-prevote/printemps-jardiniers'
      location= "Domaine de la Grange - la Prévôté"
    />
  ));
