import{g as m}from"./_commonjsHelpers-BosuxZz1.js";import{r as p}from"./index-BwDkhjyp.js";var c={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=p,y=Symbol.for("react.element"),v=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,E=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function x(n,r,s){var o,i={},t=null,e=null;s!==void 0&&(t=""+s),r.key!==void 0&&(t=""+r.key),r.ref!==void 0&&(e=r.ref);for(o in r)d.call(r,o)&&!O.hasOwnProperty(o)&&(i[o]=r[o]);if(n&&n.defaultProps)for(o in r=n.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:y,type:n,key:t,ref:e,props:i,_owner:E.current}}f.Fragment=v;f.jsx=x;f.jsxs=x;c.exports=f;var N=c.exports,l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var r={}.hasOwnProperty;function s(){for(var t="",e=0;e<arguments.length;e++){var a=arguments[e];a&&(t=i(t,o(a)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var a in t)r.call(t,a)&&t[a]&&(e=i(e,a));return e}function i(t,e){return e?t?t+" "+e:t+e:t}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(l);var R=l.exports;const S=m(R),b=["xxl","xl","lg","md","sm","xs"],j="xs",u=p.createContext({prefixes:{},breakpoints:b,minBreakpoint:j});function B(n,r){const{prefixes:s}=p.useContext(u);return n||s[r]||r}function h(){const{breakpoints:n}=p.useContext(u);return n}function w(){const{minBreakpoint:n}=p.useContext(u);return n}const C=p.forwardRef(({bsPrefix:n,fluid:r=!1,as:s="div",className:o,...i},t)=>{const e=B(n,"container"),a=typeof r=="string"?`-${r}`:"-fluid";return N.jsx(s,{ref:t,...i,className:S(o,r?`${e}${a}`:e)})});C.displayName="Container";export{C,h as a,w as b,S as c,N as j,B as u};
