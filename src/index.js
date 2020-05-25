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
    const { className, marginLeft, spacing, fontSize } = this.props;

    return (
      <span
        ref={ ref => this.wrapper = ref }
        className={ className }
        style={{fontSize: fontSize}}
        data-margin-left={ marginLeft }
        data-spacing={ spacing } />
    );
  }
}

ReactAnimatedEllipsis.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.string,
  marginLeft: PropTypes.string,
  spacing: PropTypes.string
};

ReactAnimatedEllipsis.defaultProps = {
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

export default ReactAnimatedEllipsis;
