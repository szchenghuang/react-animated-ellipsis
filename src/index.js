'use strict';

//#############################################################################
// Library includes.
//#############################################################################
import 'animated-ellipsis';
import React from 'react';

//#############################################################################
// React components.
//#############################################################################
const ReactAnimatedEllipsis = React.createClass({
    displayName: 'ReactAnimatedEllipsis',
    propTypes: {
        fontSize: React.PropTypes.string,
        marginLeft: React.PropTypes.string,
        spacing: React.PropTypes.string,
        className: React.PropTypes.string,
        style: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            fontSize: '2rem',
            marginLeft: '0.1rem',
            spacing: '0.1rem',
            className: '',
            style: {}
        };
    },
    render() {
        const className = this.props.className;
        const marginLeft = this.props.marginLeft;
        const spacing = this.props.spacing;
        if ( this.props.fontSize ) {
            this.props.style.fontSize = this.props.fontSize;
        }
        const style = this.props.style;

        return (
            <span
                ref={ this.animateEllipsis }
                className={ className }
                style={ style }
                data-margin-left={ marginLeft }
                data-spacing={ spacing } />
        );
    },
    animateEllipsis( rootElem ) {
        rootElem && rootElem.animateEllipsis();
    }
});

//#############################################################################
// Exports.
//#############################################################################
export default ReactAnimatedEllipsis;
