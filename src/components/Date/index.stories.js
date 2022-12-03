import React from 'react';
import { storiesOf } from "@storybook/react";

import Date from "./";

storiesOf('Exercise/Components/Date', module)
  .add('headerDate', () => (
    <Date type={"headerDate"} day="23" month="03"></Date>
  )).add('cardDate', () => (
    <Date type={'cardDate'} day="23" month="03"></Date>
  ));
  