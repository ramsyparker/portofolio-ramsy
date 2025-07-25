import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  require_prop_types
} from "./chunk-EZSJO6EY.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireWildcard.js
var require_interopRequireWildcard = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    module.exports = _interopRequireWildcard;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    module.exports = _interopRequireDefault;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends() {
      module.exports = _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    module.exports = _extends;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(exports, module) {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    module.exports = _objectWithoutProperties;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    module.exports = _createClass;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof22(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function _typeof22(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof3(obj2) {
          return _typeof2(obj2);
        };
      } else {
        module.exports = _typeof = function _typeof3(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : _typeof2(obj2);
        };
      }
      return _typeof(obj);
    }
    module.exports = _typeof;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
    var _typeof = require_typeof();
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return assertThisInitialized(self);
    }
    module.exports = _possibleConstructorReturn;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf;
  }
});

// node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits;
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning;
  }
});

// node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault2 = __commonJS({
  "node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    module.exports = _interopRequireDefault;
  }
});

// node_modules/react-swipeable-views-core/lib/checkIndexBounds.js
var require_checkIndexBounds = __commonJS({
  "node_modules/react-swipeable-views-core/lib/checkIndexBounds.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault2();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(require_react());
    var _warning = _interopRequireDefault(require_warning());
    var checkIndexBounds = function checkIndexBounds2(props) {
      var index = props.index, children = props.children;
      var childrenCount = _react.default.Children.count(children);
      true ? (0, _warning.default)(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "].")) : void 0;
    };
    var _default = checkIndexBounds;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/constant.js
var require_constant = __commonJS({
  "node_modules/react-swipeable-views-core/lib/constant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = {
      RESISTANCE_COEF: 0.6,
      // This value is closed to what browsers are using internally to
      // trigger a native scroll.
      UNCERTAINTY_THRESHOLD: 3
      // px
    };
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/computeIndex.js
var require_computeIndex = __commonJS({
  "node_modules/react-swipeable-views-core/lib/computeIndex.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault2();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = computeIndex;
    var _react = _interopRequireDefault(require_react());
    var _constant = _interopRequireDefault(require_constant());
    function computeIndex(params) {
      var children = params.children, startIndex = params.startIndex, startX = params.startX, pageX = params.pageX, viewLength = params.viewLength, resistance = params.resistance;
      var indexMax = _react.default.Children.count(children) - 1;
      var index = startIndex + (startX - pageX) / viewLength;
      var newStartX;
      if (!resistance) {
        if (index < 0) {
          index = 0;
          newStartX = (index - startIndex) * viewLength + pageX;
        } else if (index > indexMax) {
          index = indexMax;
          newStartX = (index - startIndex) * viewLength + pageX;
        }
      } else if (index < 0) {
        index = Math.exp(index * _constant.default.RESISTANCE_COEF) - 1;
      } else if (index > indexMax) {
        index = indexMax + 1 - Math.exp((indexMax - index) * _constant.default.RESISTANCE_COEF);
      }
      return {
        index,
        startX: newStartX
      };
    }
  }
});

// node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js
var require_getDisplaySameSlide = __commonJS({
  "node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault2();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(require_react());
    var getDisplaySameSlide = function getDisplaySameSlide2(props, nextProps) {
      var displaySameSlide = false;
      var getChildrenKey = function getChildrenKey2(child) {
        return child ? child.key : "empty";
      };
      if (props.children.length && nextProps.children.length) {
        var oldKeys = _react.default.Children.map(props.children, getChildrenKey);
        var oldKey = oldKeys[props.index];
        if (oldKey !== null && oldKey !== void 0) {
          var newKeys = _react.default.Children.map(nextProps.children, getChildrenKey);
          var newKey = newKeys[nextProps.index];
          if (oldKey === newKey) {
            displaySameSlide = true;
          }
        }
      }
      return displaySameSlide;
    };
    var _default = getDisplaySameSlide;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/mod.js
var require_mod = __commonJS({
  "node_modules/react-swipeable-views-core/lib/mod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function mod(n, m) {
      var q = n % m;
      return q < 0 ? q + m : q;
    }
    var _default = mod;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views-core/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-swipeable-views-core/lib/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault2();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "checkIndexBounds", {
      enumerable: true,
      get: function get() {
        return _checkIndexBounds.default;
      }
    });
    Object.defineProperty(exports, "computeIndex", {
      enumerable: true,
      get: function get() {
        return _computeIndex.default;
      }
    });
    Object.defineProperty(exports, "constant", {
      enumerable: true,
      get: function get() {
        return _constant.default;
      }
    });
    Object.defineProperty(exports, "getDisplaySameSlide", {
      enumerable: true,
      get: function get() {
        return _getDisplaySameSlide.default;
      }
    });
    Object.defineProperty(exports, "mod", {
      enumerable: true,
      get: function get() {
        return _mod.default;
      }
    });
    var _checkIndexBounds = _interopRequireDefault(require_checkIndexBounds());
    var _computeIndex = _interopRequireDefault(require_computeIndex());
    var _constant = _interopRequireDefault(require_constant());
    var _getDisplaySameSlide = _interopRequireDefault(require_getDisplaySameSlide());
    var _mod = _interopRequireDefault(require_mod());
  }
});

// node_modules/react-swipeable-views/lib/SwipeableViews.js
var require_SwipeableViews = __commonJS({
  "node_modules/react-swipeable-views/lib/SwipeableViews.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDomTreeShapes = getDomTreeShapes;
    exports.findNativeHandler = findNativeHandler;
    exports.default = exports.SwipeableViewsContext = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var React = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _warning = _interopRequireDefault(require_warning());
    var _reactSwipeableViewsCore = require_lib();
    function addEventListener(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return {
        remove: function remove() {
          node.removeEventListener(event, handler, options);
        }
      };
    }
    var styles = {
      container: {
        direction: "ltr",
        display: "flex",
        willChange: "transform"
      },
      slide: {
        width: "100%",
        WebkitFlexShrink: 0,
        flexShrink: 0,
        overflow: "auto"
      }
    };
    var axisProperties = {
      root: {
        x: {
          overflowX: "hidden"
        },
        "x-reverse": {
          overflowX: "hidden"
        },
        y: {
          overflowY: "hidden"
        },
        "y-reverse": {
          overflowY: "hidden"
        }
      },
      flexDirection: {
        x: "row",
        "x-reverse": "row-reverse",
        y: "column",
        "y-reverse": "column-reverse"
      },
      transform: {
        x: function x(translate) {
          return "translate(".concat(-translate, "%, 0)");
        },
        "x-reverse": function xReverse(translate) {
          return "translate(".concat(translate, "%, 0)");
        },
        y: function y(translate) {
          return "translate(0, ".concat(-translate, "%)");
        },
        "y-reverse": function yReverse(translate) {
          return "translate(0, ".concat(translate, "%)");
        }
      },
      length: {
        x: "width",
        "x-reverse": "width",
        y: "height",
        "y-reverse": "height"
      },
      rotationMatrix: {
        x: {
          x: [1, 0],
          y: [0, 1]
        },
        "x-reverse": {
          x: [-1, 0],
          y: [0, 1]
        },
        y: {
          x: [0, 1],
          y: [1, 0]
        },
        "y-reverse": {
          x: [0, -1],
          y: [1, 0]
        }
      },
      scrollPosition: {
        x: "scrollLeft",
        "x-reverse": "scrollLeft",
        y: "scrollTop",
        "y-reverse": "scrollTop"
      },
      scrollLength: {
        x: "scrollWidth",
        "x-reverse": "scrollWidth",
        y: "scrollHeight",
        "y-reverse": "scrollHeight"
      },
      clientLength: {
        x: "clientWidth",
        "x-reverse": "clientWidth",
        y: "clientHeight",
        "y-reverse": "clientHeight"
      }
    };
    function createTransition(property, options) {
      var duration = options.duration, easeFunction = options.easeFunction, delay = options.delay;
      return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
    }
    function applyRotationMatrix(touch, axis) {
      var rotationMatrix = axisProperties.rotationMatrix[axis];
      return {
        pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
        pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
      };
    }
    function adaptMouse(event) {
      event.touches = [{
        pageX: event.pageX,
        pageY: event.pageY
      }];
      return event;
    }
    function getDomTreeShapes(element, rootNode) {
      var domTreeShapes = [];
      while (element && element !== rootNode && element !== document.body) {
        if (element.hasAttribute("data-swipeable")) {
          break;
        }
        var style = window.getComputedStyle(element);
        if (
          // Ignore the scroll children if the element is absolute positioned.
          style.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
          style.getPropertyValue("overflow-x") === "hidden"
        ) {
          domTreeShapes = [];
        } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
          domTreeShapes.push({
            element,
            scrollWidth: element.scrollWidth,
            scrollHeight: element.scrollHeight,
            clientWidth: element.clientWidth,
            clientHeight: element.clientHeight,
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          });
        }
        element = element.parentNode;
      }
      return domTreeShapes;
    }
    var nodeWhoClaimedTheScroll = null;
    function findNativeHandler(params) {
      var domTreeShapes = params.domTreeShapes, pageX = params.pageX, startX = params.startX, axis = params.axis;
      return domTreeShapes.some(function(shape) {
        var goingForward = pageX >= startX;
        if (axis === "x" || axis === "y") {
          goingForward = !goingForward;
        }
        var scrollPosition = Math.round(shape[axisProperties.scrollPosition[axis]]);
        var areNotAtStart = scrollPosition > 0;
        var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];
        if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
          nodeWhoClaimedTheScroll = shape.element;
          return true;
        }
        return false;
      });
    }
    var SwipeableViewsContext = React.createContext();
    exports.SwipeableViewsContext = SwipeableViewsContext;
    if (true) {
      SwipeableViewsContext.displayName = "SwipeableViewsContext";
    }
    var SwipeableViews = function(_React$Component) {
      (0, _inherits2.default)(SwipeableViews2, _React$Component);
      function SwipeableViews2(props) {
        var _this;
        (0, _classCallCheck2.default)(this, SwipeableViews2);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwipeableViews2).call(this, props));
        _this.rootNode = null;
        _this.containerNode = null;
        _this.ignoreNextScrollEvents = false;
        _this.viewLength = 0;
        _this.startX = 0;
        _this.lastX = 0;
        _this.vx = 0;
        _this.startY = 0;
        _this.isSwiping = void 0;
        _this.started = false;
        _this.startIndex = 0;
        _this.transitionListener = null;
        _this.touchMoveListener = null;
        _this.activeSlide = null;
        _this.indexCurrent = null;
        _this.firstRenderTimeout = null;
        _this.setRootNode = function(node) {
          _this.rootNode = node;
        };
        _this.setContainerNode = function(node) {
          _this.containerNode = node;
        };
        _this.setActiveSlide = function(node) {
          _this.activeSlide = node;
          _this.updateHeight();
        };
        _this.handleSwipeStart = function(event) {
          var axis = _this.props.axis;
          var touch = applyRotationMatrix(event.touches[0], axis);
          _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]];
          _this.startX = touch.pageX;
          _this.lastX = touch.pageX;
          _this.vx = 0;
          _this.startY = touch.pageY;
          _this.isSwiping = void 0;
          _this.started = true;
          var computedStyle = window.getComputedStyle(_this.containerNode);
          var transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
          if (transform && transform !== "none") {
            var transformValues = transform.split("(")[1].split(")")[0].split(",");
            var rootStyle = window.getComputedStyle(_this.rootNode);
            var tranformNormalized = applyRotationMatrix({
              pageX: parseInt(transformValues[4], 10),
              pageY: parseInt(transformValues[5], 10)
            }, axis);
            _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
          }
        };
        _this.handleSwipeMove = function(event) {
          if (!_this.started) {
            _this.handleTouchStart(event);
            return;
          }
          if (nodeWhoClaimedTheScroll !== null && nodeWhoClaimedTheScroll !== _this.rootNode) {
            return;
          }
          var _this$props = _this.props, axis = _this$props.axis, children = _this$props.children, ignoreNativeScroll = _this$props.ignoreNativeScroll, onSwitching = _this$props.onSwitching, resistance = _this$props.resistance;
          var touch = applyRotationMatrix(event.touches[0], axis);
          if (_this.isSwiping === void 0) {
            var dx = Math.abs(touch.pageX - _this.startX);
            var dy = Math.abs(touch.pageY - _this.startY);
            var isSwiping = dx > dy && dx > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD;
            if (!resistance && (axis === "y" || axis === "y-reverse") && (_this.indexCurrent === 0 && _this.startX < touch.pageX || _this.indexCurrent === React.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) {
              _this.isSwiping = false;
              return;
            }
            if (dx > dy) {
              event.preventDefault();
            }
            if (isSwiping === true || dy > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD) {
              _this.isSwiping = isSwiping;
              _this.startX = touch.pageX;
              return;
            }
          }
          if (_this.isSwiping !== true) {
            return;
          }
          event.preventDefault();
          _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
          _this.lastX = touch.pageX;
          var _computeIndex = (0, _reactSwipeableViewsCore.computeIndex)({
            children,
            resistance,
            pageX: touch.pageX,
            startIndex: _this.startIndex,
            startX: _this.startX,
            viewLength: _this.viewLength
          }), index = _computeIndex.index, startX = _computeIndex.startX;
          if (nodeWhoClaimedTheScroll === null && !ignoreNativeScroll) {
            var domTreeShapes = getDomTreeShapes(event.target, _this.rootNode);
            var hasFoundNativeHandler = findNativeHandler({
              domTreeShapes,
              startX: _this.startX,
              pageX: touch.pageX,
              axis
            });
            if (hasFoundNativeHandler) {
              return;
            }
          }
          if (startX) {
            _this.startX = startX;
          } else if (nodeWhoClaimedTheScroll === null) {
            nodeWhoClaimedTheScroll = _this.rootNode;
          }
          _this.setIndexCurrent(index);
          var callback = function callback2() {
            if (onSwitching) {
              onSwitching(index, "move");
            }
          };
          if (_this.state.displaySameSlide || !_this.state.isDragging) {
            _this.setState({
              displaySameSlide: false,
              isDragging: true
            }, callback);
          }
          callback();
        };
        _this.handleSwipeEnd = function() {
          nodeWhoClaimedTheScroll = null;
          if (!_this.started) {
            return;
          }
          _this.started = false;
          if (_this.isSwiping !== true) {
            return;
          }
          var indexLatest = _this.state.indexLatest;
          var indexCurrent = _this.indexCurrent;
          var delta = indexLatest - indexCurrent;
          var indexNew;
          if (Math.abs(_this.vx) > _this.props.threshold) {
            if (_this.vx > 0) {
              indexNew = Math.floor(indexCurrent);
            } else {
              indexNew = Math.ceil(indexCurrent);
            }
          } else if (Math.abs(delta) > _this.props.hysteresis) {
            indexNew = delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent);
          } else {
            indexNew = indexLatest;
          }
          var indexMax = React.Children.count(_this.props.children) - 1;
          if (indexNew < 0) {
            indexNew = 0;
          } else if (indexNew > indexMax) {
            indexNew = indexMax;
          }
          _this.setIndexCurrent(indexNew);
          _this.setState({
            indexLatest: indexNew,
            isDragging: false
          }, function() {
            if (_this.props.onSwitching) {
              _this.props.onSwitching(indexNew, "end");
            }
            if (_this.props.onChangeIndex && indexNew !== indexLatest) {
              _this.props.onChangeIndex(indexNew, indexLatest, {
                reason: "swipe"
              });
            }
            if (indexCurrent === indexLatest) {
              _this.handleTransitionEnd();
            }
          });
        };
        _this.handleTouchStart = function(event) {
          if (_this.props.onTouchStart) {
            _this.props.onTouchStart(event);
          }
          _this.handleSwipeStart(event);
        };
        _this.handleTouchEnd = function(event) {
          if (_this.props.onTouchEnd) {
            _this.props.onTouchEnd(event);
          }
          _this.handleSwipeEnd(event);
        };
        _this.handleMouseDown = function(event) {
          if (_this.props.onMouseDown) {
            _this.props.onMouseDown(event);
          }
          event.persist();
          _this.handleSwipeStart(adaptMouse(event));
        };
        _this.handleMouseUp = function(event) {
          if (_this.props.onMouseUp) {
            _this.props.onMouseUp(event);
          }
          _this.handleSwipeEnd(adaptMouse(event));
        };
        _this.handleMouseLeave = function(event) {
          if (_this.props.onMouseLeave) {
            _this.props.onMouseLeave(event);
          }
          if (_this.started) {
            _this.handleSwipeEnd(adaptMouse(event));
          }
        };
        _this.handleMouseMove = function(event) {
          if (_this.props.onMouseMove) {
            _this.props.onMouseMove(event);
          }
          if (_this.started) {
            _this.handleSwipeMove(adaptMouse(event));
          }
        };
        _this.handleScroll = function(event) {
          if (_this.props.onScroll) {
            _this.props.onScroll(event);
          }
          if (event.target !== _this.rootNode) {
            return;
          }
          if (_this.ignoreNextScrollEvents) {
            _this.ignoreNextScrollEvents = false;
            return;
          }
          var indexLatest = _this.state.indexLatest;
          var indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
          _this.ignoreNextScrollEvents = true;
          event.target.scrollLeft = 0;
          if (_this.props.onChangeIndex && indexNew !== indexLatest) {
            _this.props.onChangeIndex(indexNew, indexLatest, {
              reason: "focus"
            });
          }
        };
        _this.updateHeight = function() {
          if (_this.activeSlide !== null) {
            var child = _this.activeSlide.children[0];
            if (child !== void 0 && child.offsetHeight !== void 0 && _this.state.heightLatest !== child.offsetHeight) {
              _this.setState({
                heightLatest: child.offsetHeight
              });
            }
          }
        };
        if (true) {
          (0, _reactSwipeableViewsCore.checkIndexBounds)(props);
        }
        _this.state = {
          indexLatest: props.index,
          // Set to true as soon as the component is swiping.
          // It's the state counter part of this.isSwiping.
          isDragging: false,
          // Help with SSR logic and lazy loading logic.
          renderOnlyActive: !props.disableLazyLoading,
          heightLatest: 0,
          // Let the render method that we are going to display the same slide than previously.
          displaySameSlide: true
        };
        _this.setIndexCurrent(props.index);
        return _this;
      }
      (0, _createClass2.default)(SwipeableViews2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          this.transitionListener = addEventListener(this.containerNode, "transitionend", function(event) {
            if (event.target !== _this2.containerNode) {
              return;
            }
            _this2.handleTransitionEnd();
          });
          this.touchMoveListener = addEventListener(this.rootNode, "touchmove", function(event) {
            if (_this2.props.disabled) {
              return;
            }
            _this2.handleSwipeMove(event);
          }, {
            passive: false
          });
          if (!this.props.disableLazyLoading) {
            this.firstRenderTimeout = setTimeout(function() {
              _this2.setState({
                renderOnlyActive: false
              });
            }, 0);
          }
          if (this.props.action) {
            this.props.action({
              updateHeight: this.updateHeight
            });
          }
        }
        // eslint-disable-next-line camelcase,react/sort-comp
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          var index = nextProps.index;
          if (typeof index === "number" && index !== this.props.index) {
            if (true) {
              (0, _reactSwipeableViewsCore.checkIndexBounds)(nextProps);
            }
            this.setIndexCurrent(index);
            this.setState({
              // If true, we are going to change the children. We shoudn't animate it.
              displaySameSlide: (0, _reactSwipeableViewsCore.getDisplaySameSlide)(this.props, nextProps),
              indexLatest: index
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.transitionListener.remove();
          this.touchMoveListener.remove();
          clearTimeout(this.firstRenderTimeout);
        }
      }, {
        key: "getSwipeableViewsContext",
        value: function getSwipeableViewsContext() {
          var _this3 = this;
          return {
            slideUpdateHeight: function slideUpdateHeight() {
              _this3.updateHeight();
            }
          };
        }
      }, {
        key: "setIndexCurrent",
        value: function setIndexCurrent(indexCurrent) {
          if (!this.props.animateTransitions && this.indexCurrent !== indexCurrent) {
            this.handleTransitionEnd();
          }
          this.indexCurrent = indexCurrent;
          if (this.containerNode) {
            var axis = this.props.axis;
            var transform = axisProperties.transform[axis](indexCurrent * 100);
            this.containerNode.style.WebkitTransform = transform;
            this.containerNode.style.transform = transform;
          }
        }
      }, {
        key: "handleTransitionEnd",
        value: function handleTransitionEnd() {
          if (!this.props.onTransitionEnd) {
            return;
          }
          if (this.state.displaySameSlide) {
            return;
          }
          if (!this.state.isDragging) {
            this.props.onTransitionEnd();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var _this$props2 = this.props, action = _this$props2.action, animateHeight = _this$props2.animateHeight, animateTransitions = _this$props2.animateTransitions, axis = _this$props2.axis, children = _this$props2.children, containerStyleProp = _this$props2.containerStyle, disabled = _this$props2.disabled, disableLazyLoading = _this$props2.disableLazyLoading, enableMouseEvents = _this$props2.enableMouseEvents, hysteresis = _this$props2.hysteresis, ignoreNativeScroll = _this$props2.ignoreNativeScroll, index = _this$props2.index, onChangeIndex = _this$props2.onChangeIndex, onSwitching = _this$props2.onSwitching, onTransitionEnd = _this$props2.onTransitionEnd, resistance = _this$props2.resistance, slideStyleProp = _this$props2.slideStyle, slideClassName = _this$props2.slideClassName, springConfig = _this$props2.springConfig, style = _this$props2.style, threshold = _this$props2.threshold, other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"]);
          var _this$state = this.state, displaySameSlide = _this$state.displaySameSlide, heightLatest = _this$state.heightLatest, indexLatest = _this$state.indexLatest, isDragging = _this$state.isDragging, renderOnlyActive = _this$state.renderOnlyActive;
          var touchEvents = !disabled ? {
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd
          } : {};
          var mouseEvents = !disabled && enableMouseEvents ? {
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseLeave,
            onMouseMove: this.handleMouseMove
          } : {};
          true ? (0, _warning.default)(!animateHeight || !containerStyleProp || !containerStyleProp.height, "react-swipeable-view: You are setting animateHeight to true but you are\nalso providing a custom height.\nThe custom height has a higher priority than the animateHeight property.\nSo animateHeight is most likely having no effect at all.") : void 0;
          var slideStyle = (0, _extends2.default)({}, styles.slide, slideStyleProp);
          var transition;
          var WebkitTransition;
          if (isDragging || !animateTransitions || displaySameSlide) {
            transition = "all 0s ease 0s";
            WebkitTransition = "all 0s ease 0s";
          } else {
            transition = createTransition("transform", springConfig);
            WebkitTransition = createTransition("-webkit-transform", springConfig);
            if (heightLatest !== 0) {
              var additionalTranstion = ", ".concat(createTransition("height", springConfig));
              transition += additionalTranstion;
              WebkitTransition += additionalTranstion;
            }
          }
          var containerStyle = {
            height: null,
            WebkitFlexDirection: axisProperties.flexDirection[axis],
            flexDirection: axisProperties.flexDirection[axis],
            WebkitTransition,
            transition
          };
          if (!renderOnlyActive) {
            var transform = axisProperties.transform[axis](this.indexCurrent * 100);
            containerStyle.WebkitTransform = transform;
            containerStyle.transform = transform;
          }
          if (animateHeight) {
            containerStyle.height = heightLatest;
          }
          return React.createElement(SwipeableViewsContext.Provider, {
            value: this.getSwipeableViewsContext()
          }, React.createElement("div", (0, _extends2.default)({
            ref: this.setRootNode,
            style: (0, _extends2.default)({}, axisProperties.root[axis], style)
          }, other, touchEvents, mouseEvents, {
            onScroll: this.handleScroll
          }), React.createElement("div", {
            ref: this.setContainerNode,
            style: (0, _extends2.default)({}, containerStyle, styles.container, containerStyleProp),
            className: "react-swipeable-view-container"
          }, React.Children.map(children, function(child, indexChild) {
            if (renderOnlyActive && indexChild !== indexLatest) {
              return null;
            }
            true ? (0, _warning.default)(React.isValidElement(child), "react-swipeable-view: one of the children provided is invalid: ".concat(child, ".\n  We are expecting a valid React Element")) : void 0;
            var ref;
            var hidden = true;
            if (indexChild === indexLatest) {
              hidden = false;
              if (animateHeight) {
                ref = _this4.setActiveSlide;
                slideStyle.overflowY = "hidden";
              }
            }
            return React.createElement("div", {
              ref,
              style: slideStyle,
              className: slideClassName,
              "aria-hidden": hidden,
              "data-swipeable": "true"
            }, child);
          }))));
        }
      }]);
      return SwipeableViews2;
    }(React.Component);
    SwipeableViews.displayName = "ReactSwipableView";
    SwipeableViews.propTypes = true ? {
      /**
       * This is callback property. It's called by the component on mount.
       * This is useful when you want to trigger an action programmatically.
       * It currently only supports updateHeight() action.
       *
       * @param {object} actions This object contains all posible actions
       * that can be triggered programmatically.
       */
      action: _propTypes.default.func,
      /**
       * If `true`, the height of the container will be animated to match the current slide height.
       * Animating another style property has a negative impact regarding performance.
       */
      animateHeight: _propTypes.default.bool,
      /**
       * If `false`, changes to the index prop will not cause an animated transition.
       */
      animateTransitions: _propTypes.default.bool,
      /**
       * The axis on which the slides will slide.
       */
      axis: _propTypes.default.oneOf(["x", "x-reverse", "y", "y-reverse"]),
      /**
       * Use this property to provide your slides.
       */
      children: _propTypes.default.node.isRequired,
      /**
       * This is the inlined style that will be applied
       * to each slide container.
       */
      containerStyle: _propTypes.default.object,
      /**
       * If `true`, it will disable touch events.
       * This is useful when you want to prohibit the user from changing slides.
       */
      disabled: _propTypes.default.bool,
      /**
       * This is the config used to disable lazyloding,
       * if `true` will render all the views in first rendering.
       */
      disableLazyLoading: _propTypes.default.bool,
      /**
       * If `true`, it will enable mouse events.
       * This will allow the user to perform the relevant swipe actions with a mouse.
       */
      enableMouseEvents: _propTypes.default.bool,
      /**
       * Configure hysteresis between slides. This value determines how far
       * should user swipe to switch slide.
       */
      hysteresis: _propTypes.default.number,
      /**
       * If `true`, it will ignore native scroll container.
       * It can be used to filter out false positive that blocks the swipe.
       */
      ignoreNativeScroll: _propTypes.default.bool,
      /**
       * This is the index of the slide to show.
       * This is useful when you want to change the default slide shown.
       * Or when you have tabs linked to each slide.
       */
      index: _propTypes.default.number,
      /**
       * This is callback prop. It's call by the
       * component when the shown slide change after a swipe made by the user.
       * This is useful when you have tabs linked to each slide.
       *
       * @param {integer} index This is the current index of the slide.
       * @param {integer} indexLatest This is the oldest index of the slide.
       * @param {object} meta Meta data containing more information about the event.
       */
      onChangeIndex: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseDown: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseLeave: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseMove: _propTypes.default.func,
      /**
       * @ignore
       */
      onMouseUp: _propTypes.default.func,
      /**
       * @ignore
       */
      onScroll: _propTypes.default.func,
      /**
       * This is callback prop. It's called by the
       * component when the slide switching.
       * This is useful when you want to implement something corresponding
       * to the current slide position.
       *
       * @param {integer} index This is the current index of the slide.
       * @param {string} type Can be either `move` or `end`.
       */
      onSwitching: _propTypes.default.func,
      /**
       * @ignore
       */
      onTouchEnd: _propTypes.default.func,
      /**
       * @ignore
       */
      onTouchMove: _propTypes.default.func,
      /**
       * @ignore
       */
      onTouchStart: _propTypes.default.func,
      /**
       * The callback that fires when the animation comes to a rest.
       * This is useful to defer CPU intensive task.
       */
      onTransitionEnd: _propTypes.default.func,
      /**
       * If `true`, it will add bounds effect on the edges.
       */
      resistance: _propTypes.default.bool,
      /**
       * This is the className that will be applied
       * on the slide component.
       */
      slideClassName: _propTypes.default.string,
      /**
       * This is the inlined style that will be applied
       * on the slide component.
       */
      slideStyle: _propTypes.default.object,
      /**
       * This is the config used to create CSS transitions.
       * This is useful to change the dynamic of the transition.
       */
      springConfig: _propTypes.default.shape({
        delay: _propTypes.default.string,
        duration: _propTypes.default.string,
        easeFunction: _propTypes.default.string
      }),
      /**
       * This is the inlined style that will be applied
       * on the root component.
       */
      style: _propTypes.default.object,
      /**
       * This is the threshold used for detecting a quick swipe.
       * If the computed speed is above this value, the index change.
       */
      threshold: _propTypes.default.number
    } : {};
    SwipeableViews.defaultProps = {
      animateHeight: false,
      animateTransitions: true,
      axis: "x",
      disabled: false,
      disableLazyLoading: false,
      enableMouseEvents: false,
      hysteresis: 0.6,
      ignoreNativeScroll: false,
      index: 0,
      threshold: 5,
      springConfig: {
        duration: "0.35s",
        easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
        delay: "0s"
      },
      resistance: false
    };
    var _default = SwipeableViews;
    exports.default = _default;
  }
});

// node_modules/react-swipeable-views/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/react-swipeable-views/lib/index.js"(exports) {
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function get() {
        return _SwipeableViews.default;
      }
    });
    Object.defineProperty(exports, "SwipeableViewsContext", {
      enumerable: true,
      get: function get() {
        return _SwipeableViews.SwipeableViewsContext;
      }
    });
    var _SwipeableViews = _interopRequireWildcard(require_SwipeableViews());
  }
});
export default require_lib2();
//# sourceMappingURL=react-swipeable-views.js.map
