import React from 'react';
import { storiesOf } from "@storybook/react";

import MainEvent from "./";
import Img from "../gardener_cover.png";

storiesOf('Exercise/Components/Pane/MainEvent', module)
  .add('mainEvent', () => (
    <MainEvent
      type= {'mainEvent'}
      date= "03/23/2021"
      title="le Printemps des Jardiniers"
      cover= {Img}
      url= 'https://www.savigny-le-temple.fr/domaine-grange-prevote/printemps-jardiniers'
      location= "Domaine de la Grange - la Prévôté"
    />
  ));
