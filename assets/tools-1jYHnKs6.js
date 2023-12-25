import{t as B,j as s,d as h,s as n,ai as E,aj as m,ak as u,a0 as f,al as j,am as p,q as R}from"./chakra-IQx0hwqQ.js";import{b as S}from"./react-5OqMKJZU.js";import{c as q,j as D,d as T,ab as L,ac as O,ad as z,ae as W,af as d,T as F,O as y,q as w,t as I,e as l,S as G}from"./index-9FeKrI7R.js";import{m as x}from"./misc-nodes-_K5zFHn1.js";import{s as A}from"./stations-mzw_3-DP.js";const c={justifyContent:"flex-start",p:0,w:"100%",h:10},v={p:2.5,h:10},b={p:0,display:"flex",flexDirection:"column"},H=s.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:s.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeDasharray:"2",fill:"none"})}),Y=()=>{const{t}=q(),o=D(),{mode:i,theme:g,paletteAppClip:{output:r}}=T(e=>e.runtime),{preference:{unlockSimplePathAttempts:M,toolsPanel:{expand:a}}}=T(e=>e.app),N=B("white","var(--chakra-colors-gray-800)"),[P,k]=S.useState(!1);S.useEffect(()=>{P&&r&&(o(L(r)),k(!1))},[r==null?void 0:r.toString()]);const V=e=>o(d("station-".concat(e))),$=e=>o(d("line-".concat(e))),C=e=>o(d("misc-node-".concat(e)));return s.jsxs(h,{flexShrink:"0",direction:"column",width:a?450:10,maxWidth:"100%",height:"100%",bg:N,zIndex:"5",transition:"width 0.3s ease-in-out",children:[s.jsx(n,{"aria-label":"Menu",leftIcon:a?s.jsx(O,{size:40,transform:"rotate(90)"}):s.jsx(z,{size:40,transform:"rotate(90)"}),onClick:()=>o(W(!a)),sx:c,children:a?t("panel.tools.showLess"):void 0}),s.jsx(h,{className:"tools",overflow:"auto",children:s.jsxs(E,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[s.jsx(n,{"aria-label":"select",leftIcon:H,onClick:()=>o(d(i==="select"?"free":"select")),variant:i==="select"?"solid":"outline",sx:c,children:a?t("panel.tools.select"):void 0}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.lineDrawing")}),s.jsx(j,{})]}),s.jsxs(p,{sx:b,children:[s.jsxs(h,{children:[s.jsx(F,{theme:g,onClick:()=>{k(!0),o(y(g))}}),s.jsx(R,{fontWeight:"600",pl:"1",alignSelf:"center",children:a?t("color"):void 0})]}),Object.values(w).filter(e=>!(e===w.Simple&&M>=0)).map(e=>s.jsx(n,{"aria-label":e,leftIcon:I[e].icon,onClick:()=>$(e),variant:i==="line-".concat(e)?"solid":"outline",sx:c,children:a?t(I[e].metadata.displayName):void 0},e)),s.jsx(n,{"aria-label":l.Virtual,leftIcon:x[l.Virtual].icon,onClick:()=>C(l.Virtual),variant:i==="misc-node-".concat(l.Virtual)?"solid":"outline",sx:c,children:a?t(x[l.Virtual].metadata.displayName):void 0})]})]}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.stations")}),s.jsx(j,{})]}),s.jsx(p,{sx:b,children:Object.values(G).map(e=>s.jsx(n,{"aria-label":e,leftIcon:A[e].icon,onClick:()=>V(e),variant:i==="station-".concat(e)?"solid":"outline",sx:c,children:a?t(A[e].metadata.displayName):void 0},e))})]}),s.jsxs(m,{children:[s.jsxs(u,{sx:v,children:[a&&s.jsx(f,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.miscellaneousNodes")}),s.jsx(j,{})]}),s.jsx(p,{sx:b,children:Object.values(l).filter(e=>e!==l.Virtual).map(e=>s.jsx(n,{"aria-label":e,leftIcon:x[e].icon,onClick:()=>C(e),variant:i==="misc-node-".concat(e)?"solid":"outline",sx:c,children:a?t(x[e].metadata.displayName):void 0},e))})]})]})})]})};export{Y as default};