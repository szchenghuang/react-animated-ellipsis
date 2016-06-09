'use strict';

//#############################################################################
// Library includes.
//#############################################################################

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('animated-ellipsis');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//#############################################################################
// React components.
//#############################################################################
var ReactAnimatedEllipsis = _react2.default.createClass({
    displayName: 'ReactAnimatedEllipsis',
    propTypes: {
        fontSize: _react2.default.PropTypes.string,
        marginLeft: _react2.default.PropTypes.string,
        spacing: _react2.default.PropTypes.string,
        className: _react2.default.PropTypes.string,
        style: _react2.default.PropTypes.object
    },
    getDefaultProps: function getDefaultProps() {
        return {
            fontSize: '2rem',
            marginLeft: '0.1rem',
            spacing: '0.1rem',
            className: '',
            style: {}
        };
    },
    render: function render() {
        var className = this.props.className;
        var marginLeft = this.props.marginLeft;
        var spacing = this.props.spacing;
        if (this.props.fontSize) {
            this.props.style.fontSize = this.props.fontSize;
        }
        var style = this.props.style;

        return _react2.default.createElement('span', {
            ref: this.animateEllipsis,
            className: className,
            style: style,
            'data-margin-left': marginLeft,
            'data-spacing': spacing });
    },
    animateEllipsis: function animateEllipsis(rootElem) {
        rootElem && rootElem.animateEllipsis();
    }
});

//#############################################################################
// Exports.
//#############################################################################
exports.default = ReactAnimatedEllipsis;