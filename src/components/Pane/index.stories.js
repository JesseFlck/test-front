import React from 'react';
import { storiesOf } from "@storybook/react";

import Pane from "./";
import Img from "./gardener_cover.png";

storiesOf('Exercise/Components/Pane', module)
.add('paneHeader', () => (
  <Pane type={'header'} cover={Img} title="Le Printemps Des Jardiniers" location="Domaine de la Grange - la Prévôté"/>
)).add('paneCard', () => (
    <Pane type={'card'}/>
));
 