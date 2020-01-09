(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./frontend/components/album_show/show.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/album_show/show.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _track_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track_panel */ "./frontend/components/album_show/track_panel.jsx");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var AlbumShow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlbumShow, _React$Component);

  function AlbumShow(props) {
    var _this;

    _classCallCheck(this, AlbumShow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AlbumShow).call(this, props));
    _this.state = {
      done: false
    };
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.handleImageError = _this.handleImageError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AlbumShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.clearAlbums();
      this.props.fetchAlbum(this.props.match.params.albumId).then(function () {
        return _this2.setState({
          done: true
        });
      });
    }
  }, {
    key: "handleImageError",
    value: function handleImageError(e) {
      e.target.src = assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.props.openModal('albumEdit');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.done) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "bars",
          color: "white"
        });
      } else if (this.props.currentAlbum === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "no-tracks-shown"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Error!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The album you are looking for does not exist!"));
      }

      ;
      var _this$props$currentAl = this.props.currentAlbum,
          image_url = _this$props$currentAl.image_url,
          banner_image_url = _this$props$currentAl.banner_image_url,
          description = _this$props$currentAl.description,
          artist = _this$props$currentAl.artist,
          title = _this$props$currentAl.title,
          tracks = _this$props$currentAl.tracks;
      var bannerImage;

      if (banner_image_url) {
        bannerImage = banner_image_url;
      } else if (image_url) {
        bannerImage = image_url;
      }

      var heroStyle = {
        backgroundImage: bannerImage ? "url(".concat(bannerImage, ")") : ""
      };
      var trackLis = tracks.map(function (track) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_track_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: track.id,
          track: track
        });
      });
      var descParagraphs;
      if (description) descParagraphs = description.split(/\r?\n/).map(function (paragraph, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: 500 + i
        }, paragraph);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "album-show-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        id: "album-show-hero",
        style: heroStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "album-show-hero-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-show-image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "album-show-image",
        onError: this.handleImageError,
        src: image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-show-header-info-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Album"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/artists/".concat(artist.id)
      }, artist.name))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-show-main-col-1"
      }, this.props.loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.props.openModal("albumEdit");
        }
      }, "Edit Album"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title, " Tracklist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, trackLis)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-show-main-col-2"
      }, description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-show-description"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "About ", title), descParagraphs))));
    }
  }]);

  return AlbumShow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AlbumShow);

/***/ }),

/***/ "./frontend/components/album_show/show_container.js":
/*!**********************************************************!*\
  !*** ./frontend/components/album_show/show_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show */ "./frontend/components/album_show/show.jsx");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/album_actions */ "./frontend/actions/album_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    loggedIn: Boolean(state.session.id),
    currentAlbum: state.entities.albums[ownProps.match.params.albumId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAlbum: function fetchAlbum(id) {
      return dispatch(Object(_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAlbum"])(id));
    },
    clearAlbums: function clearAlbums() {
      return dispatch(Object(_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__["clearAlbums"])());
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["openModal"])(modal));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_show__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ }),

/***/ "./frontend/components/album_show/track_panel.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/album_show/track_panel.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var TrackPanel = function TrackPanel(props) {
  var _props$track = props.track,
      name = _props$track.name,
      id = _props$track.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "album-show-track-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/tracks/".concat(id)
  }, name));
};

/* harmony default export */ __webpack_exports__["default"] = (TrackPanel);

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map