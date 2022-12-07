import React from 'react';
import { storiesOf } from "@storybook/react";

import Date from "./";

storiesOf('Exercise/Components/Date', module)
  .add('headerDate', () => (
    <Date
      type={"headerDate"}
      date="03/23/2021"
    />
  )).add('cardDate', () => (
    <Date
      type={'cardDate'}
      date="03/23/2021"
    />
  ));
