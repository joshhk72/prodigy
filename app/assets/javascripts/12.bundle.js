(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./frontend/components/modals/album_form.jsx":
/*!***************************************************!*\
  !*** ./frontend/components/modals/album_form.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AlbumForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlbumForm, _React$Component);

  function AlbumForm(props) {
    var _this;

    _classCallCheck(this, AlbumForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AlbumForm).call(this, props));
    _this.state = _this.props.currentAlbum;
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AlbumForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        this.props.closeModal();
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateAlbum(this.state).then(this.props.closeModal());
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "album-form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Album Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("title"),
        value: this.state.title || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Album Image", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("image_url"),
        value: this.state.image_url || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Banner Image", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("banner_image_url"),
        value: this.state.banner_image_url || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        onChange: this.update("description"),
        value: this.state.description || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Save"));
    }
  }]);

  return AlbumForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AlbumForm);

/***/ }),

/***/ "./frontend/components/modals/album_form_container.js":
/*!************************************************************!*\
  !*** ./frontend/components/modals/album_form_container.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _album_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album_form */ "./frontend/components/modals/album_form.jsx");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/album_actions */ "./frontend/actions/album_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var mapStateToProps = function mapStateToProps(state) {
  return {
    currentAlbum: Object.values(state.entities.albums)[0]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])());
    },
    updateAlbum: function updateAlbum(album) {
      return dispatch(Object(_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__["updateAlbum"])(album));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_album_form__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/modals/artist_form.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/modals/artist_form.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ArtistForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistForm, _React$Component);

  function ArtistForm(props) {
    var _this;

    _classCallCheck(this, ArtistForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArtistForm).call(this, props));
    _this.state = _this.props.currentArtist;
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ArtistForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        this.props.closeModal();
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateArtist(this.state).then(this.props.closeModal());
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "artist-form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Artist Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("name"),
        value: this.state.name || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Profile Image", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("image_url"),
        value: this.state.image_url || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Banner Image", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("banner_image_url"),
        value: this.state.banner_image_url || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        onChange: this.update("description"),
        value: this.state.description || ''
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Save"));
    }
  }]);

  return ArtistForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (ArtistForm);

/***/ }),

/***/ "./frontend/components/modals/artist_form_container.js":
/*!*************************************************************!*\
  !*** ./frontend/components/modals/artist_form_container.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _artist_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist_form */ "./frontend/components/modals/artist_form.jsx");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/artist_actions */ "./frontend/actions/artist_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var mapStateToProps = function mapStateToProps(state) {
  return {
    currentArtist: Object.values(state.entities.artists)[0]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])());
    },
    updateArtist: function updateArtist(artist) {
      return dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["updateArtist"])(artist));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_artist_form__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/modals/modal.jsx":
/*!**********************************************!*\
  !*** ./frontend/components/modals/modal.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _track_edit_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track_edit_form_container */ "./frontend/components/modals/track_edit_form_container.js");
/* harmony import */ var _profile_form_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile_form_container */ "./frontend/components/modals/profile_form_container.js");
/* harmony import */ var _artist_form_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist_form_container */ "./frontend/components/modals/artist_form_container.js");
/* harmony import */ var _album_form_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./album_form_container */ "./frontend/components/modals/album_form_container.js");








function Modal(_ref) {
  var modal = _ref.modal,
      closeModal = _ref.closeModal;

  if (!modal) {
    return null;
  }

  var component;

  switch (modal) {
    case 'trackEdit':
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_track_edit_form_container__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      break;

    case 'userEdit':
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profile_form_container__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      break;

    case 'artistEdit':
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_form_container__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      break;

    case 'albumEdit':
      component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_album_form_container__WEBPACK_IMPORTED_MODULE_6__["default"], null);
      break;

    default:
      return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-background",
    onMouseDown: closeModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-child",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    }
  }, component));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    modal: state.modal
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Modal));

/***/ }),

/***/ "./frontend/components/modals/profile_form.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/modals/profile_form.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProfileForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileForm, _React$Component);

  function ProfileForm(props) {
    var _this;

    _classCallCheck(this, ProfileForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileForm).call(this, props));
    _this.state = props.user;
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProfileForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.updateUser(this.state).then(function () {
        return _this2.props.closeModal();
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this3 = this;

      return function (e) {
        _this3.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.user !== undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "modal-container modal-hide",
          id: "profile-modal-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.handleSubmit,
          className: "profile-modal-form modal-hide",
          id: "modal-form"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Change Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          onChange: this.update("username"),
          value: this.state.username
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Change Profile Pic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          onChange: this.update("image_url"),
          value: this.state.image_url
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Change Bio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          cols: "30",
          rows: "5",
          onChange: this.update("description"),
          value: this.state.description || ''
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Change Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          onChange: this.update("email"),
          value: this.state.email
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Save")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }
    }
  }]);

  return ProfileForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);

/***/ }),

/***/ "./frontend/components/modals/profile_form_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/modals/profile_form_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile_form */ "./frontend/components/modals/profile_form.jsx");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");





var mapStateToProps = function mapStateToProps(_ref) {
  var entities = _ref.entities,
      session = _ref.session;
  return {
    user: entities.users[session.id]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUser: function updateUser(user) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(user));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_profile_form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modals/track_edit_form.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/modals/track_edit_form.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TrackEditForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TrackEditForm, _React$Component);

  function TrackEditForm(props) {
    var _this;

    _classCallCheck(this, TrackEditForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrackEditForm).call(this, props));
    var currentTrack = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, props.currentTrack);

    if (currentTrack !== undefined) {
      currentTrack.artist = currentTrack.artist.name;
      currentTrack.features = currentTrack.features.map(function (artist) {
        return artist.name;
      });
      currentTrack.producers = currentTrack.producers.map(function (artist) {
        return artist.name;
      });
      currentTrack.writers = currentTrack.writers.map(function (artist) {
        return artist.name;
      });
      if (currentTrack.album) currentTrack.album = currentTrack.album.title;
    }

    ;
    _this.state = currentTrack;
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TrackEditForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        this.props.closeModal();
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var submission = Object.assign({}, this.state);
      submission.id = this.props.currentTrack.id;
      submission.features = submission.features.join(', ');
      submission.producers = submission.producers.join(', ');
      submission.writers = submission.writers.join(', ');
      this.props.updateTrackForm(submission).then(function () {
        _this2.props.closeModal();
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this3 = this;

      return function (e) {
        _this3.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "updateArtists",
    value: function updateArtists(field) {
      var _this4 = this;

      return function (e) {
        _this4.setState(_defineProperty({}, field, e.target.value.split(', ')));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var form = this.props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-container",
        id: "track-modal-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "track-modal-form modal-hide",
        id: "modal-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-modal-tab"
      }, "TITLE AND ARTISTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-modal-subform",
        id: "subform-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-1-input"
      }, "TITLE", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("name"),
        value: this.state.name || ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-1-input"
      }, "ARTIST", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("artist"),
        value: this.state.artist || ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-1-input"
      }, "FEATURING", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.updateArtists("features"),
        value: this.state.features ? this.state.features.join(', ') : ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-1-input"
      }, "WRITTEN BY", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.updateArtists("writers"),
        value: this.state.writers ? this.state.writers.join(', ') : ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-1-input"
      }, "PRODUCED BY", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.updateArtists("producers"),
        value: this.state.producers ? this.state.producers.join(', ') : ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-modal-tab"
      }, "AUDIO, VIDEO & IMAGES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-modal-subform"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-2-input"
      }, "SONG ART URL", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("image_url"),
        value: this.state.image_url || ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "subform-1-input"
      }, "YOUTUBE URL", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("youtube_url"),
        value: this.state.youtube_url || ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-modal-tab"
      }, "ALBUMS, DATE & TAGS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-modal-subform"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "ALBUM", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("album"),
        value: this.state.album || ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "DATE", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "track-modal-date",
        type: "date",
        onChange: this.update("date"),
        value: this.state.date || ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Save"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      return form;
    }
  }]);

  return TrackEditForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TrackEditForm);

/***/ }),

/***/ "./frontend/components/modals/track_edit_form_container.js":
/*!*****************************************************************!*\
  !*** ./frontend/components/modals/track_edit_form_container.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _track_edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track_edit_form */ "./frontend/components/modals/track_edit_form.jsx");
/* harmony import */ var _actions_track_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/track_actions */ "./frontend/actions/track_actions.js");
/* harmony import */ var _actions_track_form_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/track_form_actions */ "./frontend/actions/track_form_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentTrack: state.entities.tracks[ownProps.location.pathname.split('/')[2]],
    loggedIn: Boolean(state.session.id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchTrack: function fetchTrack(id) {
      return dispatch(Object(_actions_track_actions__WEBPACK_IMPORTED_MODULE_2__["fetchTrack"])(id));
    },
    updateTrackForm: function updateTrackForm(trackForm) {
      return dispatch(Object(_actions_track_form_actions__WEBPACK_IMPORTED_MODULE_3__["updateTrackForm"])(trackForm));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_track_edit_form__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ })

}]);
//# sourceMappingURL=12.bundle.js.map