'use strict';

import 'animated-ellipsis';
import React from 'react';
import PropTypes from 'prop-types';

function ReactAnimatedEllipsis(props) {
  const { style, className, marginLeft, spacing, fontSize } = props;

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    const { current } = wrapperRef;
    current.animateEllipsis();
    return () => current.stopAnimatingEllipsis();
  }, []);

  return (
    <span
      ref={ wrapperRef }
      className={ className }
      style={ fontSize ? { ...style, fontSize } : style }
      data-margin-left={ marginLeft }
      data-spacing={ spacing }
    />
  );
}

ReactAnimatedEllipsis.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  marginLeft: PropTypes.string,
  spacing: PropTypes.string
};

ReactAnimatedEllipsis.defaultProps = {
  style: {},
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

export default ReactAnimatedEllipsis;
