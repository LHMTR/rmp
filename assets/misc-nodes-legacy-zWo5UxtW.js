System.register(["./index-legacy-J9Jv0M2L.js","./chakra-legacy-oG9ixp5q.js","./react-legacy-J6S8G-Zx.js","./stations-legacy-7FVCjMhS.js"],(function(e,n){"use strict";var t,l,a,o,i,r,s,c,d,m,h,u;return{setters:[e=>{t=e.aq,l=e.C,a=e.f,o=e.ar,i=e.e,r=e.c,s=e.o},e=>{c=e.j},e=>{d=e.b},e=>{m=e.L,h=e.M,u=e.f}],execute:function(){const n={component:e=>{const{id:n,x:t,y:l,handlePointerDown:a,handlePointerMove:o,handlePointerUp:i}=e,r=d.useCallback((e=>a(n,e)),[n,a]),s=d.useCallback((e=>o(n,e)),[n,o]),m=d.useCallback((e=>i(n,e)),[n,i]);return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})rotate(45)`,onPointerDown:r,onPointerMove:s,onPointerUp:m,style:{cursor:"move"},children:[c.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),c.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),c.jsx("circle",{id:`virtual_circle_${n}`,r:5,stroke:"black",fill:"white",fillOpacity:"0"})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[c.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),c.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),c.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),defaultAttrs:{},attrsComponent:()=>c.jsx(t,{fields:[]}),metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},x={num:1,color:[l.Shanghai,"sh1","#E4002B",a.white]},p=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:x).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:x;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.ShmetroNumLineBadge,defaultTheme:x.color})}],g={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=x.num,color:m=x.color}=null!=a?a:x,[h,u]=s>=10?[22.67,10.75]:[21,10],p=d.useCallback((e=>o(n,e)),[n,o]),g=d.useCallback((e=>i(n,e)),[n,i]),f=d.useCallback((e=>r(n,e)),[n,r]);return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:p,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:[c.jsx("rect",{fill:m[2],width:h,height:"22.67"}),c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:u,y:"19",fill:m[3],fontSize:"21.33",letterSpacing:"-1.75",children:s}),c.jsx("text",{className:"rmp-name__zh",x:h+2,y:"12",fontSize:"14.67",children:"号线"}),c.jsxs("text",{className:"rmp-name__en",x:h+4,y:"21.5",fontSize:"8",children:["Line ",s]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),c.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),c.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),c.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),defaultAttrs:x,attrsComponent:()=>c.jsx(t,{fields:p}),metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},f={names:["浦江线","Pujiang Line"],color:[l.Shanghai,"pjl","#B5B5B6",a.white]},y=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:f).names[0],onChange:(e,n)=>{const t=null!=n?n:f;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:f).names[1],onChange:(e,n)=>{const t=null!=n?n:f;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.ShmetroTextLineBadge,defaultTheme:f.color})}],b={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{names:s=f.names,color:m=f.color}=null!=a?a:f,h=d.useRef(null),[u,x]=d.useState({width:12});d.useEffect((()=>x(h.current.getBBox())),[...s,x,h]);const p=d.useCallback((e=>o(n,e)),[n,o]),g=d.useCallback((e=>i(n,e)),[n,i]),y=d.useCallback((e=>r(n,e)),[n,r]);return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:p,onPointerMove:g,onPointerUp:y,style:{cursor:"move"},children:[c.jsx("rect",{fill:m[2],x:"0",width:u.width+7,height:"21"}),c.jsxs("g",{ref:h,children:[c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(u.width+7)/2,y:"4",fontSize:"10",fill:m[3],letterSpacing:"-0.25",children:s[0]}),c.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(u.width+7)/2,y:"13",fontSize:"5",fill:m[3],letterSpacing:"-0.25",children:s[1]})]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),c.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),c.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),defaultAttrs:f,attrsComponent:()=>c.jsx(t,{fields:y}),metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},j={names:["1号线","Line 1"],color:[l.Guangzhou,"gz1","#F3D03E",a.black],tram:!1},w={component:e=>{var n,t;const{id:l,x:a,y:o,attrs:i,handlePointerDown:r,handlePointerMove:s,handlePointerUp:h}=e,{names:u=j.names,color:x=j.color,tram:p=j.tram}=null!=i?i:j,g=d.useCallback((e=>r(l,e)),[l,r]),f=d.useCallback((e=>s(l,e)),[l,s]),y=d.useCallback((e=>h(l,e)),[l,h]);return c.jsx("g",{id:l,transform:`translate(${a}, ${o})scale(${p?.5:1})`,onPointerDown:g,onPointerMove:f,onPointerUp:y,style:{cursor:"move"},children:c.jsx(m,{zhName:null!==(n=u.at(0))&&void 0!==n?n:"",enName:null!==(t=u.at(1))&&void 0!==t?t:"",foregroundColour:x[3],backgroundColour:x[2],spanDigits:!0})})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),c.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),c.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),c.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),defaultAttrs:j,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=r(),d=[{type:"input",label:a("panel.details.nodes.common.nameZh"),value:t.names[0],onChange:e=>{t.names[0]=e,l(n,t)},minW:"full"},{type:"input",label:a("panel.details.nodes.common.nameEn"),value:t.names[1],onChange:e=>{t.names[1]=e,l(n,t)},minW:"full"},{type:"switch",label:a("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:t.tram,onChange:e=>{t.tram=e,l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:c.jsx(o,{type:i.GzmtrLineBadge,defaultTheme:j.color})}];return c.jsx(s,{fields:d})},metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},N=11.84375,v={num:1,color:[l.Beijing,"bj1","#c23a30",a.white]},C=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:v).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:v;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.BjsubwayNumLineBadge,defaultTheme:v.color})}],B={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,{num:m=v.num,color:h=v.color}=null!=o?o:v,u=d.useCallback((e=>i(n,e)),[n,i]),x=d.useCallback((e=>r(n,e)),[n,r]),p=d.useCallback((e=>s(n,e)),[n,s]),g=h[3]===a.black?"#003670":a.white;return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[c.jsx("rect",{fill:h[2],x:"0",width:32.84375,height:"16",rx:"2"}),c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:7.921875,y:"13.5",fill:g,fontSize:"15",letterSpacing:"-1.5",children:m}),c.jsx("text",{className:"rmp-name__zh",x:N+(m>9?5.5:3),y:"8.5",fontSize:"7",fill:g,children:"号线"}),c.jsxs("text",{className:"rmp-name__en",x:N+(m>9?6:4.5),y:"13.5",fontSize:"4",fill:g,children:["Line ",m]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),c.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),c.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),c.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),defaultAttrs:v,attrsComponent:()=>c.jsx(t,{fields:C}),metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},S={names:["八通线","Batong Line"],color:[l.Beijing,"bj1","#c23a30",a.white]},z=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:S).names[0],onChange:(e,n)=>{const t=null!=n?n:S;return t.names[0]=e.toString(),t}},{type:"input",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:S).names[1],onChange:(e,n)=>{const t=null!=n?n:S;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.BjsubwayTextLineBadge,defaultTheme:S.color})}],P={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,{names:m=S.names,color:h=S.color}=null!=o?o:S,u=d.useRef(null),[x,p]=d.useState({width:12});d.useEffect((()=>p(u.current.getBBox())),[...m,p,u]);const g=d.useCallback((e=>i(n,e)),[n,i]),f=d.useCallback((e=>r(n,e)),[n,r]),y=d.useCallback((e=>s(n,e)),[n,s]),b=Math.max(28.84375,x.width),j=h[3]===a.black?"#003670":a.white;return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:g,onPointerMove:f,onPointerUp:y,style:{cursor:"move"},children:[c.jsx("rect",{fill:h[2],x:"0",width:b+4,height:"16",rx:"2"}),c.jsxs("g",{ref:u,children:[c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(b+4)/2,y:"8",fontSize:"7",fill:j,children:m[0]}),c.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(b+4)/2,y:"13.5",fontSize:"4",fill:j,children:m[1]})]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),c.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),c.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),defaultAttrs:S,attrsComponent:()=>c.jsx(t,{fields:z}),metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},k={num:1,branch:!1,color:[l.Suzhou,"sz1","#78BA25",a.white]},_=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:k).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:k;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:e=>{var n;return null!==(n=null==e?void 0:e.branch)&&void 0!==n?n:k.branch},onChange:(e,n)=>{const t=null!=n?n:k;return t.branch=e,t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.SuzhouRTNumLineBadge,defaultTheme:k.color})}],L={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=k.num,branch:m=k.branch,color:h=k.color}=null!=a?a:k,u=d.useCallback((e=>o(n,e)),[n,o]),x=d.useCallback((e=>i(n,e)),[n,i]),p=d.useCallback((e=>r(n,e)),[n,r]);return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:u,onPointerMove:x,onPointerUp:p,style:{cursor:"move"},children:[c.jsx("rect",{fill:h[2],width:"20",height:"20",rx:"2",ry:"2"}),c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:h[3],fontSize:"15",letterSpacing:"-1",children:s}),m&&c.jsxs(c.Fragment,{children:[c.jsx("text",{className:"rmp-name__zh",x:22.5,y:"10",fontSize:"10",children:"支线"}),c.jsx("text",{className:"rmp-name__en",x:22.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),c.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:k,attrsComponent:()=>c.jsx(t,{fields:_}),metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},A={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[l.Shanghai,"jsr","#000000",a.white],rotate:0,italic:"normal",bold:"normal"},T=[{type:"textarea",label:"panel.details.nodes.text.content",value:e=>(null!=e?e:A).content,onChange:(e,n)=>{const t=null!=n?n:A;return t.content=e.toString(),t}},{type:"input",label:"panel.details.nodes.text.fontSize",value:e=>(null!=e?e:A).fontSize,validator:e=>Number.isInteger(e)&&Number(e)>0,onChange:(e,n)=>{const t=null!=n?n:A;return t.fontSize=Number(e),t}},{type:"input",label:"panel.details.nodes.text.lineHeight",value:e=>(null!=e?e:A).lineHeight,validator:e=>Number.isInteger(e)&&Number(e)>0,onChange:(e,n)=>{const t=null!=n?n:A;return t.lineHeight=Number(e),t}},{type:"select",label:"panel.details.nodes.text.textAnchor",value:e=>(null!=e?e:A).textAnchor,options:{start:"start",middle:"middle",end:"end"},onChange:(e,n)=>{const t=null!=n?n:A;return t.textAnchor=e,t}},{type:"select",label:"panel.details.nodes.text.dominantBaseline",value:e=>(null!=e?e:A).dominantBaseline,options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:(e,n)=>{const t=null!=n?n:A;return t.dominantBaseline=e,t}},{type:"select",label:"panel.details.nodes.text.language",value:e=>(null!=e?e:A).language,options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:(e,n)=>{const t=null!=n?n:A;return t.language=e.toString(),t}},{type:"select",label:"panel.details.nodes.text.rotate",value:e=>{var n;return null!==(n=null==e?void 0:e.rotate)&&void 0!==n?n:A.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:(e,n)=>{const t=null!=n?n:A;return t.rotate=Number(e),t}},{type:"switch",label:"panel.details.nodes.text.italic",isChecked:e=>{var n;return"italic"===(null!==(n=null==e?void 0:e.italic)&&void 0!==n?n:A.italic)},onChange:(e,n)=>{const t=null!=n?n:A;return t.italic=e?"italic":"normal",t}},{type:"switch",label:"panel.details.nodes.text.bold",isChecked:e=>{var n;return"bold"===(null!==(n=null==e?void 0:e.bold)&&void 0!==n?n:A.bold)},onChange:(e,n)=>{const t=null!=n?n:A;return t.bold=e?"bold":"normal",t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.Text,defaultTheme:A.color})}],M={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{content:s=A.content,fontSize:m=A.fontSize,lineHeight:u=A.lineHeight,textAnchor:x=A.textAnchor,dominantBaseline:p=A.dominantBaseline,language:g=A.language,color:f=A.color,rotate:y=A.rotate,italic:b=A.italic,bold:j=A.bold}=null!=a?a:A,w=d.useRef(null),[N,v]=d.useState({x:0,y:0,width:32,height:16});d.useEffect((()=>v(w.current.getBBox())),[s,x,p,v,w]);const C=d.useCallback((e=>o(n,e)),[n,o]),B=d.useCallback((e=>i(n,e)),[n,i]),S=d.useCallback((e=>r(n,e)),[n,r]);return c.jsx("g",{id:n,transform:`translate(${t}, ${l})rotate(${y})`,onPointerDown:C,onPointerMove:B,onPointerUp:S,style:{cursor:"move"},children:c.jsx(h,{ref:w,text:s.split("\n"),lineHeight:u,grow:"down",className:`rmp-name__${g}`,fontSize:m,textAnchor:x,dominantBaseline:p,fill:f[2],fontStyle:b,fontWeight:j})})},icon:c.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:c.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),defaultAttrs:A,attrsComponent:()=>c.jsx(t,{fields:T}),metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},D={num:1,color:[l.Berlin,"bu1","#62AD2D",a.white]},U=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:D).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:D;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.BerlinUBahnLineBadge,defaultTheme:D.color})}],$={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=D.num,color:m=D.color}=null!=a?a:D,h=d.useCallback((e=>o(n,e)),[n,o]),u=d.useCallback((e=>i(n,e)),[n,i]),x=d.useCallback((e=>r(n,e)),[n,r]),p=m[3];return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[c.jsx("rect",{fill:m[2],x:"0",width:"25",height:"15"}),c.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:p,fontSize:"14",letterSpacing:"1",children:["U",s]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),c.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),defaultAttrs:D,attrsComponent:()=>c.jsx(t,{fields:U}),metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},R={num:1,color:[l.Berlin,"bs1","#DD6CA6",a.white]},E=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:R).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:R;return Number.isNaN(e)||(t.num=Number(e)),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.BerlinSBahnLineBadge,defaultTheme:R.color})}],q={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=R.num,color:m=R.color}=null!=a?a:R,[h,u]=s>=10?[6,19.75]:[10,20],x=d.useCallback((e=>o(n,e)),[n,o]),p=d.useCallback((e=>i(n,e)),[n,i]),g=d.useCallback((e=>r(n,e)),[n,r]),f=m[3];return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[c.jsx("rect",{fill:m[2],x:"0",width:"30",height:"15",rx:"8"}),c.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:h,y:"12.5",fill:f,fontSize:"14",letterSpacing:"0",children:"S"}),c.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:u,y:"12.5",fill:f,fontSize:"14",letterSpacing:"-0.2",children:s})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),c.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),defaultAttrs:R,attrsComponent:()=>c.jsx(t,{fields:E}),metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},W={num:1,color:[l.Chongqing,"cq1","#e4002b",a.white]},H=[{type:"input",label:"panel.details.nodes.common.num",value:e=>(null!=e?e:W).num,validator:e=>!Number.isNaN(e),onChange:(e,n)=>{const t=null!=n?n:W;return Number.isNaN(Number(e))?t.num=e:t.num=Number(e),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.ChongqingRTNumLineBadge,defaultTheme:W.color})}],I={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=W.num,color:m=W.color}=null!=a?a:W,h=d.useCallback((e=>o(n,e)),[n,o]),u=d.useCallback((e=>i(n,e)),[n,i]),x=d.useCallback((e=>r(n,e)),[n,r]),p=m[3],g=Number.isInteger(s)?16:15,[f,y]=Number.isInteger(s)?Number(s)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[c.jsx("rect",{fill:m[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),c.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:y,y:"10",fill:p,fontSize:g,letterSpacing:f,dominantBaseline:"central",children:s})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),c.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),defaultAttrs:W,attrsComponent:()=>c.jsx(t,{fields:H}),metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},Z={names:["空港线","Konggang Line"],color:[l.Chongqing,"cq3","#003da5",a.white]},F=[{type:"input",label:"panel.details.nodes.common.nameZh",value:e=>(null!=e?e:Z).names[0],onChange:(e,n)=>{const t=null!=n?n:Z;return t.names[0]=e.toString(),t}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:e=>(null!=e?e:Z).names[1],onChange:(e,n)=>{const t=null!=n?n:Z;return t.names[1]=e.toString(),t}},{type:"custom",label:"color",component:c.jsx(o,{type:i.ChongqingRTTextLineBadge,defaultTheme:Z.color})}],G={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{names:s=Z.names,color:m=Z.color}=null!=a?a:Z,u=d.useRef(null),x=d.useCallback((e=>o(n,e)),[n,o]),p=d.useCallback((e=>i(n,e)),[n,i]),g=d.useCallback((e=>r(n,e)),[n,r]),f=m[3];return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[c.jsx("rect",{fill:m[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:f,fontSize:"6",letterSpacing:"0",children:s[0]}),c.jsx(h,{ref:u,text:s[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:f,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),c.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),c.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),defaultAttrs:Z,attrsComponent:()=>c.jsx(t,{fields:F}),metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},K=11.84375,O={num:1,color:[l.Shenzhen,"sz1","#00b140",a.white],isBranch:!1},V={component:e=>{const{id:n,x:t,y:l,attrs:o,handlePointerDown:i,handlePointerMove:r,handlePointerUp:s}=e,{num:m=O.num,color:h=O.color,isBranch:u=O.isBranch}=null!=o?o:O,x=d.useCallback((e=>i(n,e)),[n,i]),p=d.useCallback((e=>r(n,e)),[n,r]),g=d.useCallback((e=>s(n,e)),[n,s]),f=h[3]===a.black?"#003670":a.white,y=u?10:K+(m>9?6.5:3),b=u?-1:0,j=u?11:K+(m>9?7:3.5),w=u?6:9.921875;return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:x,onPointerMove:p,onPointerUp:g,style:{cursor:"move"},children:[c.jsx("rect",{fill:h[2],x:"0",width:32.84375,height:"16",rx:"2"}),c.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:w,y:"13.5",fill:f,fontSize:"15",letterSpacing:"-1",children:m}),c.jsxs("text",{className:"rmp-name__zh",x:y,y:"9.5",fontSize:"6",fill:f,letterSpacing:b,children:["号线",u?"支线":""]}),c.jsxs("text",{className:"rmp-name__en",x:j,y:"13.5",fontSize:"3",fill:f,children:[u?"Branch":""," Line ",m]})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),c.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),c.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),c.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),defaultAttrs:O,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=r(),d=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:c.jsx(o,{type:i.ShenzhenMetroNumLineBadge,defaultTheme:O.color}),minW:"full"},{type:"switch",label:a("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:t.isBranch,onChange:e=>{t.isBranch=e,l(n,t)},minW:"full"}];return c.jsx(s,{fields:d})},metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},J={num:1,color:[l.Singapore,"ewl","#009739",a.white]},Q={component:e=>{const{id:n,x:t,y:l,attrs:a,handlePointerDown:o,handlePointerMove:i,handlePointerUp:r}=e,{num:s=J.num,color:m=J.color}=null!=a?a:J,h=d.useCallback((e=>o(n,e)),[n,o]),u=d.useCallback((e=>i(n,e)),[n,i]),x=d.useCallback((e=>r(n,e)),[n,r]),p=m[3],g=m[2];return c.jsxs("g",{id:n,transform:`translate(${t}, ${l})`,onPointerDown:h,onPointerMove:u,onPointerUp:x,style:{cursor:"move"},children:[c.jsx("circle",{r:"6",fill:g}),c.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:p,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:s})]})},icon:c.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[c.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),c.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),defaultAttrs:J,attrsComponent:e=>{const{id:n,attrs:t,handleAttrsUpdate:l}=e,{t:a}=r(),d=[{type:"input",label:a("panel.details.nodes.common.num"),value:String(t.num),validator:e=>!Number.isNaN(e),onChange:e=>{t.num=Number(e),l(n,t)},minW:"full"},{type:"custom",label:a("color"),component:c.jsx(o,{type:i.MRTDestinationNumbers,defaultTheme:J.color}),minW:"full"}];return c.jsx(s,{fields:d})},metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}};e("m",{[i.Virtual]:n,[i.ShmetroNumLineBadge]:g,[i.ShmetroTextLineBadge]:b,[i.GzmtrLineBadge]:w,[i.BjsubwayNumLineBadge]:B,[i.BjsubwayTextLineBadge]:P,[i.SuzhouRTNumLineBadge]:L,[i.BerlinSBahnLineBadge]:q,[i.BerlinUBahnLineBadge]:$,[i.ChongqingRTNumLineBadge]:I,[i.ChongqingRTTextLineBadge]:G,[i.ShenzhenMetroNumLineBadge]:V,[i.MRTDestinationNumbers]:Q,[i.Facilities]:u,[i.Text]:M})}}}));