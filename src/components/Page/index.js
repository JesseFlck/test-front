import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";


class Page extends Component {
    render() {
        return(
            <div className={`${css.mainBlock} mainBlock ${'mainBlock-' + this.props.type} ${'mainBlock-' + this.props.size}`}>{this.props.children}</div>
        )
    }
}

export default Page;