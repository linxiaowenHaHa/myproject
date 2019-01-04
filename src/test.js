// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\24237\\Documents\\bxunit\\myproject\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-656039f0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": "630",
    "height": "350",
    "marginTop": "60",
    "marginLeft": "60"
  },
  "info": {
    "marginTop": "40",
    "fontSize": "40",
    "textAlign": "center"
  },
  "div": {
    "width": "600",
    "height": "300",
    "marginTop": "50",
    "marginLeft": "75",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)",
    "justifyContent": "center"
  },
  "text": {
    "textAlign": "center",
    "color": "#41b883",
    "fontSize": "88"
  },
  "indicator-text": {
    "fontSize": "88",
    "textAlign": "center"
  },
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700"
  },
  "indicator": {
    "width": "700",
    "height": "700",
    "itemColor": "#008000",
    "itemSelectedColor": "#FF0000",
    "position": "absolute",
    "top": "200",
    "left": "0"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      state: "----",
      src:
        "http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4",
      lists: [1,2,3,4,5,6],
      loadinging: 'hide',
      refreshing: 'hide',
      imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
    }
  },
  mounted(){
    // let url = 'http://www.jspang.com/DemoApi/newsApi.php';
    // this.getList(url,res =>{
    //   modal.toast({message:'请求成功',duration:1});
    //   this.lists = res.data;
    //   console.log(res.data);
    // })
  },
  methods: {
    // getList(url, callBack){
    //   stream.fetch({
    //     method:'GET',
    //     type:'json',
    //     url:url
    //   },callBack);
    // },
    onloading(event){
      modal.toast({message: '加载中...',duration: 1});
      this.loadinging = 'show';
      setTimeout(() => {
        this.loadinging = 'hide';
        let length = this.lists.length;
        for(let i=length;i<length+2;i++){
          this.lists.push(i+1);
        }
      }, 2000);
    },
    onrefresh(event){
      modal.toast({message: 'refreshing...',duration: 1});
      this.refreshing = 'show';
      setTimeout(() => {
        this.refreshing = 'hide';
        this.lists = [1,2,3];
      }, 2000);
    },
    onpullingdown(event){
      modal.toast({message: 'pulling...',duration: 1});     
    },
    // onstart(event) {
    //   this.state = "onstart";
    // },
    // onpause(event) {
    //   this.state = "onpause";
    // },
    // onfinish(event) {
    //   this.state = "onfinish";
    // },
    // onfail(event) {
    //   this.state = "onfinish";
    // }
  }
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_HelloWorld_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_HelloWorld_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_components_HelloWorld_vue__);

__WEBPACK_IMPORTED_MODULE_0__src_components_HelloWorld_vue___default.a.el = '#root';
new Vue(__WEBPACK_IMPORTED_MODULE_0__src_components_HelloWorld_vue___default.a);

/***/ })
/******/ ]);