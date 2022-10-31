/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 230:
/***/ (() => {

var menu = document.querySelector('.nav-bar__list');

if (window.location.hash === '' || window.location.hash === '#home') {
  menu.firstElementChild.classList.add('selected');
} else {
  menu.childNodes.forEach(function (item) {
    if (item.firstChild.href === window.location.href) {
      item.classList.add('selected');
    }
  });
}

menu.childNodes.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    menu.childNodes.forEach(function (item) {
      item.classList.remove('selected');
    });
    menuItem.classList.add('selected');
    window.location.replace(menuItem.firstChild.href);
  });
});

/***/ }),

/***/ 291:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/components/sections/header/header.js
var header = __webpack_require__(230);
;// CONCATENATED MODULE: ./src/layout/main.js

;// CONCATENATED MODULE: ./src/pages/index/index.js


/***/ }),

/***/ 227:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(55);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["section-main"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"main\" id=\"home\"\u003E\u003Cdiv class=\"main__contact\"\u003E\u003Cdiv class=\"main__contact-title\"\u003E" + (pug.escape(null == (pug_interp = 'Contact Us') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content\"\u003E\u003Cdiv class=\"main__content-info\"\u003E\u003Cdiv class=\"main__content-info-title\"\u003E" + (pug.escape(null == (pug_interp = 'Get Instant Loans') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-info-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Get instant loans with ease on your smartphone.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-info-btns\"\u003E\u003Ca class=\"btn google-play\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FGoogle_Play_Get.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"btn app-store\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FApp_Store_Get.svg\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FMain_Person.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-about"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"about\"\u003E\u003Cdiv class=\"about__content\"\u003E\u003Cdiv class=\"about__content-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FSecond_Person.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-info\"\u003E\u003Cdiv class=\"about__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'Save on your own terms') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Savings give you financial options') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-btns\"\u003E\u003Ca class=\"btn google-play\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FGoogle_Play_Get.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"btn app-store\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FApp_Store_Get.svg\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-process"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var cards = [
    {
        ico: 'assets/img/Ico_1.svg',
        title: 'Set up an account',
        desc: 'Download the app for free, sign up and verify your account.'
    },
    {
        ico: 'assets/img/Ico_2.svg',
        title: 'Apply for a loan',
        desc: 'Apply for a loan and our technology will run a credit score and decide if you are qualified.'
    },
    {
        ico: 'assets/img/Ico_3.svg',
        title: 'Get your cash',
        desc: 'If you qualify, your loan will be disbursed to your wallet.'
    }
]

pug_html = pug_html + "\u003Cdiv class=\"process\"\u003E\u003Cdiv class=\"process__content\"\u003E\u003Cdiv class=\"process__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'How it works') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"process__content-cards\"\u003E";
// iterate cards
;(function(){
  var $$obj = cards;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var card = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card__ico\"\u003E\u003Cimg" + (pug.attr("src", card.ico, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__title\"\u003E" + (pug.escape(null == (pug_interp = card.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc\"\u003E" + (pug.escape(null == (pug_interp = card.desc) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__next\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FNext_ico.svg\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var card = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card__ico\"\u003E\u003Cimg" + (pug.attr("src", card.ico, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__title\"\u003E" + (pug.escape(null == (pug_interp = card.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc\"\u003E" + (pug.escape(null == (pug_interp = card.desc) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__next\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FNext_ico.svg\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-download"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"download\"\u003E\u003Cdiv class=\"download__content\"\u003E\u003Cdiv class=\"download__title\"\u003E" + (pug.escape(null == (pug_interp = 'Get it on Play Store and download on the App Store') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"download__btns\"\u003E\u003Ca class=\"btn google-play\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FGoogle_Play_Get_green.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"btn app-store\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FApp_Store_Get_green.svg\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["nav-menu"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var list = [
    {text: 'Home', href:'#home'},
    {text: 'Contact', href:'#'},
    {text: 'Privacy', href:'#footer'},
]
pug_html = pug_html + "\u003Cdiv class=\"nav-bar\"\u003E\u003Cul class=\"nav-bar__list\"\u003E";
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var item = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli class=\"nav-bar__list-item\"\u003E\u003Ca" + (pug.attr("href", item.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var item = $$obj[pug_index1];
pug_html = pug_html + "\u003Cli class=\"nav-bar__list-item\"\u003E\u003Ca" + (pug.attr("href", item.href, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-header"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E\u003Ca class=\"header__logo\" href=\"#home\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FLogo.svg\"\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"header__menu\"\u003E";
pug_mixins["nav-menu"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-footer"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"footer\" id=\"footer\"\u003E\u003Cdiv class=\"footer__content\"\u003E\u003Cdiv class=\"footer__logo\"\u003E\u003Cimg src=\"assets\u002Fimg\u002FLogo.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__addr\"\u003E\u003Cdiv class=\"footer__addr-title\"\u003E" + (pug.escape(null == (pug_interp = 'Office') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__addr-info\"\u003E" + (pug.escape(null == (pug_interp = '4 Perez Drive, Lekki Phase 1, Lagos.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contact\"\u003E\u003Cdiv class=\"footer__contact-title\"\u003E" + (pug.escape(null == (pug_interp = 'Contact') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contact-email\"\u003E" + (pug.escape(null == (pug_interp = 'hello@irorun.com') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__contact-phone\"\u003E" + (pug.escape(null == (pug_interp = '+234 809 666 8877') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__powered\"\u003E\u003Cdiv class=\"footer__powered-by\"\u003E" + (pug.escape(null == (pug_interp = 'Powered by YesCredit Limited.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__powered-licensed\"\u003E" + (pug.escape(null == (pug_interp = 'licensed as a Money Lender by the Lagos State Government of Nigeria.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"favicons\u002Fapple-touch-icon.png\"\u003E\u003Clink rel=\"icon\" type=\"image\u002Fpng\" sizes=\"32x32\" href=\"favicons\u002Ffavicon-32x32.png\"\u003E\u003Clink rel=\"icon\" type=\"image\u002Fpng\" sizes=\"16x16\" href=\"favicons\u002Ffavicon-16x16.png\"\u003E\u003Clink rel=\"manifest\" href=\"favicons\u002Fsite.webmanifest\"\u003E\u003Clink rel=\"mask-icon\" href=\"favicons\u002Fsafari-pinned-tab.svg\" color=\"#5bbad5\"\u003E\u003Cmeta name=\"msapplication-TileColor\" content=\"#da532c\"\u003E\u003Cmeta name=\"theme-color\" content=\"#ffffff\"\u003E\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = 'Irorun') ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["section-header"]();
pug_mixins["section-main"]();
pug_mixins["section-about"]();
pug_mixins["section-process"]();
pug_mixins["section-download"]();
pug_mixins["section-footer"]();
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(835).readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ 835:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(227);
/******/ 	__webpack_require__(291);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(259);
/******/ 	
/******/ })()
;