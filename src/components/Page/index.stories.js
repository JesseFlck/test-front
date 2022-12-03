import React from 'react';
import { storiesOf } from "@storybook/react";

import Page from './';


storiesOf('Exercise/Components/Page', module)
.add("main page", () => (
    <Page/>
))
