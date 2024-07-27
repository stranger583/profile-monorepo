import{r as f}from"./index-RYns6xqu.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=f,x=Symbol.for("react.element"),E=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,b=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,p){var r,o={},a=null,i=null;p!==void 0&&(a=""+p),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)N.call(e,r)&&!g.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:x,type:t,key:a,ref:i,props:o,_owner:b.current}}s.Fragment=E;s.jsx=l;s.jsxs=l;d.exports=s;var h=d.exports;const _=({children:t,appName:e})=>h.jsx("button",{className:" ui-bg-red-500 ui-text-white ui-max-w-52 ui-h-36",onClick:()=>alert(`Hello from your ${e} app!`),children:t});_.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},appName:{required:!0,tsType:{name:"string"},description:""}}};const O={title:"Example/Button",component:_,tags:["autodocs"]},n={args:{appName:"Button",children:"I am a primary button."}};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    appName: 'Button',
    children: 'I am a primary button.'
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const R=["Primary"];export{n as Primary,R as __namedExportsOrder,O as default};
