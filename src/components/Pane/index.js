import React from 'react';
import { storiesOf } from "@storybook/react";

import MainEvent from './MainEvent';
import SmallEvents from './SmallEvent';
import Img from './gardener_cover.png';

import Events from '../../mocks/events.json';


// Affichage de la page principale selon la maquette

storiesOf('Exercise/Components/Pane', module)
  .add("main page", () => (
    <div>
      {Events.map ((event, index) =>
        index == 0 ?
          <MainEvent 
            index= {event.index}
            date= {event.date}
            title= {event.title} 
            cover= {event.cover == "gardener_cover.png" ? Img : event.cover}
            url= {event.url}
            location= {event.address.place}
          />
        :
          <SmallEvents
            //onClick= {changeIndex}
            index= {event.index}
            icon= {event.icon}
            date= {event.date}
            title= {event.title}
            url= {event.url}
            location= {event.address.place}
          />
      )}
    </div>
  ))
