var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=u||a||Function("return this")(),l=Object.prototype.toString,d=Math.max,p=Math.min,s=function(){return c.Date.now()};function v(t,e,n){var i,o,r,f,u,a,c=0,l=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=i,r=o;return i=o=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(w,e),l?g(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||v&&t-c>=r}function w(){var t=s();if(h(t))return T(t);u=setTimeout(w,function(t){var n=e-(t-a);return v?p(n,r-(t-c)):n}(t))}function T(t){return u=void 0,b&&i?g(t):(i=o=void 0,f)}function x(){var t=s(),n=h(t);if(i=arguments,o=this,a=t,n){if(void 0===u)return j(a);if(v)return u=setTimeout(w,e),g(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(v="maxWait"in n)?d(m(n.maxWait)||0,e):r,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=a=o=u=void 0},x.flush=function(){return void 0===u?f:T(s())},x}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var u=o.test(t);return u||r.test(t)?f(t.slice(2),u?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:i,maxWait:e,trailing:o})};({form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('[name="email"]')}).form.addEventListener("input",e((function(t){})),500);
//# sourceMappingURL=03-feedback.786bd786.js.map