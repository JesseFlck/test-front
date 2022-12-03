import React from 'react';
import { storiesOf } from "@storybook/react";

import Title from "./";


storiesOf('Exercise/Components/Title', module)
  .add('headerTitle', () => (
    <Title types={'header'}>Titre header</Title>
  )).add('cardTitle', () => (
    <Title types={'card'}>Titre card</Title>
  ))
