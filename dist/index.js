'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('animated-ellipsis');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactAnimatedEllipsis(props) {
  var style = props.style,
      className = props.className,
      marginLeft = props.marginLeft,
      spacing = props.spacing,
      fontSize = props.fontSize;


  var wrapperRef = _react2.default.useRef();

  _react2.default.useEffect(function () {
    var current = wrapperRef.current;

    current.animateEllipsis();
    return function () {
      return current.stopAnimatingEllipsis();
    };
  }, []);

  return _react2.default.createElement('span', {
    ref: wrapperRef,
    className: className,
    style: fontSize ? style : _extends({}, style, { fontSize: fontSize }),
    'data-margin-left': marginLeft,
    'data-spacing': spacing
  });
}

ReactAnimatedEllipsis.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,
  marginLeft: _propTypes2.default.string,
  spacing: _propTypes2.default.string
};

ReactAnimatedEllipsis.defaultProps = {
  style: {},
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

exports.default = ReactAnimatedEllipsis;