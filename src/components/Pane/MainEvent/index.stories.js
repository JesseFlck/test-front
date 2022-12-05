import React from 'react';
import { storiesOf } from "@storybook/react";

import MainEvent from "./";
import Img from "../gardener_cover.png";

storiesOf('Exercise/Components/Pane/MainEvent', module)
.add('mainEvent', () => (
  <MainEvent type={'mainEvent'} cover={Img} title="le Printemps des Jardiniers" location="Domaine de la Grange - la Prévôté"/>
));
