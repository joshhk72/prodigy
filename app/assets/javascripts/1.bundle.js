(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./frontend/components/track_show/artist_link.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/track_show/artist_link.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var TrackArtistLink = function TrackArtistLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/artists/".concat(props.artist.id)
  }, props.artist.name);
};

/* harmony default export */ __webpack_exports__["default"] = (TrackArtistLink);

/***/ }),

/***/ "./frontend/components/track_show/comments/column.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/track_show/comments/column.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _list_item_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list_item_container */ "./frontend/components/track_show/comments/list_item_container.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./frontend/components/track_show/comments/form.jsx");






var CommentColumn = function CommentColumn(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var comments = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.comments;
  });
  var currentUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.users[state.session.id];
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__["clearComments"])());
    dispatch(Object(_actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__["fetchTrackComments"])(props.currentTrack.id));
  }, []);
  var commentLis = Object.values(comments).map(function (comment) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_item_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      comment: comment,
      key: comment.id
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comments-column"
  }, currentUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    trackId: props.currentTrack.id,
    author: currentUser
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "comments-list"
  }, commentLis));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentColumn);

/***/ }),

/***/ "./frontend/components/track_show/comments/form.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/track_show/comments/form.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var CommentForm = function CommentForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      commenting = _useState2[0],
      setCommenting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      body = _useState4[0],
      setBody = _useState4[1];

  var author = props.author,
      trackId = props.trackId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var area = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (area.current) area.current.focus();
  }, [commenting]);

  var submitComment = function submitComment(e) {
    e.preventDefault();
    dispatch(Object(_actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__["createComment"])({
      body: body,
      author_id: author.id,
      track_id: trackId
    })).then(function () {
      return setBody('');
    });
  };

  var preform = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment-form-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "Add a comment",
    className: "comment-pre",
    type: "text",
    onMouseDown: function onMouseDown() {
      setCommenting(true);
      setBody('');
    }
  }));
  var form = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment-form-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: submitComment
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    placeholder: "Add a comment",
    className: "comment-input",
    onChange: function onChange(e) {
      return setBody(e.target.value);
    },
    ref: area,
    value: body
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Submit")));
  return commenting ? form : preform;
};

/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./frontend/components/track_show/comments/list_item.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/track_show/comments/list_item.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/upvote_util */ "./frontend/util/upvote_util.js");
/* harmony import */ var assets_images_default_profile_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/default-profile.jpg */ "./app/assets/images/default-profile.jpg");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CommentListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentListItem, _React$Component);

  function CommentListItem(props) {
    var _this;

    _classCallCheck(this, CommentListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentListItem).call(this, props));
    _this.upvote = _this.upvote.bind(_assertThisInitialized(_this));
    _this.downvote = _this.downvote.bind(_assertThisInitialized(_this));
    _this.reverseUpvote = _this.reverseUpvote.bind(_assertThisInitialized(_this));
    _this.deleteUpvote = _this.deleteUpvote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CommentListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchCommentUpvotes(this.props.comment.id);
    }
  }, {
    key: "upvote",
    value: function upvote() {
      var id = this.props.comment.id;
      var currentUser = this.props.currentUser;
      this.props.createUpvote({
        value: 1,
        user_id: currentUser.id,
        upvotable_type: "Comment",
        upvotable_id: id
      });
    }
  }, {
    key: "downvote",
    value: function downvote() {
      var id = this.props.comment.id;
      var currentUser = this.props.currentUser;
      this.props.createUpvote({
        value: -1,
        user_id: currentUser.id,
        upvotable_type: "Comment",
        upvotable_id: id
      });
    }
  }, {
    key: "reverseUpvote",
    value: function reverseUpvote() {
      this.props.reverseUpvote(this.currentUpvote.id);
    }
  }, {
    key: "deleteUpvote",
    value: function deleteUpvote() {
      this.props.deleteUpvote(this.currentUpvote.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$comment = this.props.comment,
          username = _this$props$comment.username,
          body = _this$props$comment.body,
          profile_img = _this$props$comment.profile_img,
          date = _this$props$comment.date,
          id = _this$props$comment.id,
          author_id = _this$props$comment.author_id;
      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          deleteComment = _this$props.deleteComment,
          upvotes = _this$props.upvotes;
      var deleteButton = currentUser && currentUser.id === author_id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          var result = confirm("Delete this comment?");
          if (result) deleteComment(id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-trash-alt"
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null); // For handling upvotes. This is streamlined since upvotes are implemented
      // for many things across Prodigy (and also Genius). 

      var commentUpvotes = _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__["commentUpvotes"](upvotes, id);
      var upvoteCount = _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__["count"](commentUpvotes);
      var sign = _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__["determineSign"](upvoteCount);
      this.currentUpvote = _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__["currentUpvote"](commentUpvotes, currentUser);

      var _UpvoteUtil$determine = _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__["determineCallbacks"](this.currentUpvote, currentUser, this.upvote, this.downvote, this.deleteUpvote, this.reverseUpvote),
          _UpvoteUtil$determine2 = _slicedToArray(_UpvoteUtil$determine, 2),
          leftCb = _UpvoteUtil$determine2[0],
          rightCb = _UpvoteUtil$determine2[1];

      var _UpvoteUtil$determine3 = _util_upvote_util__WEBPACK_IMPORTED_MODULE_1__["determineClasses"](this.currentUpvote),
          _UpvoteUtil$determine4 = _slicedToArray(_UpvoteUtil$determine3, 2),
          leftClass = _UpvoteUtil$determine4[0],
          rightClass = _UpvoteUtil$determine4[1];

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "comment-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "comment-meta-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "comment-user-meta"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "comment-profile-img",
        onError: function onError() {
          this.src = assets_images_default_profile_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
        },
        src: profile_img || assets_images_default_profile_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "comment-date"
      }, date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "comment-body"
      }, body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "comment-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: leftCb,
        className: "upvote-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-thumbs-up ".concat(leftClass)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "upvote-count"
      }, sign, upvoteCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: rightCb,
        className: "upvote-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-thumbs-down fa-flip-horizontal ".concat(rightClass)
      }))), deleteButton)));
    }
  }]);

  return CommentListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommentListItem);

/***/ }),

/***/ "./frontend/components/track_show/comments/list_item_container.js":
/*!************************************************************************!*\
  !*** ./frontend/components/track_show/comments/list_item_container.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_item */ "./frontend/components/track_show/comments/list_item.jsx");
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _actions_upvote_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/upvote_actions */ "./frontend/actions/upvote_actions.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.id],
    upvotes: Object.values(state.entities.upvotes)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteComment: function deleteComment(id) {
      return dispatch(Object(_actions_comment_actions__WEBPACK_IMPORTED_MODULE_2__["deleteComment"])(id));
    },
    createUpvote: function createUpvote(upvote) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_3__["createUpvote"])(upvote));
    },
    reverseUpvote: function reverseUpvote(id) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_3__["reverseUpvote"])(id));
    },
    deleteUpvote: function deleteUpvote(id) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_3__["deleteUpvote"])(id));
    },
    fetchCommentUpvotes: function fetchCommentUpvotes(commentId) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_3__["fetchCommentUpvotes"])(commentId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_list_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/track_show/questions/answer_body.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/track_show/questions/answer_body.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_tweet_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/tweet_util */ "./frontend/util/tweet_util.js");




__webpack_require__(/*! showdown-youtube */ "./node_modules/showdown-youtube/dist/showdown-youtube.js");

var AnswerBody = function AnswerBody(props) {
  var answer = props.answer;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_util_tweet_util__WEBPACK_IMPORTED_MODULE_2__["renderTweets"])();
  }, []);
  var tweetsReplaced = Object(_util_tweet_util__WEBPACK_IMPORTED_MODULE_2__["replaceTweets"])(answer.body);
  var converter = new showdown__WEBPACK_IMPORTED_MODULE_1___default.a.Converter({
    extensions: ['youtube']
  });
  var html = converter.makeHtml(tweetsReplaced); // don't need to sanitize html because it's only on the client side

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "answer-body",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AnswerBody);

/***/ }),

/***/ "./frontend/components/track_show/questions/answered_panel.jsx":
/*!*********************************************************************!*\
  !*** ./frontend/components/track_show/questions/answered_panel.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _upvotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upvotes */ "./frontend/components/track_show/questions/upvotes.jsx");
/* harmony import */ var _answer_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer_body */ "./frontend/components/track_show/questions/answer_body.jsx");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var AnsweredPanel = function AnsweredPanel(props) {
  var question = props.question,
      updateAnswer = props.updateAnswer,
      deleteAnswer = props.deleteAnswer,
      currentUserId = props.currentUserId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      onceFocused = _useState4[0],
      setOnceFocused = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(question.answer.body),
      _useState6 = _slicedToArray(_useState5, 2),
      body = _useState6[0],
      setBody = _useState6[1];

  var textarea;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (textarea !== undefined && !onceFocused) {
      textarea.focus();
      autosize__WEBPACK_IMPORTED_MODULE_3___default()(textarea);
      setOnceFocused(true);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "answered-panel"
  }, !editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "answered-panel-show"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, question.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_answer_body__WEBPACK_IMPORTED_MODULE_2__["default"], {
    answer: question.answer
  }), currentUserId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "answered-panel-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_upvotes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    answerId: question.answer.id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      var result = confirm("Delete answer?");
      if (result) deleteAnswer(question.answer.id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-trash-alt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setEditing(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-pencil-alt"
  }))))), editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      updateAnswer({
        body: body,
        id: question.answer.id
      }).then(function () {
        setEditing(false);
        setOnceFocused(false);
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    onChange: function onChange(e) {
      return setBody(e.target.value);
    },
    value: body,
    ref: function ref(node) {
      return textarea = node;
    },
    required: true,
    placeholder: "Answer here"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "answer-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-submit"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-cancel",
    onClick: function onClick(e) {
      e.stopPropagation();
      setEditing(false);
      setOnceFocused(false);
    }
  }, "Cancel"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AnsweredPanel);

/***/ }),

/***/ "./frontend/components/track_show/questions/form.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/track_show/questions/form.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var QuestionForm = function QuestionForm(props) {
  var createQuestion = props.createQuestion,
      trackId = props.trackId;
  var textarea;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      onceFocused = _useState4[0],
      setOnceFocused = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      title = _useState6[0],
      setTitle = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (textarea !== undefined && !onceFocused) {
      textarea.focus();
      autosize__WEBPACK_IMPORTED_MODULE_1___default()(textarea);
      setOnceFocused(true);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "question-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      createQuestion({
        title: title,
        track_id: trackId
      }).then(function () {
        setTitle('');
        setFocused(false);
        setOnceFocused(false);
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Ask us a question about this song"), focused ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    value: title,
    required: true,
    ref: function ref(node) {
      return textarea = node;
    },
    placeholder: "Ask a question"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Ask a question",
    onFocus: function onFocus() {
      return setFocused(true);
    }
  }), focused && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "question-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-submit"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-cancel",
    onClick: function onClick() {
      setFocused(false);
      setOnceFocused(false);
    }
  }, "Cancel")));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionForm);

/***/ }),

/***/ "./frontend/components/track_show/questions/section.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/track_show/questions/section.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./frontend/components/track_show/questions/form.jsx");
/* harmony import */ var _answered_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answered_panel */ "./frontend/components/track_show/questions/answered_panel.jsx");
/* harmony import */ var _unanswered_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unanswered_panel */ "./frontend/components/track_show/questions/unanswered_panel.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_question_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/question_actions */ "./frontend/actions/question_actions.js");
/* harmony import */ var _actions_answer_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/answer_actions */ "./frontend/actions/answer_actions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var QuestionSection = function QuestionSection(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      questions = _useState2[0],
      setQuestions = _useState2[1];

  var _partition = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["partition"])(questions, function (q) {
    return q.answer;
  }),
      _partition2 = _slicedToArray(_partition, 2),
      answeredQuestions = _partition2[0],
      unansweredQuestions = _partition2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var currentQuestions = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.entities.questions;
  });
  var currentUserId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.session.id;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions_question_actions__WEBPACK_IMPORTED_MODULE_7__["clearQuestions"])());
    dispatch(Object(_actions_question_actions__WEBPACK_IMPORTED_MODULE_7__["fetchTrackQuestions"])(props.match.params.trackId)).then(function (res) {
      return setQuestions(res.questions);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setQuestions(currentQuestions);
  }, [currentQuestions]);
  var answeredPanels = answeredQuestions.map(function (q) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_answered_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: q.id,
      question: q,
      updateAnswer: function updateAnswer(answer) {
        return dispatch(Object(_actions_answer_actions__WEBPACK_IMPORTED_MODULE_8__["updateAnswer"])(answer));
      },
      deleteAnswer: function deleteAnswer(id) {
        return dispatch(Object(_actions_answer_actions__WEBPACK_IMPORTED_MODULE_8__["deleteAnswer"])(id));
      },
      currentUserId: currentUserId
    });
  });
  var unansweredPanels = unansweredQuestions.map(function (q) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_unanswered_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: q.id,
      question: q,
      createAnswer: function createAnswer(answer) {
        return dispatch(Object(_actions_answer_actions__WEBPACK_IMPORTED_MODULE_8__["createAnswer"])(answer));
      },
      deleteQuestion: function deleteQuestion(id) {
        return dispatch(Object(_actions_question_actions__WEBPACK_IMPORTED_MODULE_7__["deleteQuestion"])(id));
      }
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "question-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "answered-questions-list"
  }, answeredPanels), currentUserId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "unanswered-questions-list"
  }, unansweredPanels), currentUserId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    createQuestion: function createQuestion(question) {
      return dispatch(Object(_actions_question_actions__WEBPACK_IMPORTED_MODULE_7__["createQuestion"])(question));
    },
    trackId: props.match.params.trackId
  }), currentUserId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "question-info"
  }, "Annotations and answers for questions use the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://demo.showdownjs.com/"
  }, "Showdown "), " Markdown converter library! Also check out the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/format",
    target: "_blank"
  }, "formatting help page"), "."));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(QuestionSection));

/***/ }),

/***/ "./frontend/components/track_show/questions/unanswered_panel.jsx":
/*!***********************************************************************!*\
  !*** ./frontend/components/track_show/questions/unanswered_panel.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var UnansweredPanel = function UnansweredPanel(props) {
  var question = props.question,
      createAnswer = props.createAnswer,
      deleteQuestion = props.deleteQuestion;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      onceFocused = _useState4[0],
      setOnceFocused = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      body = _useState6[0],
      setBody = _useState6[1];

  var textarea;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (textarea !== undefined && !onceFocused) {
      textarea.focus();
      autosize__WEBPACK_IMPORTED_MODULE_1___default()(textarea);
      setOnceFocused(true);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "unanswered-panel"
  }, !focused && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, question.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      createAnswer({
        body: body,
        question_id: question.id
      }).then(function () {
        setBody('');
        setFocused(false);
        setOnceFocused(false);
      });
    }
  }, focused ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    onChange: function onChange(e) {
      return setBody(e.target.value);
    },
    value: body,
    required: true,
    ref: function ref(node) {
      return textarea = node;
    },
    placeholder: "".concat(question.title)
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Answer here",
    onFocus: function onFocus() {
      return setFocused(true);
    }
  }), focused && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "question-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-submit"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-cancel",
    onClick: function onClick(e) {
      e.stopPropagation();
      setFocused(false);
      setOnceFocused(false);
    }
  }, "Cancel"), !question.permanent && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "question-delete",
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      var result = confirm("Delete question?");
      if (result) deleteQuestion(question.id);
    }
  }, "Delete"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UnansweredPanel);

/***/ }),

/***/ "./frontend/components/track_show/questions/upvotes.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/track_show/questions/upvotes.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_upvote_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/upvote_actions */ "./frontend/actions/upvote_actions.js");
/* harmony import */ var _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/upvote_util */ "./frontend/util/upvote_util.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.id],
    upvotes: Object.values(state.entities.upvotes)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createUpvote: function createUpvote(upvote) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_2__["createUpvote"])(upvote));
    },
    reverseUpvote: function reverseUpvote(id) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_2__["reverseUpvote"])(id));
    },
    deleteUpvote: function deleteUpvote(id) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUpvote"])(id));
    },
    fetchAnswerUpvotes: function fetchAnswerUpvotes(answerId) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAnswerUpvotes"])(answerId));
    }
  };
};

var QuestionUpvotes = function QuestionUpvotes(props) {
  var upvotes = props.upvotes,
      currentUser = props.currentUser,
      answerId = props.answerId,
      createUpvote = props.createUpvote,
      reverseUpvote = props.reverseUpvote,
      deleteUpvote = props.deleteUpvote,
      fetchAnswerUpvotes = props.fetchAnswerUpvotes;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchAnswerUpvotes(answerId).then(function () {
      return setLoaded(true);
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  if (!loaded) return null;

  var handleNothing = function handleNothing() {};

  var upvote = function upvote() {
    return createUpvote({
      value: 1,
      user_id: currentUser.id,
      upvotable_type: "Answer",
      upvotable_id: answerId
    });
  };

  var downvote = function downvote() {
    return createUpvote({
      value: -1,
      user_id: currentUser.id,
      upvotable_type: "Answer",
      upvotable_id: answerId
    });
  };

  var delUpvote = function delUpvote() {
    return deleteUpvote(currentUpvote.id);
  };

  var revUpvote = function revUpvote() {
    return reverseUpvote(currentUpvote.id);
  }; // For handling upvotes. This is streamlined since upvotes are implemented
  // for many things across Prodigy (and also Genius).


  var answerUpvotes = _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__["answerUpvotes"](upvotes, answerId);
  var upvoteCount = _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__["count"](answerUpvotes);
  var sign = _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__["determineSign"](upvoteCount);
  var currentUpvote = _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__["currentUpvote"](answerUpvotes, currentUser);

  var _UpvoteUtil$determine = _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__["determineCallbacks"](currentUpvote, currentUser, upvote, downvote, delUpvote, revUpvote, handleNothing),
      _UpvoteUtil$determine2 = _slicedToArray(_UpvoteUtil$determine, 2),
      leftCb = _UpvoteUtil$determine2[0],
      rightCb = _UpvoteUtil$determine2[1];

  var _UpvoteUtil$determine3 = _util_upvote_util__WEBPACK_IMPORTED_MODULE_3__["determineClasses"](currentUpvote),
      _UpvoteUtil$determine4 = _slicedToArray(_UpvoteUtil$determine3, 2),
      leftClass = _UpvoteUtil$determine4[0],
      rightClass = _UpvoteUtil$determine4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "answer-upvotes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: leftCb,
    className: "upvote-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-thumbs-up ".concat(leftClass)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "upvote-count"
  }, sign, upvoteCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: rightCb,
    className: "upvote-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-thumbs-down fa-flip-horizontal ".concat(rightClass)
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(QuestionUpvotes));

/***/ }),

/***/ "./frontend/components/track_show/second_column/annotation_body.jsx":
/*!**************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/annotation_body.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_tweet_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/tweet_util */ "./frontend/util/tweet_util.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





__webpack_require__(/*! showdown-youtube */ "./node_modules/showdown-youtube/dist/showdown-youtube.js");

var AnnotationBody = function AnnotationBody(props) {
  var body = props.body;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_util_tweet_util__WEBPACK_IMPORTED_MODULE_2__["renderTweets"])();
  }, [props.match.params.annotationId]);
  var tweetsReplaced = Object(_util_tweet_util__WEBPACK_IMPORTED_MODULE_2__["replaceTweets"])(body);
  var converter = new showdown__WEBPACK_IMPORTED_MODULE_1___default.a.Converter({
    extensions: ['youtube']
  });
  var html = converter.makeHtml(tweetsReplaced); // don't need to sanitize html because it's only on the client side

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "annotation-body annotation-show",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(AnnotationBody));

/***/ }),

/***/ "./frontend/components/track_show/second_column/annotation_edit_form.jsx":
/*!*******************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/annotation_edit_form.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_annotation_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/annotation_actions */ "./frontend/actions/annotation_actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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







var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    currentAnnotation: state.entities.annotations[ownProps.match.params.annotationId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submit: function submit(annotation) {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_2__["updateAnnotation"])(annotation));
    }
  };
};

var AnnotationEditForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnnotationEditForm, _React$Component);

  function AnnotationEditForm(props) {
    var _this;

    _classCallCheck(this, AnnotationEditForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnnotationEditForm).call(this, props));
    _this.state = _this.props.currentAnnotation;
    _this.top = _this.props.top;
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    _this.textarea = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(AnnotationEditForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var span = document.getElementById(this.state.id);

      if (span) {
        span.classList.add("active-annotation");
      }

      ;
      autosize__WEBPACK_IMPORTED_MODULE_1___default()(this.textarea.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var span = document.getElementById(this.state.id);

      if (span) {
        span.classList.remove("active-annotation");
      }

      ;
    }
  }, {
    key: "handleCancel",
    value: function handleCancel(e) {
      e.preventDefault();
      this.props.history.push("/tracks/".concat(this.state.track_id, "/").concat(this.state.id));
    }
  }, {
    key: "handleSave",
    value: function handleSave(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.submit(this.state).then(function () {
        _this2.props.history.push("/tracks/".concat(_this2.state.track_id, "/").concat(_this2.state.id));
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
      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          currentAnnotation = _this$props.currentAnnotation;

      if (!currentUser || currentUser.id !== currentAnnotation.author_id) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
          to: "/tracks/".concat(currentAnnotation.track_id, "/").concat(currentAnnotation.id)
        });
      }

      var span = document.getElementById(this.state.id);
      var lyricsContainer = document.getElementById("lyrics-rect");
      var style;

      if (span) {
        var top1 = lyricsContainer.getBoundingClientRect().top;
        var top2 = span.getBoundingClientRect().top;
        style = {
          marginTop: "".concat(Math.max(top2 - top1 - 50, 0), "px")
        };
      } else {
        style = {
          marginTop: "".concat(this.top - 50, "px")
        };
      }

      var placeholdText = "Don't just put the lyric in your own words-drop some knowledge!";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: "annotation-form-container annotation-submit annotation-show"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "annotation-form annotation-submit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        ref: this.textarea,
        className: "annotation-submit",
        placeholder: placeholdText,
        onChange: this.update("body"),
        value: this.state.body
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "save-annotation",
        onClick: this.handleSave
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "cancel-annotation",
        onClick: this.handleCancel
      }, "Cancel")));
    }
  }]);

  return AnnotationEditForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AnnotationEditForm)));

/***/ }),

/***/ "./frontend/components/track_show/second_column/annotation_form.jsx":
/*!**************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/annotation_form.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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





var AnnotationForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnnotationForm, _React$Component);

  function AnnotationForm(props) {
    var _this;

    _classCallCheck(this, AnnotationForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnnotationForm).call(this, props));
    _this.state = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])({}, _this.props.annotation, {
      author_id: _this.props.authorId
    });
    _this.top = _this.props.top;
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.textarea = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(AnnotationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      autosize__WEBPACK_IMPORTED_MODULE_1___default()(this.textarea.current);
    }
  }, {
    key: "handleCancel",
    value: function handleCancel(e) {
      e.preventDefault();
      this.props.removeAnnotation(this.state.id);
      this.props.destroyForm(this.state.id);
      this.props.history.push("/tracks/".concat(this.props.match.params.trackId));
    }
  }, {
    key: "handleSave",
    value: function handleSave(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.submit(this.state).then(function (res) {
        _this2.props.removeAnnotation(_this2.state.id);

        _this2.props.destroyForm(_this2.state.id);

        _this2.props.history.push("/tracks/".concat(_this2.props.match.params.trackId, "/").concat(res.annotation.id));
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
      var span = document.getElementById(this.state.id);
      var lyricsContainer = document.getElementById("lyrics-rect");
      var style;

      if (span) {
        var top1 = lyricsContainer.getBoundingClientRect().top;
        var top2 = span.getBoundingClientRect().top;
        style = {
          marginTop: "".concat(Math.max(top2 - top1 - 50, 0), "px")
        };
      } else {
        style = {
          marginTop: "".concat(this.top - 50, "px")
        };
      }

      var placeholdText = "Don't just put the lyric in your own words-drop some knowledge!";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: "annotation-form-container annotation-submit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "annotation-form annotation-submit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        ref: this.textarea,
        className: "annotation-submit",
        placeholder: placeholdText,
        onChange: this.update("body"),
        value: this.state.body
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "save-annotation",
        onClick: this.handleSave
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "cancel-annotation",
        onClick: this.handleCancel
      }, "Cancel")));
    }
  }]);

  return AnnotationForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AnnotationForm);

/***/ }),

/***/ "./frontend/components/track_show/second_column/annotation_show.jsx":
/*!**************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/annotation_show.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _annotation_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotation_body */ "./frontend/components/track_show/second_column/annotation_body.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_annotate_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/annotate_util */ "./frontend/util/annotate_util.js");
/* harmony import */ var _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/upvote_util */ "./frontend/util/upvote_util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var AnnotationShow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnnotationShow, _React$Component);

  function AnnotationShow(props) {
    var _this;

    _classCallCheck(this, AnnotationShow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnnotationShow).call(this, props));
    _this.deleteButton = _this.deleteButton.bind(_assertThisInitialized(_this));
    _this.upvote = _this.upvote.bind(_assertThisInitialized(_this));
    _this.downvote = _this.downvote.bind(_assertThisInitialized(_this));
    _this.reverseUpvote = _this.reverseUpvote.bind(_assertThisInitialized(_this));
    _this.deleteUpvote = _this.deleteUpvote.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AnnotationShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var annotationId = this.props.match.params.annotationId;
      if (annotationId[0] !== 't') this.props.fetchAnnotationUpvotes(this.props.match.params.annotationId);
      var span = document.getElementById(this.props.match.params.annotationId);

      if (span) {
        span.classList.add("active-annotation");
      }

      ;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var span = document.getElementById(this.props.match.params.annotationId);

      if (span) {
        span.classList.remove("active-annotation");
      }

      ;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currId = this.props.match.params.annotationId;
      var prevId = prevProps.match.params.annotationId;

      if (currId !== prevId) {
        var prevSpan = document.getElementById(prevId);
        var currSpan = document.getElementById(currId);

        if (prevSpan) {
          prevSpan.classList.remove("active-annotation");
        }

        ;

        if (currSpan) {
          currSpan.classList.add("active-annotation");
        }

        ;
      }
    }
  }, {
    key: "deleteButton",
    value: function deleteButton() {
      var _this2 = this;

      if (confirm("Delete this annotation?")) {
        var annotationId = this.props.match.params.annotationId;
        this.props.deleteAnnotation(annotationId).then(function () {
          return _this2.props.history.push("/tracks/".concat(_this2.props.match.params.trackId));
        });
      }
    }
  }, {
    key: "upvote",
    value: function upvote(e) {
      e.preventDefault();
      var id = this.props.annotation.id;
      var currentUser = this.props.currentUser;
      this.props.createUpvote({
        value: 1,
        user_id: currentUser.id,
        upvotable_type: "Annotation",
        upvotable_id: id
      });
    }
  }, {
    key: "downvote",
    value: function downvote(e) {
      e.preventDefault();
      var id = this.props.annotation.id;
      var currentUser = this.props.currentUser;
      this.props.createUpvote({
        value: -1,
        user_id: currentUser.id,
        upvotable_type: "Annotation",
        upvotable_id: id
      });
    }
  }, {
    key: "reverseUpvote",
    value: function reverseUpvote(e) {
      e.preventDefault();
      this.props.reverseUpvote(this.currentUpvote.id);
    }
  }, {
    key: "deleteUpvote",
    value: function deleteUpvote(e) {
      e.preventDefault();
      this.props.deleteUpvote(this.currentUpvote.id);
    }
  }, {
    key: "handleNothing",
    value: function handleNothing(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          upvotes = _this$props.upvotes;
      var currentAnnotation = this.props.annotation;
      var show = Boolean(currentAnnotation && String(currentAnnotation.id).match(/^[0-9]/));
      var style = _util_annotate_util__WEBPACK_IMPORTED_MODULE_3__["displayHeightStyle"](this.props.match.params.annotationId, this.props.top);
      var annotationUpvotes = _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__["annotationUpvotes"](upvotes, Number(this.props.match.params.annotationId));
      var upvoteCount = _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__["count"](annotationUpvotes);
      var sign = _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__["determineSign"](upvoteCount);
      this.currentUpvote = _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__["currentUpvote"](annotationUpvotes, currentUser);

      var _UpvoteUtil$determine = _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__["determineCallbacks"](this.currentUpvote, currentUser, this.upvote, this.downvote, this.deleteUpvote, this.reverseUpvote, this.handleNothing),
          _UpvoteUtil$determine2 = _slicedToArray(_UpvoteUtil$determine, 2),
          leftCb = _UpvoteUtil$determine2[0],
          rightCb = _UpvoteUtil$determine2[1];

      var _UpvoteUtil$determine3 = _util_upvote_util__WEBPACK_IMPORTED_MODULE_4__["determineClasses"](this.currentUpvote),
          _UpvoteUtil$determine4 = _slicedToArray(_UpvoteUtil$determine3, 2),
          leftClass = _UpvoteUtil$determine4[0],
          rightClass = _UpvoteUtil$determine4[1];

      return show ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "annotation-show-container annotation-show",
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "annotation-show"
      }, "Prodigy Annotation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "annotation-show"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_annotation_body__WEBPACK_IMPORTED_MODULE_1__["default"], {
        body: currentAnnotation.body
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "annotation-show-bottom annotation-show"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "annotation-show-upvotes annotation-show"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "upvote-link",
        onClick: leftCb
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-thumbs-up ".concat(leftClass, " annotation-show")
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "upvote-count annotation-show"
      }, sign, upvoteCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "upvote-link",
        onClick: rightCb
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-thumbs-down fa-flip-horizontal ".concat(rightClass, " annotation-show")
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "annotation-show-buttons annotation-show"
      }, this.props.currentUserId === currentAnnotation.author_id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "annotation-delete annotation-show",
        onClick: this.deleteButton
      }, "Delete"), this.props.currentUserId === currentAnnotation.author_id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "annotation-edit annotation-show",
        to: "/tracks/".concat(currentAnnotation.track_id, "/").concat(currentAnnotation.id, "/edit")
      }, "Edit")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return AnnotationShow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (AnnotationShow);

/***/ }),

/***/ "./frontend/components/track_show/second_column/annotation_show_container.js":
/*!***********************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/annotation_show_container.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_upvote_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/upvote_actions */ "./frontend/actions/upvote_actions.js");
/* harmony import */ var _annotation_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annotation_show */ "./frontend/components/track_show/second_column/annotation_show.jsx");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    upvotes: Object.values(state.entities.upvotes),
    annotation: state.entities.annotations[ownProps.match.params.annotationId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createUpvote: function createUpvote(upvote) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_1__["createUpvote"])(upvote));
    },
    reverseUpvote: function reverseUpvote(id) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_1__["reverseUpvote"])(id));
    },
    deleteUpvote: function deleteUpvote(id) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_1__["deleteUpvote"])(id));
    },
    fetchAnnotationUpvotes: function fetchAnnotationUpvotes(annotationId) {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_1__["fetchAnnotationUpvotes"])(annotationId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_annotation_show__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/track_show/second_column/info_column.jsx":
/*!**********************************************************************!*\
  !*** ./frontend/components/track_show/second_column/info_column.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _annotation_show_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotation_show_container */ "./frontend/components/track_show/second_column/annotation_show_container.js");
/* harmony import */ var _annotation_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annotation_form */ "./frontend/components/track_show/second_column/annotation_form.jsx");
/* harmony import */ var _annotation_edit_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./annotation_edit_form */ "./frontend/components/track_show/second_column/annotation_edit_form.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _non_annotation_column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./non_annotation_column */ "./frontend/components/track_show/second_column/non_annotation_column.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var InfoColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoColumn, _React$Component);

  function InfoColumn(props) {
    var _this;

    _classCallCheck(this, InfoColumn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoColumn).call(this, props));
    _this.createAnnotationForm = _this.createAnnotationForm.bind(_assertThisInitialized(_this));
    _this.state = {
      formNo: 0,
      forms: []
    };
    _this.destroyForm = _this.destroyForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfoColumn, [{
    key: "destroyForm",
    value: function destroyForm(id) {
      this.setState(function (prevState) {
        var forms = prevState.forms.filter(function (form) {
          return form.props.path.split('/')[3] !== id;
        });
        return {
          forms: forms
        };
      });
    }
  }, {
    key: "createAnnotationForm",
    value: function createAnnotationForm() {
      var _this2 = this;

      this.props.closeAnnotationPrompt(); // Create form

      var temp = {
        id: "temp-".concat(this.state.formNo),
        start_idx: this.props.startIdx,
        end_idx: this.props.endIdx,
        body: "",
        track_id: this.props.currentTrack.id
      };
      this.props.createTempAnnotation(temp);
      var routedForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        path: "/tracks/:trackId/".concat(temp.id),
        key: temp.id,
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_annotation_form__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
            removeAnnotation: _this2.props.removeAnnotation,
            submit: _this2.props.createAnnotation,
            destroyForm: _this2.destroyForm,
            top: _this2.props.top,
            authorId: _this2.props.currentUserId,
            annotation: temp
          }));
        }
      });
      this.setState(function (prevState) {
        return {
          formNo: prevState.formNo + 1,
          forms: prevState.forms.concat([routedForm])
        };
      });
      this.props.history.push("/tracks/".concat(this.props.currentTrack.id, "/").concat(temp.id));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          annotations = _this$props.annotations,
          annotationPrompt = _this$props.annotationPrompt,
          currentTrack = _this$props.currentTrack,
          currentUserId = _this$props.currentUserId,
          deleteAnnotation = _this$props.deleteAnnotation,
          top = _this$props.top,
          isExact = _this$props.match.isExact;
      var style = {
        marginTop: "".concat(this.props.top, "px")
      };
      var hideNonAnnotation = annotationPrompt || !isExact;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "info-column"
      }, currentUserId && annotationPrompt && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: "annotation-prompt-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "annotation-prompt-button",
        onClick: this.createAnnotationForm
      }, "Start the Prodigy Annotation")), !currentUserId && annotationPrompt && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style,
        className: "annotation-prompt-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        id: "annotation-prompt-button",
        to: "/login"
      }, "You must log in to annotate lyrics!")), !annotationPrompt && this.state.forms.length > 0 && this.state.forms, !annotationPrompt && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        exact: true,
        path: "/tracks/:trackId/:annotationId",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_annotation_show_container__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
            annotations: annotations,
            top: top,
            currentUserId: currentUserId,
            deleteAnnotation: deleteAnnotation
          }));
        }
      }), !annotationPrompt && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        exact: true,
        path: "/tracks/:trackId/:annotationId/edit",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_annotation_edit_form__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
            top: top,
            currentUserId: currentUserId
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_non_annotation_column__WEBPACK_IMPORTED_MODULE_5__["default"], {
        currentTrack: currentTrack,
        hide: hideNonAnnotation
      }));
    }
  }]);

  return InfoColumn;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (InfoColumn);

/***/ }),

/***/ "./frontend/components/track_show/second_column/info_column_container.js":
/*!*******************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/info_column_container.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _info_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info_column */ "./frontend/components/track_show/second_column/info_column.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_annotation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/annotation_actions */ "./frontend/actions/annotation_actions.js");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    annotations: state.entities.annotations,
    currentUserId: state.session.id,
    currentTrack: state.entities.tracks[ownProps.match.params.trackId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createTempAnnotation: function createTempAnnotation(annotation) {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_3__["receiveAnnotation"])(annotation));
    },
    removeAnnotation: function removeAnnotation(id) {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_3__["removeAnnotation"])(id));
    },
    createAnnotation: function createAnnotation(annotation) {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_3__["createAnnotation"])(annotation));
    },
    deleteAnnotation: function deleteAnnotation(id) {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_3__["deleteAnnotation"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_info_column__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/track_show/second_column/non_annotation_column.jsx":
/*!********************************************************************************!*\
  !*** ./frontend/components/track_show/second_column/non_annotation_column.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/section */ "./frontend/components/track_show/questions/section.jsx");



var NonAnnotationColumn = function NonAnnotationColumn(props) {
  var currentTrack = props.currentTrack,
      hide = props.hide;
  var youtube_url;

  if (currentTrack) {
    youtube_url = currentTrack.youtube_url;
  }

  var youtubeUrl;

  if (youtube_url !== undefined && youtube_url !== '' && youtube_url !== null) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = youtube_url.match(regExp);

    if (match && match[2].length == 11) {
      youtubeUrl = 'https://www.youtube.com/embed/' + match[2];
    } else {
      youtubeUrl = undefined;
    }
  } // https://stackoverflow.com/questions/28735459/how-to-validate-youtube-url-in-client-side-in-text-box


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info-column-non-annotation",
    style: {
      display: hide ? "none" : "block"
    }
  }, youtubeUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Video"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: "".concat(youtubeUrl),
    frameBorder: "0",
    samesite: "none"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_section__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (NonAnnotationColumn);

/***/ }),

/***/ "./frontend/components/track_show/track_show.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/track_show/track_show.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/annotate_util */ "./frontend/util/annotate_util.js");
/* harmony import */ var _second_column_info_column_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second_column/info_column_container */ "./frontend/components/track_show/second_column/info_column_container.js");
/* harmony import */ var _comments_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/column */ "./frontend/components/track_show/comments/column.jsx");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-fade-in */ "./node_modules/react-fade-in/lib/index.js");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_fade_in__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _artist_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artist_link */ "./frontend/components/track_show/artist_link.jsx");
/* harmony import */ var assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/no_image.png */ "./app/assets/images/no_image.png");
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











function handleImageError() {
  this.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
}

;

var TrackShow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TrackShow, _React$Component);

  function TrackShow(props) {
    var _this;

    _classCallCheck(this, TrackShow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrackShow).call(this, props));
    _this.state = {
      done: false,
      top: 0,
      annotationPrompt: false,
      editLyrics: false,
      lyrics: "",
      startIdx: undefined,
      endIdx: undefined
    };
    _this.editButton = _this.editButton.bind(_assertThisInitialized(_this));
    _this.submitLyrics = _this.submitLyrics.bind(_assertThisInitialized(_this));
    _this.handleHighlight = _this.handleHighlight.bind(_assertThisInitialized(_this));
    _this.handleSpanClick = _this.handleSpanClick.bind(_assertThisInitialized(_this));
    _this.closeAnnotationPrompt = _this.closeAnnotationPrompt.bind(_assertThisInitialized(_this));
    _this.handleModal = _this.handleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TrackShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.clearInfo();
      document.addEventListener("mousedown", this.closeAnnotationPrompt);
      this.props.fetchTrack(this.props.match.params.trackId).then(function (res) {
        _this2.setState({
          done: true,
          lyrics: res.track.lyrics
        });

        if (res.track.album_id) {
          _this2.props.fetchAlbum(res.track.album_id);
        }

        ;
      }, function (err) {
        return _this2.setState({
          done: true
        });
      }); //document.addEventListener("click", this.handleSpanClick);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.match.params.trackId !== prevProps.match.params.trackId) {
        this.clearInfo();
        this.setState({
          done: false
        });
        this.props.fetchTrack(this.props.match.params.trackId).then(function (res) {
          _this3.setState({
            done: true,
            lyrics: res.track.lyrics
          });

          if (res.track.album_id) {
            _this3.props.fetchAlbum(res.track.album_id);
          }

          ;
        }, function (err) {
          return _this3.setState({
            done: true
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearInfo();
      document.removeEventListener("mousedown", this.closeAnnotationPrompt);
    }
  }, {
    key: "clearInfo",
    value: function clearInfo() {
      this.props.clearTracks();
      this.props.clearArtists();
      this.props.clearAlbums();
      this.props.clearAnnotations();
      this.props.clearUpvotes();
      this.props.clearComments();
    }
  }, {
    key: "editButton",
    value: function editButton() {
      this.setState({
        annotationPrompt: false
      });
      var editLyrics = !this.state.editLyrics;
      this.setState({
        editLyrics: editLyrics
      });
    }
  }, {
    key: "showAnnotationPrompt",
    value: function showAnnotationPrompt(startIdx, endIdx) {
      if (startIdx === endIdx) {
        this.setState({
          annotationPrompt: false
        });
      } else {
        this.setState({
          annotationPrompt: true
        });
      }
    }
  }, {
    key: "closeAnnotationPrompt",
    value: function closeAnnotationPrompt(e) {
      if (e) {
        if (e.target.id === "annotation-prompt-button") {
          return;
        } else {
          this.setState({
            annotationPrompt: false
          });
        }
      } else {
        this.setState({
          annotationPrompt: false
        });
      }
    }
  }, {
    key: "handleSpanClick",
    value: function handleSpanClick(e) {
      if (e.target.className.match(/annotation-submit/)) {
        return;
      }

      if (e.target.localName === "button" || e.target.localName === "a") {
        return;
      }

      ;

      if (e.target.className === "annotated-lyrics") {
        this.props.history.push("/tracks/".concat(this.props.currentTrack.id, "/").concat(e.target.id));
      } else if (e.target.className.match(/annotation-show$/)) {
        return;
      } else {
        var x = e.target;

        while (x = x.parentNode) {
          if (!x) {
            break;
          } else if (x.className && x.className.match(/annotation-show$/)) {
            return;
          }
        }

        this.props.history.push("/tracks/".concat(this.props.currentTrack.id));
      }
    }
  }, {
    key: "handleHighlight",
    value: function handleHighlight() {
      if (this.state.editLyrics) return; // don't need to handle highlights when editing lyrics

      var selection = window.getSelection();
      if (!selection.extentNode || !selection.baseNode) return; // end and start nodes must exist

      var annotationNodes = document.getElementsByClassName('annotated-lyrics');

      if (_util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["annotationsNotSelected"](annotationNodes)) {
        var lyricsContainer = document.getElementById("lyrics-container");
        var firstColumn = document.getElementById("track-show-column-first");

        var _AnnotateUtil$getIndi = _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["getIndices"](lyricsContainer),
            i1 = _AnnotateUtil$getIndi.i1,
            i2 = _AnnotateUtil$getIndi.i2,
            j1 = _AnnotateUtil$getIndi.j1,
            j2 = _AnnotateUtil$getIndi.j2; // I could've deconstructed for these methods, but I wanted them to be easy to remember for the future!


        var mappedNodeList = _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["mapNodeList"](lyricsContainer.childNodes);

        var _AnnotateUtil$getStar = _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["getStartAndEndIndices"](mappedNodeList, {
          i1: i1,
          i2: i2,
          j1: j1,
          j2: j2
        }),
            startIdx = _AnnotateUtil$getStar.startIdx,
            endIdx = _AnnotateUtil$getStar.endIdx;

        var top1 = firstColumn.getBoundingClientRect().top;
        var top2 = selection.getRangeAt(0).getBoundingClientRect().top; // const top = selection.getRangeAt(0).getBoundingClientRect().top + window.scrollY - 354;

        var top = top2 - top1 - 10;
        this.setState({
          startIdx: startIdx,
          endIdx: endIdx,
          top: top
        });
        this.showAnnotationPrompt(startIdx, endIdx);
      }

      ;
    }
  }, {
    key: "handleModal",
    value: function handleModal() {
      this.props.openModal('trackEdit');
    }
  }, {
    key: "handleImageError",
    value: function handleImageError() {
      this.src = assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }, {
    key: "submitLyrics",
    value: function submitLyrics() {
      var _this4 = this;

      var track = {
        id: this.props.currentTrack.id,
        lyrics: this.state.lyrics
      };
      this.props.updateTrack(track).then(function () {
        return _this4.editButton();
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this5 = this;

      return function (e) {
        _this5.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.done) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "bars",
          color: "white"
        });
      } else if (this.props.currentTrack === undefined || this.props.currentTrack.lyrics === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "no-tracks-shown"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Error!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The song you are looking for does not exist!"));
      }

      ;
      var _this$props = this.props,
          currentTrack = _this$props.currentTrack,
          loggedIn = _this$props.loggedIn;
      var lyricsLines = currentTrack.lyrics.split(/\r?\n/).reduce(function (acc, val, i) {
        return acc.concat(val, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          key: i
        }));
      }, []).length - 1; // we have to order the annotations since they are ordered by id, not start_idx right now
      // we want annotations in REVERSE ORDER!

      var lyricsHTML;

      if (this.props.annotations !== undefined) {
        var annotations = Object.values(this.props.annotations).sort(function (a, b) {
          return b.start_idx - a.start_idx;
        });
        var annotatedLyrics = _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["annotateLyrics"](currentTrack.lyrics, annotations);
        lyricsHTML = _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["lineBreakLyrics"](annotatedLyrics);
      } else {
        lyricsHTML = _util_annotate_util__WEBPACK_IMPORTED_MODULE_1__["lineBreakLyrics"](currentTrack.lyrics);
      }

      var lyricsContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: lyricsHTML
        },
        id: "lyrics-container"
      });
      var editArea = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        onChange: this.update("lyrics"),
        style: {
          minHeight: "150px",
          height: lyricsLines * 17
        },
        id: "edit-textarea",
        rows: "10",
        value: this.state.lyrics
      });
      var lyricsButtons = loggedIn ? !this.state.editLyrics ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.editButton
      }, "Edit Lyrics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleModal
      }, "Edit Song Facts")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "lyrics-edit-save-button",
        onClick: this.submitLyrics
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.editButton
      }, "Cancel")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      var _this$props$currentTr = this.props.currentTrack,
          features = _this$props$currentTr.features,
          producers = _this$props$currentTr.producers,
          writers = _this$props$currentTr.writers,
          album = _this$props$currentTr.album,
          name = _this$props$currentTr.name,
          artist = _this$props$currentTr.artist,
          image_url = _this$props$currentTr.image_url;
      var featureLinks = features.map(function (feature, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: feature.id
        }, i === 0 && ' ', i > 0 && features.length > 2 && ', ', i > 0 && features.length === 2 && ' & ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          artist: feature
        }));
      });
      var producerLinks = producers.map(function (producer, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: producer.id
        }, i === 0 && ' ', i > 0 && producers.length > 2 && ', ', i > 0 && producers.length === 2 && ' & ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          artist: producer,
          key: producer.id
        }));
      });
      var writerLinks = writers.map(function (writer, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: writer.id
        }, i === 0 && ' ', i > 0 && writers.length > 2 && ', ', i > 0 && writers.length === 2 && ' & ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          artist: writer,
          key: writer.id
        }));
      });
      var heroStyle = {
        backgroundImage: image_url ? "url(".concat(image_url, ")") : ""
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "track-show-page",
        onClick: this.handleSpanClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fade_in__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "track-show-header",
        id: "track-show-hero-image",
        style: heroStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-show-header-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-show-image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        onError: handleImageError.bind(this),
        src: image_url || assets_images_no_image_png__WEBPACK_IMPORTED_MODULE_8__["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-show-header-info-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_artist_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        artist: artist
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-show-header-additional"
      }, features.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Featuring", featureLinks), producers.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Produced by", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, producerLinks)), writers.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Written by", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, writerLinks)), album && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Album ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/albums/".concat(album.id)
      }, album.title)))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "track-show-main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "track-show-column-first",
        className: "track-show-column-first",
        onMouseUp: this.handleHighlight
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        id: "lyrics-rect",
        className: "track-show-lyrics-container"
      }, lyricsButtons, !this.state.editLyrics ? lyricsContainer : editArea), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comments_column__WEBPACK_IMPORTED_MODULE_3__["default"], {
        currentTrack: this.props.currentTrack
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track-show-column-second",
        id: "second-col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_second_column_info_column_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        closeAnnotationPrompt: this.closeAnnotationPrompt,
        annotationPrompt: this.state.annotationPrompt,
        startIdx: this.state.startIdx,
        endIdx: this.state.endIdx,
        currentTrack: this.props.currentTrack,
        top: this.state.top
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "track-show-footer"
      }));
    }
  }]);

  return TrackShow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TrackShow);

/***/ }),

/***/ "./frontend/components/track_show/track_show_container.js":
/*!****************************************************************!*\
  !*** ./frontend/components/track_show/track_show_container.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _track_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track_show */ "./frontend/components/track_show/track_show.jsx");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/album_actions */ "./frontend/actions/album_actions.js");
/* harmony import */ var _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/track_actions */ "./frontend/actions/track_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/artist_actions */ "./frontend/actions/artist_actions.js");
/* harmony import */ var _actions_upvote_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/upvote_actions */ "./frontend/actions/upvote_actions.js");
/* harmony import */ var _actions_annotation_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/annotation_actions */ "./frontend/actions/annotation_actions.js");
/* harmony import */ var _actions_comment_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/comment_actions */ "./frontend/actions/comment_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");











var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentTrack: state.entities.tracks[ownProps.match.params.trackId],
    loggedIn: Boolean(state.session.id),
    annotations: state.entities.annotations
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAlbum: function fetchAlbum(id) {
      return dispatch(Object(_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAlbum"])(id));
    },
    fetchTrack: function fetchTrack(id) {
      return dispatch(Object(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["fetchTrack"])(id));
    },
    clearTracks: function clearTracks() {
      return dispatch(Object(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["clearTracks"])());
    },
    clearArtists: function clearArtists() {
      return dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_5__["clearArtists"])());
    },
    clearAlbums: function clearAlbums() {
      return dispatch(Object(_actions_album_actions__WEBPACK_IMPORTED_MODULE_3__["clearAlbums"])());
    },
    clearAnnotations: function clearAnnotations() {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_7__["clearAnnotations"])());
    },
    clearUpvotes: function clearUpvotes() {
      return dispatch(Object(_actions_upvote_actions__WEBPACK_IMPORTED_MODULE_6__["clearUpvotes"])());
    },
    clearComments: function clearComments() {
      return dispatch(Object(_actions_comment_actions__WEBPACK_IMPORTED_MODULE_8__["clearComments"])());
    },
    updateTrack: function updateTrack(track) {
      return dispatch(Object(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["updateTrack"])(track));
    },
    createTempAnnotation: function createTempAnnotation(annotation) {
      return dispatch(Object(_actions_annotation_actions__WEBPACK_IMPORTED_MODULE_7__["receiveAnnotation"])(annotation));
    },
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_9__["openModal"])(modal));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_track_show__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ }),

/***/ "./frontend/util/annotate_util.js":
/*!****************************************!*\
  !*** ./frontend/util/annotate_util.js ***!
  \****************************************/
/*! exports provided: annotationsNotSelected, annotateLyrics, lineBreakLyrics, mapNodeList, getIndices, getStartAndEndIndices, displayHeightStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationsNotSelected", function() { return annotationsNotSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotateLyrics", function() { return annotateLyrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineBreakLyrics", function() { return lineBreakLyrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapNodeList", function() { return mapNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndices", function() { return getIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartAndEndIndices", function() { return getStartAndEndIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayHeightStyle", function() { return displayHeightStyle; });
var annotationsNotSelected = function annotationsNotSelected(annotationNodes) {
  return !Object.values(annotationNodes).some(function (node) {
    return window.getSelection().containsNode(node, true);
  });
};
var annotateLyrics = function annotateLyrics(lyrics, annotations) {
  var annotated = lyrics.split("");
  annotations.forEach(function (annotation) {
    annotated.splice(annotation.end_idx, 0, "</span>");
    annotated.splice(annotation.start_idx, 0, "<span class='annotated-lyrics' id=".concat(annotation.id, ">"));
  });
  return annotated.join("");
};
var lineBreakLyrics = function lineBreakLyrics(lyricsStr) {
  return lyricsStr.split(/\n/).join('<br>');
};
var mapNodeList = function mapNodeList(nodeList) {
  return Array.from(nodeList).map(function (node) {
    if (node.nodeName === "BR") {
      return '\n';
    } else if (node.nodeName === "SPAN") {
      return node.innerText;
    } else if (node.nodeName === "#text") {
      return node.nodeValue;
    }
  });
};
var getIndices = function getIndices(container) {
  var selection = window.getSelection();

  var _window$getSelection = window.getSelection(),
      baseNode = _window$getSelection.baseNode,
      extentNode = _window$getSelection.extentNode;

  var i1, i2, j1, j2;

  if (!container) {
    return {
      i1: 0,
      i2: 0,
      j1: 0,
      j2: 0
    };
  }

  if (!baseNode) {
    return {
      i1: 0,
      i2: 0,
      j1: 0,
      j2: 0
    };
  }

  if (!extentNode) {
    return {
      i1: 0,
      i2: 0,
      j1: 0,
      j2: 0
    };
  }

  i1 = Array.prototype.indexOf.call(container.childNodes, selection.baseNode);
  i2 = Array.prototype.indexOf.call(container.childNodes, selection.extentNode);
  j1 = selection.baseOffset;
  j2 = selection.extentOffset;

  if (baseNode.parentElement.id !== 'lyrics-container' && extentNode.parentElement.id !== 'lyrics-container') {
    i1 = 0;
    i2 = 0;
    j1 = 0;
    j2 = 0;
  } else if (baseNode.parentElement.id !== 'lyrics-container') {
    i1 = selection.baseOffset + 1;
    j1 = 0;
  } else if (extentNode.parentElement.id !== 'lyrics-container') {
    if (selection.extentOffset < i1) {
      i2 = selection.extentOffset + 1;
      j2 = 0;
    } else {
      i2 = selection.extentOffset - 2;

      if (container.childNodes[i2].nodeValue !== null) {
        j2 = container.childNodes[i2].nodeValue.length;
      } else {
        j2 = 0;
      }
    }
  }

  return {
    i1: i1,
    i2: i2,
    j1: j1,
    j2: j2
  };
};
var getStartAndEndIndices = function getStartAndEndIndices(mappedNodeList, indices) {
  var i1 = indices.i1,
      i2 = indices.i2,
      j1 = indices.j1,
      j2 = indices.j2;
  var prevOne = mappedNodeList.map(function (mappedNode) {
    return mappedNode.length;
  }).slice(0, i1).reduce(function (a, b) {
    return a + b;
  }, 0);
  var prevTwo = mappedNodeList.map(function (mappedNode) {
    return mappedNode.length;
  }).slice(0, i2).reduce(function (a, b) {
    return a + b;
  }, 0);
  var oneIndex = prevOne + j1;
  var twoIndex = prevTwo + j2;
  return {
    startIdx: Math.min(oneIndex, twoIndex),
    endIdx: Math.max(oneIndex, twoIndex)
  };
};
var displayHeightStyle = function displayHeightStyle(annotationId, top) {
  var lyricsContainer = document.getElementById("lyrics-rect");
  var span = document.getElementById(annotationId); // "top" comes from when the form is made, but is not ideal for the display
  // since the user might scroll in between submitting the form and looking at
  // the annotation-show

  var style;

  if (span) {
    var top1 = lyricsContainer.getBoundingClientRect().top;
    var top2 = span.getBoundingClientRect().top;
    style = {
      marginTop: "".concat(Math.max(top2 - top1, 0), "px")
    }; // It'll probably never be 0px on the current page setup, but just in case...
  } else {
    style = {
      marginTop: "".concat(top, "px")
    };
  }

  return style;
};

/***/ }),

/***/ "./frontend/util/tweet_util.js":
/*!*************************************!*\
  !*** ./frontend/util/tweet_util.js ***!
  \*************************************/
/*! exports provided: replaceTweets, renderTweets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceTweets", function() { return replaceTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTweets", function() { return renderTweets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");



var tweetRegex = /\[https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status\/(\d+)\]$/g;
var replaceTweets = function replaceTweets(str) {
  return str.replace(tweetRegex, "\n<tweet id=$2 />");
};
var renderTweets = function renderTweets() {
  var tweets = document.querySelectorAll("tweet");
  tweets.forEach(function (tweet) {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__["TwitterTweetEmbed"], {
      tweetId: tweet.id
    }), tweet);
  });
};

/***/ }),

/***/ "./frontend/util/upvote_util.js":
/*!**************************************!*\
  !*** ./frontend/util/upvote_util.js ***!
  \**************************************/
/*! exports provided: commentUpvotes, annotationUpvotes, answerUpvotes, determineSign, count, currentUpvote, determineCallbacks, determineClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentUpvotes", function() { return commentUpvotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationUpvotes", function() { return annotationUpvotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerUpvotes", function() { return answerUpvotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineSign", function() { return determineSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUpvote", function() { return currentUpvote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineCallbacks", function() { return determineCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineClasses", function() { return determineClasses; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var commentUpvotes = function commentUpvotes(upvotes, commentId) {
  return upvotes.filter(function (upvote) {
    return upvote.upvotable_type === "Comment" && upvote.upvotable_id === commentId;
  });
};
var annotationUpvotes = function annotationUpvotes(upvotes, annotationId) {
  return upvotes.filter(function (upvote) {
    return upvote.upvotable_type === "Annotation" && upvote.upvotable_id === annotationId;
  });
};
var answerUpvotes = function answerUpvotes(upvotes, answerId) {
  return upvotes.filter(function (upvote) {
    return upvote.upvotable_type === "Answer" && upvote.upvotable_id === answerId;
  });
};
var determineSign = function determineSign(upvoteCount) {
  var sign;

  if (upvoteCount > 0) {
    sign = "+";
  } else if (upvoteCount < 0) {
    sign = "";
  } else {
    sign = " ";
  }

  return sign;
};
var count = function count(upvotes) {
  return upvotes.reduce(function (acc, upvote) {
    return acc + upvote.value;
  }, 0);
};

var isUpvotedByUser = function isUpvotedByUser(upvotes, currentUser) {
  return upvotes.some(function (upvote) {
    return currentUser && upvote.user_id === currentUser.id;
  });
};

var currentUpvote = function currentUpvote(upvotes, currentUser) {
  var isUpvoted = isUpvotedByUser(upvotes, currentUser);

  if (!isUpvoted) {
    return undefined;
  }

  ;
  return upvotes.find(function (upvote) {
    return upvote.user_id === currentUser.id;
  });
};
var determineCallbacks = function determineCallbacks(currentUpvote, currentUser, up, down, erase, reverse) {
  var leftCb, rightCb;

  if (currentUpvote) {
    var _ref = currentUpvote.value === 1 ? [erase, reverse] : [reverse, erase];

    var _ref2 = _slicedToArray(_ref, 2);

    leftCb = _ref2[0];
    rightCb = _ref2[1];
  } else if (currentUser) {
    leftCb = up;
    rightCb = down;
  } else {
    leftCb = function leftCb() {};

    rightCb = function rightCb() {};
  }

  return [leftCb, rightCb];
};
var determineClasses = function determineClasses(currentUpvote) {
  var leftClass, rightClass;

  if (currentUpvote) {
    var _ref3 = currentUpvote.value === 1 ? ["green-up", ""] : ["", "red-down"];

    var _ref4 = _slicedToArray(_ref3, 2);

    leftClass = _ref4[0];
    rightClass = _ref4[1];
  } else {
    leftClass = "";
    rightClass = "";
  }

  return [leftClass, rightClass];
};

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map