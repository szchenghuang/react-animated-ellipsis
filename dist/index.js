'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('animated-ellipsis');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAnimatedEllipsis = function (_React$Component) {
  _inherits(ReactAnimatedEllipsis, _React$Component);

  function ReactAnimatedEllipsis() {
    _classCallCheck(this, ReactAnimatedEllipsis);

    return _possibleConstructorReturn(this, (ReactAnimatedEllipsis.__proto__ || Object.getPrototypeOf(ReactAnimatedEllipsis)).apply(this, arguments));
  }

  _createClass(ReactAnimatedEllipsis, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.wrapper.animateEllipsis();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.wrapper.stopAnimatingEllipsis();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          customStyle = _props.customStyle,
          className = _props.className,
          marginLeft = _props.marginLeft,
          spacing = _props.spacing,
          fontSize = _props.fontSize;
      // if ( fontSize ) {
      //   customStyle.fontSize = fontSize;
      // }

      return _react2.default.createElement('span', {
        ref: function ref(_ref) {
          return _this2.wrapper = _ref;
        },
        className: className,
        style: { fontSize: fontSize },
        'data-margin-left': marginLeft,
        'data-spacing': spacing });
    }
  }]);

  return ReactAnimatedEllipsis;
}(_react2.default.Component);

ReactAnimatedEllipsis.propTypes = {
  customStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,
  marginLeft: _propTypes2.default.string,
  spacing: _propTypes2.default.string
};

ReactAnimatedEllipsis.defaultProps = {
  customStyle: {},
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

exports.default = ReactAnimatedEllipsis;