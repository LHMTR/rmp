System.register(["./index-legacy-J9Jv0M2L.js","./stations-legacy-7FVCjMhS.js"],(function(t,e){"use strict";var s,r,u,d,i,o;return{setters:[t=>{s=t.S,r=t.t,u=t.N,d=t.L,i=t.v},t=>{o=t.s}],execute:function(){const e=[s.ShmetroBasic2020],c=t("f",((t,s,r)=>{const u=t.getNodeAttribute(s,"type"),d=t.getNodeAttribute(s,u).names,i={...o[r].defaultAttrs,names:d};Object.values(e).includes(u)&&Object.values(e).includes(r)||(i.nameOffsetX=t.getNodeAttribute(s,u).nameOffsetX,i.nameOffsetY=t.getNodeAttribute(s,u).nameOffsetY),t.removeNodeAttribute(s,u),t.mergeNodeAttributes(s,{type:r,[r]:i})})),g=(t("c",((t,e,s)=>t.filterNodes(((t,s)=>t.startsWith("stn")&&s.type===e)).forEach((e=>{c(t,e,s)})))),t("a",((t,e,s,r)=>t.filterEdges((s=>t.getEdgeAttribute(s,"style")===e)).forEach((e=>{g(t,e,s,r)})))),t("d",((t,e,s)=>{const u=t.getEdgeAttribute(e,"type");t.removeEdgeAttribute(e,u);const d=structuredClone(r[s].defaultAttrs);t.mergeEdgeAttributes(e,{type:s,[s]:d})})),t("e",((t,e,s,r)=>{const o=t.getEdgeAttribute(e,"style"),c=t.getEdgeAttribute(e,o);t.removeEdgeAttribute(e,o);const g=structuredClone(u[s].defaultAttrs);d.includes(o)&&d.includes(s)?g.color=c.color:d.includes(s)&&r&&(g.color=r),t.mergeEdgeAttributes(e,{style:s,[s]:g}),s===i.River?t.setEdgeAttribute(e,"zIndex",-5):t.setEdgeAttribute(e,"zIndex",0)})));t("b",((t,e,s)=>t.filterEdges((e=>d.includes(t.getEdgeAttribute(e,"style")))).forEach((r=>{const u=t.getEdgeAttributes(r),d=u[u.style].color;d[0]==e[0]&&d[1]==e[1]&&d[2]==e[2]&&d[3]==e[3]&&t.mergeEdgeAttributes(r,{[u.style]:{color:s}})}))))}}}));