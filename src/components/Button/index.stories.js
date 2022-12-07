import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from "./";

storiesOf('Exercise/Components/Button', module)
  .add('Bouton chevron', () => (
    <Button class='btn'>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  ));
