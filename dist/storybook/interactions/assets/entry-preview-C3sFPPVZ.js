import{B as _}from"./lit-element-DI7ROxEU.js";import{d as a}from"./index-DrFu-skq.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(o,r)=>r===void 0?o?._$litType$!==void 0:o?._$litType$===r,{simulatePageLoad:s,simulateDOMContentLoaded:y}=__STORYBOOK_MODULE_PREVIEW_API__,{global:O}=__STORYBOOK_MODULE_GLOBAL__;var u=Object.defineProperty,T=(o,r)=>{for(var n in r)u(o,n,{get:r[n],enumerable:!0})},h={};T(h,{parameters:()=>c,render:()=>m,renderToCanvas:()=>M});var{Node:L}=O,m=(o,r)=>{let{id:n,component:i}=r;if(!i)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);let d=document.createElement(i);return Object.entries(o).forEach(([p,e])=>{d[p]=e}),d};function M({storyFn:o,kind:r,name:n,showMain:i,showError:d,forceRemount:p},e){let t=o();if(i(),l(t)){(p||!e.querySelector('[id="root-inner"]'))&&(e.innerHTML='<div id="root-inner"></div>');let f=e.querySelector('[id="root-inner"]');_(t,f),s(e)}else if(typeof t=="string")e.innerHTML=t,s(e);else if(t instanceof L){if(e.firstChild===t&&!p)return;e.innerHTML="",e.appendChild(t),y()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${n}" of "${r}".`,description:a`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c={renderer:"web-components"};export{c as parameters,m as render,M as renderToCanvas};
