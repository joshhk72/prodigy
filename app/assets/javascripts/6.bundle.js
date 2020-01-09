(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./frontend/components/artist_show/album_li.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/artist_show/album_li.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var ArtistAlbumLi = function ArtistAlbumLi(props) {
  var _props$album = props.album,
      image_url = _props$album.image_url,
      title = _props$album.title,
      id = _props$album.id,
      date = _props$album.date;
  var year;
  if (date) year = date.split("-")[0];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "artist-album-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/albums/".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "artist-album-li-image-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image_url || null,
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), year && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, year)));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtistAlbumLi);

/***/ }),

/***/ "./frontend/components/artist_show/show.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/artist_show/show.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fade-in */ "./node_modules/react-fade-in/lib/index.js");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fade_in__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _track_li__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track_li */ "./frontend/components/artist_show/track_li.jsx");
/* harmony import */ var _album_li__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album_li */ "./frontend/components/artist_show/album_li.jsx");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ArtistShow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistShow, _React$Component);

  function ArtistShow(props) {
    var _this;

    _classCallCheck(this, ArtistShow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArtistShow).call(this, props));
    _this.state = {
      done: false
    };
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ArtistShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.clearArtists();
      this.props.fetchArtist(this.props.match.params.artistId).then(function () {
        return _this2.setState({
          done: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.match.params.artistId !== prevProps.match.params.artistId) {
        this.props.clearArtists();
        this.props.fetchArtist(this.props.match.params.artistId).then(function () {
          return _this3.setState({
            done: true
          });
        });
      }

      ;
    }
  }, {
    key: "handleImageError",
    value: function handleImageError(e) {
      e.target.src = assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.props.openModal('artistEdit');
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.done) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "bars",
          color: "white"
        });
      } else if (this.props.currentArtist === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "no-tracks-shown"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Error!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The artist you are looking for does not exist!"));
      }

      ;
      var _this$props$currentAr = this.props.currentArtist,
          albums = _this$props$currentAr.albums,
          tracks = _this$props$currentAr.tracks,
          name = _this$props$currentAr.name,
          description = _this$props$currentAr.description,
          image_url = _this$props$currentAr.image_url,
          banner_image_url = _this$props$currentAr.banner_image_url;
      var bannerImage;

      if (banner_image_url) {
        bannerImage = banner_image_url;
      } else if (image_url) {
        bannerImage = image_url;
      }

      var heroStyle = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" + (bannerImage ? ",url(".concat(bannerImage, ")") : "")
      };
      var descParagraphs;
      if (description) descParagraphs = description.split(/\r?\n/).map(function (paragraph, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: 500 + i
        }, paragraph);
      });
      var trackLis = tracks.map(function (track) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_track_li__WEBPACK_IMPORTED_MODULE_3__["default"], {
          track: track,
          key: track.id
        });
      });
      var albumLis = albums.map(function (album) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_album_li__WEBPACK_IMPORTED_MODULE_4__["default"], {
          album: album,
          key: album.id
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "artist-show-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "artist-show-header",
        id: "artist-hero-image",
        style: heroStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "artist-show-header-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "artist-show-image",
        onError: this.handleImageError,
        src: "".concat(image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_5__["default"])
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "artist-show-main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-column-first"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-main-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, name), this.props.loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.openModal,
        className: "artist-edit-button"
      }, "Edit Artist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "About \"".concat(name, "\"")), descParagraphs)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-column-second"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-tracks"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, name, " Songs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "artist-show-track-panel"
      }, trackLis)), albums && albums.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist-show-albums"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, name, " Albums"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "artist-show-album-panel"
      }, albumLis)))));
    }
  }]);

  return ArtistShow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ArtistShow);

/***/ }),

/***/ "./frontend/components/artist_show/show_container.js":
/*!***********************************************************!*\
  !*** ./frontend/components/artist_show/show_container.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show */ "./frontend/components/artist_show/show.jsx");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/artist_actions */ "./frontend/actions/artist_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    loggedIn: Boolean(state.session.id),
    currentArtist: state.entities.artists[ownProps.match.params.artistId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchArtist: function fetchArtist(id) {
      return dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__["fetchArtist"])(id));
    },
    clearArtists: function clearArtists() {
      return dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__["clearArtists"])());
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["openModal"])(modal));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_show__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ }),

/***/ "./frontend/components/artist_show/track_li.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/artist_show/track_li.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var ArtistTrackLi = function ArtistTrackLi(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "artist-track-li"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/tracks/".concat(props.track.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "artist-track-panel-image",
    src: props.track.image_url
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.track.name)));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtistTrackLi);

/***/ }),

/***/ "./node_modules/react-fade-in/lib/FadeIn.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fade-in/lib/FadeIn.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeIn = function (_Component) {
  _inherits(FadeIn, _Component);

  function FadeIn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FadeIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FadeIn.__proto__ || Object.getPrototypeOf(FadeIn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      maxIsVisible: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FadeIn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var count = _react2.default.Children.count(this.props.children);
      var i = 0;
      this.interval = setInterval(function () {
        i++;
        if (i > count) clearInterval(_this2.interval);

        _this2.setState({ maxIsVisible: i });
      }, this.delay);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var transitionDuration = this.transitionDuration;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.Children.map(this.props.children, function (child, i) {
          return _react2.default.createElement(
            "div",
            {
              style: {
                transition: "opacity " + transitionDuration + "ms, top " + transitionDuration + "ms",
                position: "relative",
                top: _this3.state.maxIsVisible > i ? 0 : 20,
                opacity: _this3.state.maxIsVisible > i ? 1 : 0
              }
            },
            child
          );
        })
      );
    }
  }, {
    key: "delay",
    get: function get() {
      return this.props.delay || 50;
    }
  }, {
    key: "transitionDuration",
    get: function get() {
      return this.props.transitionDuration || 400;
    }
  }]);

  return FadeIn;
}(_react.Component);

exports.default = FadeIn;

/***/ }),

/***/ "./node_modules/react-fade-in/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-fade-in/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FadeIn = __webpack_require__(/*! ./FadeIn */ "./node_modules/react-fade-in/lib/FadeIn.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FadeIn).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map