import React from 'react';
import { storiesOf } from "@storybook/react";

import Page from './';
import Button from '../Button';


storiesOf('Exercise/Components/Page', module)
.add("main page", () => (
    <Page class='mainBlock'><div><Button/></div></Page>
))