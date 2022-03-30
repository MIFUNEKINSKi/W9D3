/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ (function(module) {

class FollowToggle{

  constructor(el){
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state-id");
    // this.elWrapped = $("follow-toggle").wrap(el);
   debugger
    let a = Render.bind(this);
    a();
   
  }


  
}
const setEventListeners = () => {
  $('.FollowToggle').on('submit', e => {
     e.preventDefault();
     handleClick();
    if (this.followState === "unfollowed") {
     this.followState = "followed";
    }
    if (this.followState === "followed") {
      this.followState = "unfollowed";
    }
     Render();
  });
};

  function handleClick(){
    if (this.followState === "unfollowed") {
      const url = "/users/:user_id/follow";
      const method = "DELETE";
    }
    if (this.followState === "followed") {
      const url = "/users/:id/follow";
      const method = "POST";
    }
    return $.ajax({
      method: method,
      url: url,
      data: {
        
      },
      dataType: 'JSON'
    });


  }

function Render() {
  debugger
  if (this.followState === "unfollowed") {
    this.elWrapped.innerText = "Follow!";
  }
  if (this.followState === "followed") {
    this.elWrapped.innerText = "UnFollow!";
  }

  setEventListeners()
} 

module.exports = FollowToggle;



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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
// debugger
$(()=>{
  // debugger
  $(".follow-toggle").each((i, el) => {    
    new FollowToggle(el);
  });

});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map