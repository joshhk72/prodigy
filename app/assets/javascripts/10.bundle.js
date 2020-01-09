(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./frontend/components/session_form/session_form.js":
/*!**********************************************************!*\
  !*** ./frontend/components/session_form/session_form.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SessionForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SessionForm, _React$Component);

  function SessionForm(props) {
    var _this;

    _classCallCheck(this, SessionForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SessionForm).call(this, props));
    _this.state = {
      username: "",
      password: "",
      email: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.demoLogin = _this.demoLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SessionForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add("dark-body");
      this.props.resetSessionErrors();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove("dark-body");
      this.props.resetSessionErrors();
    }
  }, {
    key: "demoLogin",
    value: function demoLogin(e) {
      var _this2 = this;

      e.preventDefault();
      var user = {
        username: "user1",
        password: "555555"
      };
      this.props.submitForm(user).then(function () {
        return _this2.props.history.goBack();
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var user = Object.assign({}, this.state);
      this.props.submitForm(user).then(function () {
        return _this3.props.history.goBack();
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this4 = this;

      return function (e) {
        _this4.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.props.formType === "login" ? ["Sign up here.", "Sign In", "Login", "/signup", "Don't"] : ["Sign in here.", "Sign Up", "Create Account", "/login", "Already"],
          _ref2 = _slicedToArray(_ref, 5),
          linkText = _ref2[0],
          headText = _ref2[1],
          buttonText = _ref2[2],
          altLinkUrl = _ref2[3],
          altText = _ref2[4];

      var errorLis = this.props.errors.map(function (error, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i
        }, error);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-form-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, headText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "session-form"
      }, this.props.errors.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-error-list-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Whoops"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There must be some mistake"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "session-error-list"
      }, errorLis)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Genius Username", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.username,
        onChange: this.update("username")
      })), this.props.formType === 'signup' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.email,
        onChange: this.update("email")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        onChange: this.update("password")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, buttonText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "alternative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, altText, " have an account? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: altLinkUrl
      }, linkText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.props.formType === "login" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "demo",
        onClick: this.demoLogin
      }, "Use a Demo Account Instead")));
    }
  }]);

  return SessionForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SessionForm);

/***/ }),

/***/ "./frontend/components/session_form/signup_form_container.js":
/*!*******************************************************************!*\
  !*** ./frontend/components/session_form/signup_form_container.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_form */ "./frontend/components/session_form/session_form.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors.session,
    formType: 'signup'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submitForm: function submitForm(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["signup"])(user));
    },
    resetSessionErrors: function resetSessionErrors() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["resetSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_session_form__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map