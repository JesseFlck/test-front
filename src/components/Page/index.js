import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from '../Pane';
import Img from '../Pane/gardener_cover.png';


class Page extends Component {
    render() {
        return(
            <div>
                <Pane type={"header"} cover={Img} location="Domaine de la Grange - la Prévôté" title="Le Printemps Des Jardiniers"/>
                <Pane  type={"card"}/>
            </div>
        )
    }
}

Page.propTypes = {};
Page.defaultProps = {};


export default Page;
