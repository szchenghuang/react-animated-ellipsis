'use strict';

import 'animated-ellipsis';
import React from 'react';
import PropTypes from 'prop-types';

class ReactAnimatedEllipsis extends React.Component {
  render() {
    const { style, className, marginLeft, spacing, fontSize } = this.props;
    if ( fontSize ) {
      style.fontSize = fontSize;
    }

    return (
      <span
        ref={ ref => ref && ref.animateEllipsis() }
        className={ className }
        style={ style }
        data-margin-left={ marginLeft }
        data-spacing={ spacing } />
    );
  }
}

ReactAnimatedEllipsis.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  fontSize: React.PropTypes.string,
  marginLeft: React.PropTypes.string,
  spacing: React.PropTypes.string
};

ReactAnimatedEllipsis.defaultProps = {
  style: {},
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

export default ReactAnimatedEllipsis;
