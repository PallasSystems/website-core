import{r as v,R as s}from"./index-BwDkhjyp.js";import{P as i}from"./index-Dk74W0Oi.js";var N=["color","size","title","className"];function f(){return f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)}function P(e,r){if(e==null)return{};var n=j(e,r),t,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function j(e,r){if(e==null)return{};var n={},t=Object.keys(e),l,a;for(a=0;a<t.length;a++)l=t[a],!(r.indexOf(l)>=0)&&(n[l]=e[l]);return n}var p=v.forwardRef(function(e,r){var n=e.color,t=e.size,l=e.title,a=e.className,o=P(e,N);return s.createElement("svg",f({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:n,className:["bi","bi-git",a].filter(Boolean).join(" ")},o),l?s.createElement("title",null,l):null,s.createElement("path",{d:"M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"}))});p.propTypes={color:i.string,size:i.oneOfType([i.string,i.number]),title:i.string,className:i.string};p.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var x=["color","size","title","className"];function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function E(e,r){if(e==null)return{};var n=z(e,r),t,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function z(e,r){if(e==null)return{};var n={},t=Object.keys(e),l,a;for(a=0;a<t.length;a++)l=t[a],!(r.indexOf(l)>=0)&&(n[l]=e[l]);return n}var g=v.forwardRef(function(e,r){var n=e.color,t=e.size,l=e.title,a=e.className,o=E(e,x);return s.createElement("svg",m({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:t,height:t,fill:n,className:["bi","bi-github",a].filter(Boolean).join(" ")},o),l?s.createElement("title",null,l):null,s.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"}))});g.propTypes={color:i.string,size:i.oneOfType([i.string,i.number]),title:i.string,className:i.string};g.defaultProps={color:"currentColor",size:"1em",title:null,className:""};const I=e=>e.indexOf("github")>-1,C=(e,r,n)=>{let t;return e&&e.length>0&&(r&&r.length>0?n&&n.length>0?n.endsWith("/")?t=n+r+"/"+e:t=n+"/"+r+"/"+e:t="https://github.com/"+r+"/"+e:n&&n.length>0?n.endsWith("/")?t=n+e:t=n+"/"+e:t="https://github.com/"+e),t},b=({endpoint:e,project:r,repository:n,className:t,imgFn:l,imgProps:a})=>{const o=C(n,r,e),y=t&&t.trim().length>0?t:"text-light",O=(w,d,c)=>{let u=null;if(typeof d=="function")u=d(c);else{const h=c||{};I(w)?u=s.createElement(g,{title:"GitHub",...h}):u=s.createElement(p,{...h})}return u};return s.createElement(s.Fragment,null,o&&o.length>0?s.createElement("a",{id:"SCMIcon."+r+"."+n,className:y,href:o},O(o,l,a)):null)};try{b.displayName="SCMIcon",b.__docgenInfo={description:"",displayName:"SCMIcon",props:{endpoint:{defaultValue:null,description:"",name:"endpoint",required:!1,type:{name:"string | undefined"}},project:{defaultValue:null,description:"",name:"project",required:!0,type:{name:"string"}},repository:{defaultValue:null,description:"",name:"repository",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},imgFn:{defaultValue:null,description:"",name:"imgFn",required:!1,type:{name:"((props?: ImageProperty | undefined) => ReactNode) | undefined"}},imgProps:{defaultValue:null,description:"",name:"imgProps",required:!1,type:{name:"ImageProperty | undefined"}}}}}catch{}export{C as G,b as S};
