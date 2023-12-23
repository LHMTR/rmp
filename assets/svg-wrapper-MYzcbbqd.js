import{j as E}from"./chakra-IQx0hwqQ.js";import{t as D,N as ie,q as V,j as ve,d as U,af as $,ag as J,ah as Y,ai as ye,aj as fe,y as Ae,z as ce,S as ke,e as Ee,n as ae,v as X,r as de,E as le,A as ue,D as Z,Q as Ne,K as re,J as Ce,a4 as Le,a6 as Pe}from"./index-YSqMuAKL.js";import{r as ge,b}from"./react-5OqMKJZU.js";import{u as W,e as Ie,i as je}from"./clipboard-a7gu6IVb.js";import{b as T,r as B,f as _e,F as G,p as K,d as ze,e as Me,a as R}from"./helpers-u2X5bCnQ.js";import{m as be}from"./misc-nodes-UjzJ-xCg.js";import{s as Se}from"./stations-INmKrIPE.js";const We=()=>{const[t,e]=ge.useState({width:void 0,height:void 0});return ge.useEffect(()=>{function n(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),t},xe=t=>t.filterNodes((e,n)=>e.startsWith("stn")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),pe=t=>t.filterDirectedEdges((e,n,a,r,g,p,l)=>e.startsWith("line")&&n.visible&&n.reconcileId==="").sort((e,n)=>t.getEdgeAttribute(e,"zIndex")-t.getEdgeAttribute(n,"zIndex")).map(e=>{const n=t.getEdgeAttribute(e,"type"),a=t.getEdgeAttribute(e,n),r=t.getEdgeAttribute(e,"style"),g=t.getEdgeAttribute(e,r),[p,l]=t.extremities(e),d=t.getNodeAttributes(p),x=t.getNodeAttributes(l);return{edge:e,x1:d.x,y1:d.y,x2:x.x,y2:x.y,type:n,attr:a,style:r,styleAttr:g}}),he=t=>t.filterNodes((e,n)=>e.startsWith("misc_node")).map(e=>[e,t.getNodeAttributes(e)]).filter(([e,n])=>n.visible).sort((e,n)=>e[1].zIndex-n[1].zIndex).map(([e,n])=>({node:e,visible:n.visible,zIndex:n.zIndex,x:n.x,y:n.y,type:n.type,[n.type]:n[n.type]})),De=t=>{const e=t.filterDirectedEdges((a,r,g,p,l,d,x)=>a.startsWith("line")&&r.reconcileId!==""),n={};for(const a of e){const r=t.getEdgeAttribute(a,"reconcileId");r in n?n[r].push(a):n[r]=[a]}return n},Ke=t=>{const e=De(t),n=[],a=[];return Object.values(e).forEach(r=>{var P;if(r.length===1){a.push(...r);return}const g=t.getEdgeAttribute(r.at(0),"type");if(!r.every(u=>t.getEdgeAttribute(u,"type")===g)){a.push(...r);return}const p=t.getEdgeAttribute(r.at(0),"style");if(!r.every(u=>t.getEdgeAttribute(u,"style")===p)){a.push(...r);return}const l={},d=new Set,x=new Set,S=Object.fromEntries(r.map(u=>{var F,O;const[I,M]=t.extremities(u);return l[I]=((F=l[I])!=null?F:0)+1,l[M]=((O=l[M])!=null?O:0)+1,d.add(I),x.add(M),[I,[u,M]]})),k=Array.from(d).filter(u=>l[u]===1),j=Array.from(x).filter(u=>l[u]===1);if(k.length!==1||j.length!==1){a.push(...r);return}const C=k[0],_=j[0];if(C===_){a.push(...r);return}const L=[S[C][0]];let m=S[C][1];for(let u=1;u<r.length;u=u+1){const I=(P=S[m])==null?void 0:P.at(1);if(!I){a.push(...r);return}L.push(S[m][0]),m=I}if(m!==_||L.length!==r.length){a.push(...r);return}n.push(L)}),{allReconciledLines:n,danglingLines:a}},$e=(t,e)=>{if(!e.every(r=>t.hasEdge(r)))return;const n=e.map(r=>{var k,j,C;const[g,p]=t.extremities(r),l=t.getNodeAttributes(g),d=t.getNodeAttributes(p),x=t.getEdgeAttribute(r,"type"),S=(k=t.getEdgeAttribute(r,x))!=null?k:D[x].defaultAttrs;return(C=(j=D[x])==null?void 0:j.generatePath(l.x,d.x,l.y,d.y,S))!=null?C:"M ".concat(l.x,",").concat(l.y," L ").concat(d.x,",").concat(d.y)});let a="".concat(n[0]," ");for(let r=1;r<e.length;r=r+1)a+=n[r].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return a},me=t=>{const{id:e,x:n,y:a,handlePointerDown:r,handlePointerMove:g,handlePointerUp:p}=t,l=b.useCallback(S=>r(e,S),[e,r]),d=b.useCallback(S=>g(e,S),[e,g]),x=b.useCallback(S=>p(e,S),[e,p]);return E.jsx("g",{id:e,transform:"translate(".concat(n-6.4,",").concat(a-6.4,")scale(0.025)"),onPointerDown:l,onPointerMove:d,onPointerUp:x,style:{cursor:"move"},children:E.jsx("path",{id:"stn_core_".concat(e),fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},we=t=>{const{id:e,path:n,handleClick:a}=t,r=b.useCallback(g=>a(e,g),[e,a]);return E.jsx("path",{id:e,d:n,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onClick:r})},oe=t=>{var L,m;const{id:e,type:n,attrs:a=D[n].defaultAttrs,styleType:r,styleAttrs:g=ie[r].defaultAttrs,newLine:p,handleClick:l}=t,{x1:d,y1:x,x2:S,y2:k}=t,[j,C]=b.useState("M 0,0 L 0,0");b.useEffect(()=>{let P="M 0,0 L 0,0";if(!(n in D))P="M ".concat(d,",").concat(x," L ").concat(S,",").concat(k);else if(["offsetFrom","offsetTo"].every(u=>Object.keys(a).includes(u))&&!Number.isNaN(a.offsetFrom)&&!Number.isNaN(a.offsetTo)&&a.offsetFrom===a.offsetTo&&((d===S||x===k)&&[V.Diagonal,V.Perpendicular].includes(n)||Math.abs((k-x)/(S-d))===1&&[V.Diagonal,V.RotatePerpendicular].includes(n))){const u=a.offsetFrom;P=D[V.Simple].generatePath(d,S,x,k,{offset:u})}else P=D[n].generatePath(d,S,x,k,a);C(P)},[n,JSON.stringify(a),d,S,x,k]);const _=(m=(L=ie[r])==null?void 0:L.component)!=null?m:we;return b.useMemo(()=>E.jsx(_,{id:e,type:n,path:j,styleAttrs:g,newLine:p,handleClick:l}),[e,n,j,r,JSON.stringify(g),p,l])},Be=()=>{const t=ve(),e=b.useRef(window.graph),{telemetry:{project:n}}=U(c=>c.app),{svgViewBoxZoom:a}=U(c=>c.param),{selected:r,refresh:{nodes:g,edges:p},mode:l,active:d,keepLastPath:x,theme:S}=U(c=>c.runtime),[k,j]=b.useState({x:0,y:0}),[C,_]=b.useState({x:0,y:0}),L=W((c,y)=>{y.stopPropagation(),l==="select"&&t($("free"));const v=y.currentTarget,{x:w,y:s}=T(y);v.setPointerCapture(y.pointerId),j({x:w,y:s}),t(J(c)),y.shiftKey?r.has(c)?t(ye(c)):t(fe(c)):r.has(c)||t(Y(new Set([c])))}),m=W((c,y)=>{const{x:v,y:w}=T(y);l==="free"&&d===c?(r.forEach(s=>{e.current.hasNode(s)&&e.current.updateNodeAttributes(s,o=>({...o,x:B(o.x-(k.x-v)*a/100,y.altKey?1:5),y:B(o.y-(k.y-w)*a/100,y.altKey?1:5)}))}),t(Ae()),t(ce())):l.startsWith("line")&&_({x:(k.x-v)*a/100,y:(k.y-w)*a/100})}),P=W((c,y)=>{if(l.startsWith("line")){x||t($("free"));const v=[...Object.values(ke),Ee.Virtual],w=e.current.hasNode(d)&&v.includes(e.current.getNodeAttribute(d,"type"));["stn_core_","virtual_circle_"].forEach(o=>{var h,N;const f=(N=(h=document.elementsFromPoint(y.clientX,y.clientY)[0].attributes)==null?void 0:h.getNamedItem("id"))==null?void 0:N.value,A=f==null?void 0:f.startsWith(o);if(w&&A){const z=l.slice(5),ne="line_".concat(ae(10));e.current.addDirectedEdgeWithKey(ne,d,f.slice(o.length),{visible:!0,zIndex:0,type:z,[z]:structuredClone(D[z].defaultAttrs),style:X.SingleColor,[X.SingleColor]:{color:S},reconcileId:""}),n&&de.event(le.ADD_LINE,{type:z})}}),t(ce()),t(ue(e.current.export()))}else if(l==="free"&&d){const{x:v,y:w}=T(y);k.x-v===0&&k.y-w===0||t(ue(e.current.export()))}t(J(void 0))}),u=W((c,y)=>{y.shiftKey||t(Z()),y.shiftKey&&r.has(c)?t(ye(c)):t(fe(c))}),[I,M]=b.useState(xe(e.current)),[F,O]=b.useState(he(e.current)),[q,H]=b.useState(pe(e.current)),[Q,ee]=b.useState([]),[te,se]=b.useState([]);return b.useEffect(()=>{M(xe(e.current)),O(he(e.current))},[g]),b.useEffect(()=>{H(pe(e.current));const{allReconciledLines:c,danglingLines:y}=Ke(e.current);ee(c),se(y)},[p]),E.jsxs(E.Fragment,{children:[te.map(c=>{const[y,v]=e.current.extremities(c),w=e.current.getNodeAttributes(y),s=e.current.getNodeAttributes(v);return E.jsx(oe,{id:c,x1:w.x,y1:w.y,x2:s.x,y2:s.y,newLine:!1,type:V.Simple,attrs:D[V.Simple].defaultAttrs,styleType:X.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:u},c)}),Q.map(c=>{var f,A;const y=$e(e.current,c);if(!y)return E.jsx(E.Fragment,{});const v=c.at(0),w=e.current.getEdgeAttribute(v,"type"),s=e.current.getEdgeAttribute(v,"style"),o=e.current.getEdgeAttribute(v,s),i=(A=(f=ie[s])==null?void 0:f.component)!=null?A:we;return E.jsx(i,{id:v,type:w,path:y,styleAttrs:o,newLine:!1,handleClick:u},v)}),q.map(({edge:c,x1:y,y1:v,x2:w,y2:s,type:o,attr:i,style:f,styleAttr:A})=>E.jsx(oe,{id:c,x1:y,y1:v,x2:w,y2:s,newLine:!1,type:o,attrs:i,styleType:f,styleAttrs:A,handleClick:u},c)),F.map(c=>{var i,f;const{node:y,x:v,y:w,type:s}=c,o=(f=(i=be[s])==null?void 0:i.component)!=null?f:me;return E.jsx(o,{id:y,x:v,y:w,attrs:c[s],handlePointerDown:L,handlePointerMove:m,handlePointerUp:P},y)}),I.map(c=>{var i,f;const{node:y,x:v,y:w,type:s}=c,o=(f=(i=Se[s])==null?void 0:i.component)!=null?f:me;return E.jsx(o,{id:y,x:v,y:w,attrs:{[s]:c[s]},handlePointerDown:L,handlePointerMove:m,handlePointerUp:P},y)}),l.startsWith("line")&&d&&E.jsx(oe,{id:"create_in_progress___no_use",x1:e.current.getNodeAttribute(d,"x"),y1:e.current.getNodeAttribute(d,"y"),x2:e.current.getNodeAttribute(d,"x")-C.x,y2:e.current.getNodeAttribute(d,"y")-C.y,newLine:!0,type:l.slice(5),attrs:D[l.slice(5)].defaultAttrs,styleType:X.SingleColor,styleAttrs:{color:S}})]})},Xe=()=>{var v,w;const t=ve(),e=b.useRef(window.graph),n=()=>{t(Ae()),t(ce()),t(ue(e.current.export()))},{telemetry:{project:a}}=U(s=>s.app),{svgViewBoxZoom:r,svgViewBoxMin:g}=U(s=>s.param),{mode:p,lastTool:l,active:d,selected:x,keepLastPath:S,theme:k,refresh:{nodes:j}}=U(s=>s.runtime),C=We(),_=((v=C.height)!=null?v:1280)-40,L=((w=C.width)!=null?w:720)-40;b.useEffect(()=>{const s=_e(e.current);Object.entries(s).filter(([o,i])=>i&&o in G).map(([o,i])=>o).filter(o=>G[o]&&document.getElementById(G[o].cssName)===null).map(o=>G[o].cssName).filter((o,i,f)=>i===f.findIndex(A=>A===o)).forEach(o=>{const i=document.createElement("link");i.rel="stylesheet",i.id=o,i.href="/rmp/styles/".concat(o,".css"),document.head.append(i)})},[j]);const[m,P]=b.useState({x:0,y:0}),[u,I]=b.useState({x:0,y:0}),[M,F]=b.useState({x:0,y:0}),[O,q]=b.useState({x:0,y:0}),H=W(s=>{const{x:o,y:i}=T(s);if(p.startsWith("station")){t($("free"));const f=ae(10),A="stn_".concat(f),h=p.slice(8),N=structuredClone(Se[h].defaultAttrs);"color"in N&&(N.color=k);const{x:z,y:ne}=K(o,i,r,g);e.current.addNode(A,{visible:!0,zIndex:0,x:B(z,5),y:B(ne,5),type:h,[h]:N}),n(),a&&de.event(le.ADD_STATION,{type:h}),t(Y(new Set([A])))}else if(p.startsWith("misc-node")){t($("free"));const f=ae(10),A="misc_node_".concat(f),h=p.slice(10),{x:N,y:z}=K(o,i,r,g);e.current.addNode(A,{visible:!0,zIndex:0,x:B(N,5),y:B(z,5),type:h,[h]:structuredClone(be[h].defaultAttrs)}),n(),a&&de.event(le.ADD_STATION,{type:h}),t(Y(new Set([A])))}else p==="free"||p.startsWith("line")?(p.startsWith("line")&&(t($("free")),S&&t(Ne(!1))),F({x:o,y:i}),q(g),s.shiftKey||(t(J("background")),t(Z()))):p==="select"&&(P(K(o,i,r,g)),I(K(o,i,r,g)))}),Q=W(s=>{if(p==="select"){if(m.x!=0&&m.y!=0){const{x:o,y:i}=T(s);I(K(o,i,r,g))}}else if(d==="background"){const{x:o,y:i}=T(s);t(re({x:O.x+(M.x-o)*r/100,y:O.y+(M.y-i)*r/100}))}}),ee=W(s=>{if(p==="select"){const{x:o,y:i}=T(s),{x:f,y:A}=K(o,i,r,g),h=ze(e.current,m.x,m.y,f,A),N=Me(e.current,new Set(h));t(Y(new Set([...s.shiftKey?x:[],...h,...N]))),t($("free")),P({x:0,y:0}),I({x:0,y:0})}d==="background"&&!s.shiftKey&&t(J(void 0))}),te=W(s=>{let o=r;s.deltaY>0&&r+10<400?o=r+10:s.deltaY<0&&r-10>0&&(o=r-10),t(Ce(o));const{x:i,y:f}=T(s),A=s.currentTarget.getBoundingClientRect(),[h,N]=[i/A.width,f/A.height];t(re({x:g.x+i*r/100-L*o/100*h,y:g.y+f*r/100-_*o/100*N}))}),se=W(async s=>{if(R?s.key==="Backspace":s.key==="Delete")x.size>0&&(x.forEach(o=>{e.current.hasNode(o)?e.current.dropNode(o):e.current.hasEdge(o)&&e.current.dropEdge(o)}),t(Z()),n());else if(s.key.startsWith("Arrow")){const i=s.key.endsWith("Left")?-1:s.key.endsWith("Right")?1:0,f=s.key.endsWith("Up")?-1:s.key.endsWith("Down")?1:0;t(re(K(100*i,100*f,r,g)))}else if(s.key==="i"||s.key==="j"||s.key==="k"||s.key==="l"){const i=(s.key==="j"?-1:s.key==="l"?1:0)*10,f=(s.key==="i"?-1:s.key==="k"?1:0)*10;x.size>0&&x.forEach(A=>{e.current.hasNode(A)&&(e.current.updateNodeAttribute(A,"x",h=>(h!=null?h:0)+i),e.current.updateNodeAttribute(A,"y",h=>(h!=null?h:0)+f),n())})}else if(s.key==="f"&&l)t($(l));else if(s.key==="z"&&(R?s.metaKey&&!s.shiftKey:s.ctrlKey))R&&s.preventDefault(),t(Le());else if(s.key==="s")t($("select"));else if((s.key==="c"||s.key==="x")&&(R?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=Ie(e.current,x);navigator.clipboard.writeText(o),s.key==="x"&&(t(Z()),x.forEach(i=>{e.current.hasNode(i)?e.current.dropNode(i):e.current.hasEdge(i)&&e.current.dropEdge(i)}),n())}else if(s.key==="v"&&(R?s.metaKey&&!s.shiftKey:s.ctrlKey)){const o=await navigator.clipboard.readText(),{x:i,y:f}=K(L/2,_/2,r,g),{nodes:A,edges:h}=je(o,e.current,B(i,5),B(f,5));n();const N=structuredClone(A);h.forEach(z=>N.add(z)),t(Y(N))}else(R&&s.key==="z"&&s.metaKey&&s.shiftKey||!R&&s.key==="y"&&s.ctrlKey)&&t(Pe())}),[c,y]=b.useState({sx:0,sy:0,ex:0,ey:0});return b.useEffect(()=>{y({sx:m.x<=u.x?m.x:u.x,ex:m.x>u.x?m.x:u.x,sy:m.y<=u.y?m.y:u.y,ey:m.y>u.y?m.y:u.y})},[u.x,u.y]),E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:_,width:L,viewBox:"".concat(g.x," ").concat(g.y," ").concat(L*r/100," ").concat(_*r/100),onPointerDown:H,onPointerMove:Q,onPointerUp:ee,onWheel:te,tabIndex:0,onKeyDown:se,children:[E.jsx(Be,{}),p==="select"&&m.x!=0&&m.y!=0&&E.jsx("rect",{x:c.sx,y:c.sy,width:c.ex-c.sx,height:c.ey-c.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"})]})};export{Xe as default};