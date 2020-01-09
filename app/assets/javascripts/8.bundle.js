(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./frontend/components/track_form/suggested_input.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/track_form/suggested_input.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SuggestedInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SuggestedInput, _React$Component);

  function SuggestedInput(props) {
    var _this;

    _classCallCheck(this, SuggestedInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SuggestedInput).call(this, props));
    _this.state = {
      term: undefined,
      open: false
    }; // term comes in through props
    // so does search function

    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.fillForm = _this.fillForm.bind(_assertThisInitialized(_this));
    _this.handleOutsideClick = _this.handleOutsideClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SuggestedInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleOutsideClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleOutsideClick);
    }
  }, {
    key: "handleOutsideClick",
    value: function handleOutsideClick(e) {
      if (!e.target.className.includes(this.props.klass)) {
        this.setState({
          open: false
        });
      }

      ;
    }
  }, {
    key: "fillForm",
    value: function fillForm(value) {
      if (this.props.label === "ALBUM" || this.props.label === "BY *") {
        this.setState({
          term: value,
          open: false
        });
      } else {
        var formArray = this.state.term.split(', ');
        formArray[formArray.length - 1] = value;
        this.setState({
          term: formArray.join(', ') + ', ',
          open: false
        });
        this.namedInput.focus();
      }

      this.props.update({
        target: {
          value: value
        }
      });
    }
  }, {
    key: "update",
    value: function update(e) {
      var _this2 = this;

      if (this.props.label === "ALBUM" || this.props.label === "BY *") {
        this.setState({
          term: e.target.value,
          open: true
        }, function () {
          _this2.props.search(_this2.state.term);
        });
      } else {
        var searchArray = e.target.value.split(', ');
        var searchTerm = searchArray[searchArray.length - 1];
        this.setState({
          term: e.target.value,
          open: true
        }, function () {
          _this2.props.search(searchTerm);
        });
      }

      this.props.update(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var resultLis;

      if (this.props.label === "ALBUM") {
        resultLis = this.props.results.map(function (album) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: _this3.props.klass,
            onClick: function onClick() {
              return _this3.fillForm(album.title);
            },
            key: album.id
          }, album.title);
        });
      } else {
        resultLis = this.props.results.map(function (artist) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: _this3.props.klass,
            onClick: function onClick() {
              return _this3.fillForm(artist.name);
            },
            key: artist.id
          }, artist.name);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.klass
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-form-suggested-input ".concat(this.props.klass)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: this.props.klass
      }, this.props.label, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: this.props.klass
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        ref: function ref(input) {
          _this3.namedInput = input;
        },
        className: this.props.klass,
        onChange: this.update,
        value: this.state.term || ''
      })), this.state.term && this.state.open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-form-suggestion ".concat(this.props.klass)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: this.props.klass
      }, resultLis))));
    }
  }]);

  return SuggestedInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (SuggestedInput);

/***/ }),

/***/ "./frontend/components/track_form/track_form.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/track_form/track_form.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _track_form_errors_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track_form_errors_list */ "./frontend/components/track_form/track_form_errors_list.jsx");
/* harmony import */ var _suggested_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggested_input */ "./frontend/components/track_form/suggested_input.jsx");
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





var TrackForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TrackForm, _React$Component);

  function TrackForm(props) {
    var _this;

    _classCallCheck(this, TrackForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrackForm).call(this, props));
    _this.state = {
      artist: undefined,
      name: undefined,
      lyrics: undefined,
      features: undefined,
      producers: undefined,
      writers: undefined,
      date: undefined,
      album: undefined,
      track: undefined
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TrackForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add("dark-body");
      this.props.resetErrors();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove("dark-body");
      this.props.resetErrors();
      this.props.clearSearch();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.submitTrackForm(this.state).then(function (response) {
        return _this2.props.history.push("/tracks/".concat(response.track.id));
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-form-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-form-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Add Song"), this.props.errors.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_track_form_errors_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
        errors: this.props.errors
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "track-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-primary-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Primary Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suggested_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: 'BY *',
        search: this.props.searchArtists,
        update: this.update("artist"),
        results: this.props.searchedArtists,
        klass: 'suggested-artists'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "TITLE *", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.update("name"),
        value: this.state.name || "",
        required: true
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-lyrics-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lyrics *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-lyrics-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        onChange: this.update("lyrics"),
        value: this.state.lyrics || "",
        cols: "40",
        rows: "12"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-secondary-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-form-additional-div"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        id: "track-form-additional"
      }, "Additional ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Metadata")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "* required")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suggested_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: 'FEATURING',
        search: this.props.searchFeatures,
        update: this.update("features"),
        results: this.props.searchedFeatures,
        klass: 'suggested-features'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suggested_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: 'PRODUCED BY',
        search: this.props.searchProducers,
        update: this.update("producers"),
        results: this.props.searchedProducers,
        klass: 'suggested-producers'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suggested_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: 'WRITTEN BY',
        search: this.props.searchWriters,
        update: this.update("writers"),
        results: this.props.searchedWriters,
        klass: 'suggested-writers'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "RELEASE DATE", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.update("date"),
        value: this.state.date || "",
        type: "date"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_suggested_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: 'ALBUM',
        search: this.props.searchAlbums,
        update: this.update("album"),
        results: this.props.searchedAlbums,
        klass: 'suggested-albums'
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "SUBMIT")));
    }
  }]);

  return TrackForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TrackForm);

/***/ }),

/***/ "./frontend/components/track_form/track_form_container.js":
/*!****************************************************************!*\
  !*** ./frontend/components/track_form/track_form_container.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _track_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track_form */ "./frontend/components/track_form/track_form.jsx");
/* harmony import */ var _actions_track_form_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/track_form_actions */ "./frontend/actions/track_form_actions.js");
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/search_actions */ "./frontend/actions/search_actions.js");





var mapStateToProps = function mapStateToProps(_ref) {
  var errors = _ref.errors,
      search = _ref.search;
  return {
    errors: errors.trackForm,
    searchedArtists: search.artists,
    searchedAlbums: search.albums,
    searchedFeatures: search.features,
    searchedProducers: search.producers,
    searchedWriters: search.writers
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submitTrackForm: function submitTrackForm(trackForm) {
      return dispatch(Object(_actions_track_form_actions__WEBPACK_IMPORTED_MODULE_2__["submitTrackForm"])(trackForm));
    },
    resetErrors: function resetErrors() {
      return dispatch(Object(_actions_track_form_actions__WEBPACK_IMPORTED_MODULE_2__["resetTrackFormErrors"])());
    },
    clearSearch: function clearSearch() {
      return dispatch(Object(_actions_search_actions__WEBPACK_IMPORTED_MODULE_3__["clearSearch"])());
    },
    searchAlbums: function searchAlbums(term) {
      return dispatch(Object(_actions_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchAlbums"])(term));
    },
    searchArtists: function searchArtists(term) {
      return dispatch(Object(_actions_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchArtists"])(term));
    },
    searchFeatures: function searchFeatures(term) {
      return dispatch(Object(_actions_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchFeatures"])(term));
    },
    searchProducers: function searchProducers(term) {
      return dispatch(Object(_actions_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchProducers"])(term));
    },
    searchWriters: function searchWriters(term) {
      return dispatch(Object(_actions_search_actions__WEBPACK_IMPORTED_MODULE_3__["searchWriters"])(term));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_track_form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/track_form/track_form_errors_list.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/track_form/track_form_errors_list.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TrackFormErrorsList = function TrackFormErrorsList(props) {
  var errorLis = props.errors.map(function (error, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, error);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "track-form-errors-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.errors.length, " errors prevented the track from being saved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, errorLis));
};

/* harmony default export */ __webpack_exports__["default"] = (TrackFormErrorsList);

/***/ })

}]);
//# sourceMappingURL=8.bundle.js.map