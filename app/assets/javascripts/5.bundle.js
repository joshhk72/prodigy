(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./app/assets/images/default-profile.jpg":
/*!***********************************************!*\
  !*** ./app/assets/images/default-profile.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/assets/webpack-assets/default-profiled4b454201d8e5d578fc43e61426e1fab.jpg");

/***/ }),

/***/ "./frontend/components/user_profile/activity/album.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/user_profile/activity/album.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");




var AlbumActivityPanel = function AlbumActivityPanel(props) {
  var activity = props.activity,
      username = props.username;
  var album = activity.trackable;
  var style = {
    backgroundImage: "url(".concat(album.image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "activity-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/albums/".concat(album.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-image",
    style: style
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " updated the album page for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, album.title), ".")));
};

/* harmony default export */ __webpack_exports__["default"] = (AlbumActivityPanel);

/***/ }),

/***/ "./frontend/components/user_profile/activity/artist.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/user_profile/activity/artist.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");




var ArtistActivityPanel = function ArtistActivityPanel(props) {
  var activity = props.activity,
      username = props.username;
  var artist = activity.trackable;
  var style = {
    backgroundImage: "url(".concat(artist.image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "activity-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/artists/".concat(artist.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-image",
    style: style
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " updated the artist page for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, artist.name), ".")));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtistActivityPanel);

/***/ }),

/***/ "./frontend/components/user_profile/activity/other.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/user_profile/activity/other.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");




var OtherActivityPanel = function OtherActivityPanel(props) {
  var activity = props.activity,
      username = props.username;
  var trackable = activity.trackable;
  var track = trackable.track;
  var style = {
    backgroundImage: "url(".concat(track.image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
  };
  var textComponent;

  switch (activity.key) {
    case "question.create":
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " asked a question for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
      break;

    case "answer.create":
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " answered a question for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
      break;

    case "answer.update":
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " edited an answer to a question for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
      break;

    case "comment.create":
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " commented on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
      break;

    case "annotation.create":
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " added an annotation to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
      break;

    case "annotation.update":
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " updated an annotation for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
      break;

    case "upvote.create":
      if (trackable.upvotable_type === "Comment") {
        if (trackable.value === 1) {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " upvoted a comment for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        } else {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " downvoted a comment for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        }
      } else {
        if (trackable.value === 1) {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " upvoted an annotation for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        } else {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " downvoted an annotation for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        }
      }

      break;

    case "upvote.update":
      if (trackable.upvotable_type === "Comment") {
        if (trackable.value === 1) {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " upvoted a comment for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        } else {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " downvoted a comment for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        }
      } else {
        if (trackable.value === 1) {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " upvoted an annotation for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        } else {
          textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " downvoted an annotation for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
        }
      }

      break;

    default:
      textComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null);
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "activity-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/tracks/".concat(track.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: "activity-image"
  }), textComponent));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherActivityPanel);

/***/ }),

/***/ "./frontend/components/user_profile/activity/panel.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/user_profile/activity/panel.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ "./frontend/components/user_profile/activity/album.jsx");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./frontend/components/user_profile/activity/track.jsx");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist */ "./frontend/components/user_profile/activity/artist.jsx");
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other */ "./frontend/components/user_profile/activity/other.jsx");






var ActivityPanel = function ActivityPanel(props) {
  var activity = props.activity,
      username = props.username;

  switch (activity.trackable_type) {
    case "Album":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_album__WEBPACK_IMPORTED_MODULE_1__["default"], {
        username: username,
        activity: activity
      });

    case "Artist":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist__WEBPACK_IMPORTED_MODULE_3__["default"], {
        username: username,
        activity: activity
      });

    case "Track":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_track__WEBPACK_IMPORTED_MODULE_2__["default"], {
        username: username,
        activity: activity
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other__WEBPACK_IMPORTED_MODULE_4__["default"], {
        username: username,
        activity: activity
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityPanel);

/***/ }),

/***/ "./frontend/components/user_profile/activity/track.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/user_profile/activity/track.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");




var TrackActivityPanel = function TrackActivityPanel(props) {
  var activity = props.activity,
      username = props.username;
  var track = activity.trackable;
  var textComponent = activity.key === "track.create" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " created a track page for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), "!") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, username, " updated the track page for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, track.name), ".");
  var style = {
    backgroundImage: "url(".concat(track.image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "activity-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/tracks/".concat(track.id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-image",
    style: style
  }), textComponent));
};

/* harmony default export */ __webpack_exports__["default"] = (TrackActivityPanel);

/***/ }),

/***/ "./frontend/components/user_profile/activity_section.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/user_profile/activity_section.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_panel */ "./frontend/components/user_profile/date_panel.jsx");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_3__);





var ActivitySection = function ActivitySection(props) {
  var activities = props.activities,
      username = props.username;
  var filtered = {};
  var dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  activities.forEach(function (activity) {
    var date = new Date(activity.created_at).toLocaleDateString(undefined, dateOptions);

    if (!(date in filtered)) {
      filtered[date] = [activity];
    } else {
      filtered[date].push(activity);
    }
  });
  var datePanels = Object.keys(filtered).sort(function (d1, d2) {
    return new Date(d2) - new Date(d1);
  }).map(function (d) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: d,
      date: d,
      username: username,
      activities: filtered[d]
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_2___default.a, {
    pageStart: 1,
    initialLoad: false,
    loadMore: props.fetchPage,
    hasMore: !props.last,
    loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "activity-loading",
      type: "spin",
      color: "black",
      height: 50,
      width: 50
    }),
    element: "ul",
    className: "activities-date-list",
    threshold: 0
  }, datePanels));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivitySection);

/***/ }),

/***/ "./frontend/components/user_profile/date_panel.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/user_profile/date_panel.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activity_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity/panel */ "./frontend/components/user_profile/activity/panel.jsx");



var DatePanel = function DatePanel(props) {
  var activities = props.activities,
      date = props.date,
      username = props.username;
  var activityPanels = activities.sort(function (a, b) {
    return new Date(a.created_at) - new Date(b.created_at);
  }).map(function (activity) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activity_panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      username: username,
      activity: activity,
      key: activity.id + 300
    });
  }).reverse();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "activities-date-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "date-activities-list"
  }, activityPanels));
};

/* harmony default export */ __webpack_exports__["default"] = (DatePanel);

/***/ }),

/***/ "./frontend/components/user_profile/user_profile.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/user_profile/user_profile.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _activity_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity_section */ "./frontend/components/user_profile/activity_section.jsx");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fade-in */ "./node_modules/react-fade-in/lib/index.js");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fade_in__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_default_profile_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/default-profile.jpg */ "./app/assets/images/default-profile.jpg");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var UserProfile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserProfile, _React$Component);

  function UserProfile(props) {
    var _this;

    _classCallCheck(this, UserProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserProfile).call(this, props));
    _this.handleModal = _this.handleModal.bind(_assertThisInitialized(_this));
    _this.state = {
      username: "User Does Not Exist",
      description: undefined,
      done: false
    };
    _this.fetchPage = _this.fetchPage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.clearActivities();
      this.props.fetchUser(this.props.match.params.userId).then(function (res) {
        _this2.props.fetchActivityPage(res.user.id, 1).then(function (action) {
          return _this2.setState({
            done: true,
            last: action.res.last
          });
        });
      }, function () {
        return _this2.setState({
          done: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.props.clearActivities();
        this.setState({
          done: false
        }, function () {
          _this3.props.fetchUser(_this3.props.match.params.userId).then(function (res) {
            _this3.props.fetchActivityPage(res.user.id, 1).then(function (action) {
              return _this3.setState({
                done: true,
                last: action.res.last
              });
            });
          }, function () {
            return _this3.setState({
              done: true
            });
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.clearActivities();
    }
  }, {
    key: "handleModal",
    value: function handleModal(e) {
      e.preventDefault();
      this.props.openModal('userEdit');
    }
  }, {
    key: "fetchPage",
    value: function fetchPage(page) {
      var _this4 = this;

      if (this.state.last) return;
      this.props.fetchActivityPage(this.props.match.params.userId, page).then(function (action) {
        return _this4.setState({
          last: action.res.last
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.done) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "bars",
          color: "white"
        });
      } else if (this.props.user === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "no-tracks-shown"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Error!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The user you are looking for does not exist!"));
      }

      ;
      var _this$props = this.props,
          user = _this$props.user,
          activities = _this$props.activities;
      var bannerStyle = {
        backgroundImage: "url(".concat(this.props.user.image_url, ")")
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-grid-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-banner",
        style: this.props.user.image_url ? bannerStyle : null
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "profile-picture-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "profile-picture",
        src: this.props.user.image_url || assets_images_default_profile_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
        onError: function onError(e) {
          return e.target.src = assets_images_default_profile_jpg__WEBPACK_IMPORTED_MODULE_4__["default"];
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-column-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "profile-name"
      }, "@", this.props.user.username), this.props.currentUserPage === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal,
        className: "profile-button modal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-pencil-alt"
      }), " Edit") : this.props.currentUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "profile-button"
      }, "Follow") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "profile-description"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "profile-description"
      }, this.props.user.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-column-2"
      }, activities && activities.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_activity_section__WEBPACK_IMPORTED_MODULE_1__["default"], {
        activities: activities,
        username: user.username,
        fetchPage: this.fetchPage,
        last: this.state.last
      }), activities.length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "no-activities"
      }, "The user has no activities yet.")));
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./frontend/components/user_profile/user_profile_container.js":
/*!********************************************************************!*\
  !*** ./frontend/components/user_profile/user_profile_container.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_profile */ "./frontend/components/user_profile/user_profile.jsx");
/* harmony import */ var _actions_activity_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/activity_actions */ "./frontend/actions/activity_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var entities = _ref.entities,
      session = _ref.session;
  return {
    user: entities.users[ownProps.match.params.userId],
    currentUserPage: Boolean(parseInt(ownProps.match.params.userId) === parseInt(session.id)),
    currentUser: Boolean(session.id),
    activities: entities.activities
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchActivityPage: function fetchActivityPage(userId, page) {
      return dispatch(Object(_actions_activity_actions__WEBPACK_IMPORTED_MODULE_2__["fetchActivityPage"])(userId, page));
    },
    clearActivities: function clearActivities() {
      return dispatch(Object(_actions_activity_actions__WEBPACK_IMPORTED_MODULE_2__["clearActivities"])());
    },
    fetchUser: function fetchUser(id) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["fetchUser"])(id));
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["openModal"])(modal));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_user_profile__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map