'use strict';

import 'animated-ellipsis';
import React from 'react';
import PropTypes from 'prop-types';

class ReactAnimatedEllipsis extends React.Component {
  componentDidMount() {
    this.wrapper.animateEllipsis();
  }
  componentWillUnmount() {
    this.wrapper.stopAnimatingEllipsis();
  }
  render() {
    const { customStyle, className, marginLeft, spacing, fontSize } = this.props;
    if ( fontSize ) {
      customStyle.fontSize = fontSize;
    }

    return (
      <span
        ref={ ref => this.wrapper = ref }
        className={ className }
        style={ customStyle }
        data-margin-left={ marginLeft }
        data-spacing={ spacing } />
    );
  }
}

ReactAnimatedEllipsis.propTypes = {
  customStyle: PropTypes.object,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  marginLeft: PropTypes.string,
  spacing: PropTypes.string
};

ReactAnimatedEllipsis.defaultProps = {
  customStyle: {},
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

export default ReactAnimatedEllipsis;
