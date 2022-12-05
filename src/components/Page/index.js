import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from '../Pane';
import Img from '../Pane/gardener_cover.png';


// Récupération des éléments du dossier Pane pour l'affichage de la page complète

class Page extends Component {
    render() {
        return(
            <div>
                <Pane type={"header"} cover={Img}/>
                <Pane type={"card"}/>
            </div>
        )
    }
}

Page.propTypes = {};

Page.defaultProps = {};


export default Page;
