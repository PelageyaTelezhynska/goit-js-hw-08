!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,m=function(){return s.Date.now()};function b(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,a=setTimeout(T,t),d?b(e):f}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=m();if(w(e))return O(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?b(e):(i=r=void 0,f)}function x(){var e=m(),n=w(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(T,t),b(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},x.flush=function(){return void 0===a?f:O(m())},x}function g(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=f.test(e);return o||a.test(e)?c(e.slice(2),o?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};({form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('[name="email"]')}).form.addEventListener("input",n((function(e){})),500)}();
//# sourceMappingURL=03-feedback.b86f383e.js.map
