(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@emotion/styled'), require('react'), require('react-spring')) :
  typeof define === 'function' && define.amd ? define(['exports', '@emotion/styled', 'react', 'react-spring'], factory) :
  (global = global || self, factory(global['react-slidebar'] = {}, global.styled, global.React, global.ReactSpring));
}(this, (function (exports, styled, React, reactSpring) { 'use strict';

  styled = styled && Object.prototype.hasOwnProperty.call(styled, 'default') ? styled['default'] : styled;
  var React__default = 'default' in React ? React['default'] : React;

  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteralLoose(["\n  background: none;\n  border: none;\n  color: #069;\n  cursor: pointer;\n  font-family: arial, sans-serif;\n  padding: 0 !important;\n  text-decoration: underline;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledButton = /*#__PURE__*/styled.button( /*#__PURE__*/_templateObject());

  function ButtonLink(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
    return /*#__PURE__*/React__default.createElement(StyledButton, {
      className: "-link",
      onClick: onClick
    }, children);
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteralLoose(["\n  margin-top: 1rem;\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$1());

  function MenuItem(_ref) {
    var item = _ref.item,
        handleClick = _ref.handleClick;
    return /*#__PURE__*/React__default.createElement(StyledWrapper, {
      className: "menuItem",
      "data-uuid": item.uuid
    }, /*#__PURE__*/React__default.createElement(ButtonLink, {
      onClick: function onClick() {
        return handleClick(item);
      }
    }, item.name));
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  left: 0%;\n  position: absolute;\n  top: 3rem;\n  width: 100%;\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledMenuItems = /*#__PURE__*/styled(reactSpring.animated.div)( /*#__PURE__*/_templateObject$2());

  function MenuItems(_ref) {
    var items = _ref.items,
        transitions = _ref.transitions,
        itemOnClick = _ref.itemOnClick;
    return transitions.map(function (_ref2) {
      var item = _ref2.item,
          props = _ref2.props,
          key = _ref2.key;
      return /*#__PURE__*/React__default.createElement(StyledMenuItems, {
        className: "menuItems",
        key: key,
        style: props,
        "data-uuid": item.uuid
      }, items.map(function (child) {
        return /*#__PURE__*/React__default.createElement(MenuItem, {
          handleClick: itemOnClick,
          item: child,
          key: child.uuid
        });
      }));
    });
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteralLoose(["\n  padding: 1rem;\n  text-align: left;\n"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledToolbar = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$3());

  function Toolbar(_ref) {
    var itemName = _ref.itemName,
        backAction = _ref.backAction;
    return /*#__PURE__*/React__default.createElement(StyledToolbar, {
      className: "toolbar"
    }, /*#__PURE__*/React__default.createElement(ButtonLink, {
      onClick: backAction
    }, "\u2190", itemName));
  }

  function _templateObject$4() {
    var data = _taggedTemplateLiteralLoose([""]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var DIRECTION = {
    FORWARD: 'forward',
    BACKWARD: 'backward'
  };
  var StyledSlidebar = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject$4());

  function Slidebar(_ref) {
    var menuItems = _ref.menuItems;

    var _useState = React.useState([]),
        history = _useState[0],
        setHistory = _useState[1];

    var _useState2 = React.useState(menuItems),
        activeItem = _useState2[0],
        setActive = _useState2[1];

    var _useState3 = React.useState(DIRECTION.FORWARD),
        direction = _useState3[0],
        setDirection = _useState3[1];

    var children = activeItem.children;

    function handleClick(item, newDirection) {
      if (newDirection === void 0) {
        newDirection = DIRECTION.FORWARD;
      }

      setDirection(newDirection);

      if (!item.children || typeof item.action === 'function') {
        item.action.call(item);
        return;
      }

      var newHistory = history;

      if (newDirection === DIRECTION.BACKWARD) {
        newHistory.shift();
      } else {
        newHistory.unshift(activeItem);
      }

      setHistory(newHistory);
      setActive(item);
    }

    var transitions = reactSpring.useTransition(activeItem, function (item) {
      return item.uuid;
    }, {
      from: direction === DIRECTION.FORWARD ? {
        opacity: 0,
        transform: 'translate3d(100%,0,0)'
      } : {
        opacity: 0,
        transform: 'translate3d(-50%, 0, 0)'
      },
      enter: {
        opacity: 1,
        transform: 'translate3d(0%,0,0)'
      },
      leave: direction === DIRECTION.FORWARD ? {
        opacity: 0,
        transform: 'translate3d(-50%,0,0)'
      } : {
        opacity: 0,
        transform: 'translate3d(100%,0,0)'
      }
    });
    return /*#__PURE__*/React__default.createElement(StyledSlidebar, {
      className: "sidebar"
    }, history[0] && /*#__PURE__*/React__default.createElement(Toolbar, {
      backAction: function backAction() {
        return handleClick(history[0], DIRECTION.BACKWARD);
      },
      itemName: history[0].name
    }), /*#__PURE__*/React__default.createElement(MenuItems, {
      items: children,
      itemOnClick: handleClick,
      transitions: transitions
    }));
  }

  exports.default = Slidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-slidebar.umd.js.map
