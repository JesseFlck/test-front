import React from 'react';
import { storiesOf } from "@storybook/react";

import SmallEvents from "./";

storiesOf('Exercise/Components/Pane/SmallEvent', module)
.add('smallEvents', () => (
    <SmallEvents type={'card'} icon='🍓' title="le Printemps des Jardiniers" location="Domaine de la Grange - la Prévôté"/>
));
