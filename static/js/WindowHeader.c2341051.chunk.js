(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[4030],{2153:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ge}});var r=t(4165),o=t(5861),i=t(9439),s=t(2791),a=t(5946),c=t(2893),l=t(9120),d=t(7067),h=t(6096),u=t(2790),f=t(447),p=t(7322),x=t(9230),j=t(4320),m=t(7770),g=t(6538),v=t(713),w=t(5987),b=t(4942),y=t(3433),C=t(1413),Z=t(5984),S=t(5515),k=t(7339),O=t(5105),E=t(3671),M=t(138),A=t(3486),z=t(8817),N=t(7236),T=t(1154),_=t(3321),J=t(9671),R=t(3399),B=t(7705),P=t(4090),G=t(7496),I=t(6146),U=t(3306),V=t(184),D=function(e){var n=e.isOpen,i=e.handleOpenTemplates,s=e.onClose,a=(0,x.$G)().t,c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(9681)("./".concat(n,".json"));case 2:o=e.sent,i(o.default),s();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,V.jsxs)(_.u_,{isOpen:n,onClose:s,children:[(0,V.jsx)(J.Z,{}),(0,V.jsxs)(R.h,{children:[(0,V.jsx)(B.x,{children:a("header.open.gallery")}),(0,V.jsx)(P.o,{}),(0,V.jsx)(G.f,{children:(0,V.jsx)(I.g,{children:["shanghai","guangzhou","beijing","santiago"].map((function(e){return(0,V.jsx)(U.z,{minWidth:200,onClick:function(){return c(e)},children:a("header.open.".concat(e))},e)}))})})]})]})},L=["version"],W=["version"];function H(){var e=(0,x.$G)().t,n=(0,k.u5)(),t=s.useRef(window.graph),a=s.useRef(null),c=s.useRef(null),j=s.useState(!1),m=(0,i.Z)(j,2),g=m[0],v=m[1],_=s.useCallback((function(){n((0,E.n9)()),n((0,O.DR)(t.current.export()))}),[n,E.n9,O.DR,t]),J=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var o,s,a,c,l,d,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null===(o=n.target.files)||void 0===o?void 0:o[0],console.log("OpenActions.handleUploadRMG():: received file",s),"application/json"===(null===s||void 0===s?void 0:s.type)){e.next=6;break}console.error("OpenActions.handleUploadRMG():: Invalid file type! Only file in JSON format is accepted."),e.next=23;break;case 6:return e.prev=6,e.next=9,X(s);case 9:a=e.sent,c=JSON.parse(a),l=c.stn_list,d=c.theme,h=Object.fromEntries(Object.keys(l).filter((function(e){return!["linestart","lineend"].includes(e)})).map((function(e){return[e,"stn_".concat((0,Z.x0)(10))]}))),Object.entries(l).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return!["linestart","lineend"].includes(t)})).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],o=n[1],s=t.current.filterNodes((function(e,n){return Object.values(A.T).includes(n.type)&&n[n.type].names[0]===o.name[0]}));0!==s.length&&(h[r]=s[0])})),Object.entries(l).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return!["linestart","lineend"].includes(t)})).filter((function(e){var n=(0,i.Z)(e,2),r=(n[0],n[1]);return 0===t.current.filterNodes((function(e,n){return Object.values(A.T).includes(n.type)&&n[n.type].names[0]===r.name[0]})).length})).forEach((function(e,n){var r=(0,i.Z)(e,2),o=r[0],s=r[1],a=A.T.ShmetroBasic;"shmetro"===c.style?a=s.transfer.info.flat().length>0?A.T.ShmetroInt:"sh2020"===c.info_panel_type?A.T.ShmetroBasic2020:A.T.ShmetroBasic:"gzmtr"!==c.style&&"mtr"!==c.style||(a=s.transfer.info.flat().length>0?A.T.GzmtrInt:A.T.GzmtrBasic);var l=(0,C.Z)((0,C.Z)({},JSON.parse(JSON.stringify(N.Z[a].defaultAttrs))),{},{names:s.name});if(a===A.T.ShmetroBasic2020)l.color=d;else if(a===A.T.GzmtrBasic)l.color=c.theme,l.lineCode=c.line_num,l.stationCode=s.num;else if(a===A.T.GzmtrInt){var u=JSON.parse(JSON.stringify(s.transfer.info));u.forEach((function(e){return e.forEach((function(e){e[4]="1",e[5]="01"}))})),u[0].unshift([].concat((0,y.Z)(c.theme),[c.line_num,s.num])),l.transfer=u}t.current.addNode(h[o],(0,b.Z)({visible:!0,zIndex:0,x:100+50*n,y:1e3,type:a},a,l))})),Object.entries(l).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return!["linestart","lineend"].includes(t)})).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0];n[1].children.filter((function(e){return!["linestart","lineend"].includes(e)})).forEach((function(e){var n;t.current.addDirectedEdgeWithKey("line_".concat((0,Z.x0)(10)),h[r],h[e],(n={visible:!0,zIndex:0,color:d,type:z.S.Diagonal},(0,b.Z)(n,z.S.Diagonal,JSON.parse(JSON.stringify(T.Z[z.S.Diagonal].defaultAttrs))),(0,b.Z)(n,"reconcileId",""),n))}))})),_(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),console.error("OpenActions.handleUploadRMG():: Unknown error occurred while parsing the uploaded file",e.t0);case 23:n.target.value="";case 24:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),R=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(o){var i,s,a,c,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null===(i=o.target.files)||void 0===i?void 0:i[0],console.log("OpenActions.handleUpload():: received file",s),"application/json"===(null===s||void 0===s?void 0:s.type)){e.next=6;break}console.error("OpenActions.handleUpload():: Invalid file type! Only file in JSON format is accepted."),e.next=28;break;case 6:return e.prev=6,e.next=9,X(s);case 9:return a=e.sent,e.t0=JSON,e.next=13,(0,M._s)(a);case 13:e.t1=e.sent,c=e.t0.parse.call(e.t0,e.t1),c.version,l=(0,w.Z)(c,L),n((0,E.x_)()),t.current.clear(),t.current.import(l.graph),d=(0,C.Z)((0,C.Z)({},l),{},{graph:JSON.stringify(l.graph)}),n((0,O.hf)(d)),_(),e.next=28;break;case 25:e.prev=25,e.t2=e.catch(6),console.error("OpenActions.handleUpload():: Unknown error occurred while parsing the uploaded file",e.t2);case 28:o.target.value="";case 29:case"end":return e.stop()}}),e,null,[[6,25]])})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(o){var i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.version,i=(0,w.Z)(o,W),n((0,E.x_)()),t.current.clear(),t.current.import(i.graph),s=(0,C.Z)((0,C.Z)({},i),{},{graph:JSON.stringify(i.graph)}),n((0,O.hf)(s)),_();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,V.jsxs)(l.v,{children:[(0,V.jsx)(d.j,{as:h.h,size:"sm",variant:"ghost",icon:(0,V.jsx)(p.Ap8,{})}),(0,V.jsxs)(u.q,{children:[(0,V.jsx)(f.s,{icon:(0,V.jsx)(p.KVB,{}),onClick:function(){n((0,E.x_)()),t.current.clear();n((0,O.hf)({graph:"{}",svgViewBoxZoom:100,svgViewBoxMin:{x:0,y:0}})),_()},children:e("header.open.new")}),(0,V.jsx)("input",{ref:c,type:"file",accept:".json",hidden:!0,onChange:R,"data-testid":"file-upload"}),(0,V.jsx)(f.s,{icon:(0,V.jsx)(p.Ap8,{}),onClick:function(){var e;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.click()},children:e("header.open.config")}),(0,V.jsx)("input",{ref:a,type:"file",accept:".json",hidden:!0,onChange:J,"data-testid":"file-upload"}),(0,V.jsx)(f.s,{icon:(0,V.jsx)(p.Ap8,{}),onClick:function(){var e;return null===a||void 0===a||null===(e=a.current)||void 0===e?void 0:e.click()},children:e("header.open.configRMG")}),(0,V.jsxs)(f.s,{icon:(0,V.jsx)(p.uEt,{}),onClick:function(){return v(!0)},children:[e("header.open.gallery"),(0,V.jsx)(S.C,{ml:"1",colorScheme:"green",children:"New"})]}),(0,V.jsx)(D,{isOpen:g,handleOpenTemplates:B,onClose:function(){return v(!1)}})]})]})}var X=function(e){return new Promise((function(n){var t=new FileReader;t.onloadend=function(){return n(t.result)},t.readAsText(e)}))},Y=t(6300),q=t(2406),$=t(3466),K=t(4363),F=t(3578),Q=t(3300),ee=t(3541),ne=function(e){var n=e.isOpen,t=e.onClose,r=(0,x.$G)().t;return(0,V.jsxs)(_.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,V.jsx)(J.Z,{}),(0,V.jsxs)(R.h,{children:[(0,V.jsx)(B.x,{children:r("header.download.termsAndConditions")}),(0,V.jsx)(P.o,{}),(0,V.jsx)(G.f,{children:(0,V.jsxs)(ee.GS,{children:[(0,V.jsxs)(ee.HC,{children:["The layout of the elements on the signage or rail map, is designed by"," ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.shmetro.com/",isExternal:!0,children:["Shanghai Shentong Metro Group ",(0,V.jsx)(K.J,{as:p.jhj})]}),", ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.gzmtr.com/",isExternal:!0,children:["Guangzhou Metro Group ",(0,V.jsx)(K.J,{as:p.jhj})]})," or ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.mtr.com.hk/",isExternal:!0,children:["MTR Corporation ",(0,V.jsx)(K.J,{as:p.jhj})]}),", depending on your selection. You shall grant appropriate permit or license from the relevant company above before using the generated images for commercial purposes, if it is required to do so.",(0,V.jsx)("br",{}),"\u6807\u5fd7\u7248\u6216\u8def\u7ebf\u56fe\u7684\u5143\u7d20\u6216\u5e03\u5c40\uff0c\u57fa\u4e8e\u4f60\u6240\u9009\u62e9\u7684\u98ce\u683c\uff0c\u4e3a",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.shmetro.com/",isExternal:!0,children:["\u4e0a\u6d77\u7533\u901a\u5730\u94c1\u96c6\u56e2 ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\uff0c",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.gzmtr.com/",isExternal:!0,children:["\u5e7f\u5dde\u5730\u94c1\u96c6\u56e2\u516c\u53f8 ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\u6216",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.mtr.com.hk/",isExternal:!0,children:["\u6e2f\u94c1\u516c\u53f8 ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\u6240\u8bbe\u8ba1\u3002\u5728\u4ea7\u751f\u7684\u56fe\u50cf\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u524d\uff0c\u4f60\u5e94\u5411\u76f8\u5173\u516c\u53f8\u53d6\u5f97\u9002\u5f53\u4e4b\u8bb8\u53ef\u8bc1\u6216\u6388\u6743\u3002"]}),(0,V.jsxs)(ee.HC,{children:["The elements including shapes and lines on the image are drawn by"," ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.github.com/thekingofcity",isExternal:!0,children:["thekingofcity ",(0,V.jsx)(K.J,{as:p.jhj})]})," and ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.github.com/wongchito",isExternal:!0,children:["Chito Wong ",(0,V.jsx)(K.J,{as:p.jhj})]}),", based on the design standards or rules of the companies listed above. You may use them for any purposes, but it is recommended to state the name and the link of software alongside.",(0,V.jsx)("br",{}),"\u56fe\u50cf\u7684\u5143\u7d20\uff0c\u5305\u62ec\u56fe\u5f62\u53ca\u7ebf\u6761\uff0c\u5747\u7531",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.github.com/thekingofcity",isExternal:!0,children:["thekingofcity ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\u53ca",(0,V.jsxs)($.r,{color:"teal.500",href:"https://www.github.com/wongchito",isExternal:!0,children:["Chito Wong ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\u57fa\u4e8e\u4e0a\u8ff0\u516c\u53f8\u8bbe\u8ba1\u6807\u51c6\u6216\u51c6\u5219\u7ed8\u5236\u3002\u4f60\u53ef\u5c06\u5176\u7528\u4e8e\u4efb\u4f55\u76ee\u7684\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u4f60\u4e8e\u4f7f\u7528\u540c\u65f6\u9644\u4ee5\u6211\u4eec\u7684\u540d\u5b57\u4ee5\u53ca\u672c\u7f51\u7ad9\u5730\u5740\u3002"]}),(0,V.jsxs)(ee.HC,{children:["Due to copyright, licensing and other legal restrictions, Rail Map Painter uses"," ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://github.com/ButTaiwan/genyo-font",isExternal:!0,children:["GenYoMin provided by ButTaiwan ",(0,V.jsx)(K.J,{as:p.jhj})]}),", and Vegur instead of MTRSung and Myriad Pro respectively to display and generate MTR-style signage. You shall grant appropriate permit or license from the manufacturers before using those generated images for commercial purposes.",(0,V.jsx)("br",{}),"\u7531\u4e8e\u8457\u4f5c\u6743\u53ca\u5176\u4ed6\u6cd5\u5f8b\u9650\u5236\uff0c\u94c1\u8def\u8def\u7ebf\u56fe\u7ed8\u5236\u5668\u4f7f\u7528\u7531",(0,V.jsxs)($.r,{color:"teal.500",href:"https://github.com/ButTaiwan/genyo-font",isExternal:!0,children:["ButTaiwan\u63d0\u4f9b\u7684\u6e90\u6a23\u660e\u9ad4 ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\uff0c\u4ee5\u53caVegur\uff0c\u4ee5\u4ee3\u66ff\u6e2f\u94c1\u6837\u5f0f\u6807\u5fd7\u724c\u6240\u4f7f\u7528\u7684\u5730\u94c1\u5b8b\u53caMyriad Pro\u3002\u5728\u4ea7\u751f\u4e4b\u56fe\u50cf\u7528\u4f5c\u5546\u4e1a\u7528\u9014\u524d\uff0c\u4f60\u5e94\u5411\u5b57\u578b\u751f\u4ea7\u5382\u5546\u53d6\u5f97\u9002\u5f53\u4e4b\u8bb8\u53ef\u8bc1\u6216\u6388\u6743\u3002"]}),(0,V.jsxs)(ee.HC,{children:["The exported images in PNG or SVG format may be modified, published, or used for other purposes except commercial use, under the conditions above.",(0,V.jsx)("br",{}),"\u8f93\u51fa\u7684PNG\u6216SVG\u56fe\u50cf\u53ef\u57fa\u4e8e\u4e0a\u8ff0\u6761\u6b3e\uff0c\u5728\u975e\u5546\u4e1a\u4f7f\u7528\u65f6\uff0c\u7528\u4e8e\u4fee\u6539\u3001\u53d1\u884c\u6216\u5176\u4ed6\u7528\u9014\u3002"]}),(0,V.jsxs)(ee.HC,{children:["All flag emojis shown on Windows platforms are designed by"," ",(0,V.jsxs)($.r,{color:"teal.500",href:"https://openmoji.org/",isExternal:!0,children:["OpenMoji ",(0,V.jsx)(K.J,{as:p.jhj})]})," ","\u2013 the open-source emoji and icon project. License:",(0,V.jsxs)($.r,{color:"teal.500",href:"https://creativecommons.org/licenses/by-sa/4.0/",isExternal:!0,children:["CC BY-SA 4.0 ",(0,V.jsx)(K.J,{as:p.jhj})]}),(0,V.jsx)("br",{}),"\u4e8eWindows\u4f5c\u4e1a\u7cfb\u7edf\u4e0a\u663e\u793a\u7684\u56fd\u65d7Emoji\u4e3a",(0,V.jsxs)($.r,{color:"teal.500",href:"https://openmoji.org/",isExternal:!0,children:["OpenMoji ",(0,V.jsx)(K.J,{as:p.jhj})]}),"\u6240\u8bbe\u8ba1\u3002\u8bb8\u53ef\u8bc1\uff1a",(0,V.jsxs)($.r,{color:"teal.500",href:"https://creativecommons.org/licenses/by-sa/4.0/",isExternal:!0,children:["CC BY-SA 4.0 ",(0,V.jsx)(K.J,{as:p.jhj})]})]}),(0,V.jsxs)(ee.HC,{children:["We reserve the rights, without prior notice, to modify, add, or remove these terms. The Chinese translation is for reference only. In case of any discrepancy between the English version and the Chinese version, the English version shall prevail.",(0,V.jsx)("br",{}),"\u6211\u4eec\u4fdd\u7559\u4fee\u6539\u3001\u65b0\u589e\u6216\u79fb\u9664\u4e0a\u8ff0\u6761\u6b3e\u4e4b\u6743\u5229\uff0c\u800c\u65e0\u9700\u53e6\u884c\u901a\u77e5\u3002\u4e2d\u6587\u8bd1\u672c\u4ec5\u4f9b\u53c2\u8003\uff0c\u6587\u4e49\u5982\u4e0e\u82f1\u6587\u6709\u6b67\u5f02\uff0c\u6982\u4ee5\u82f1\u6587\u672c\u4e3a\u51c6\u3002"]})]})})]})]})},te=t(9704);function re(){var e=(0,x.$G)().t,n=s.useRef(window.graph),t=s.useState("png"),r=(0,i.Z)(t,2),o=r[0],a=r[1],m={png:e("header.download.png"),svg:e("header.download.svg")},g=s.useState(100),v=(0,i.Z)(g,2),w=v[0],b=v[1],C=Object.fromEntries([25,33,50,67,75,80,90,100,110,125,150,175,200,250,300,400,500].map((function(e){return[e,"".concat(e,"%")]}))),Z=s.useState(!1),S=(0,i.Z)(Z,2),O=S[0],E=S[1],A=[{type:"select",label:e("header.download.format"),value:o,options:m,onChange:function(e){return a("png"===e?"png":"svg")}}],z=[{type:"select",label:e("header.download.scale"),value:w,options:C,onChange:function(e){return b(e)}},{type:"switch",label:e("header.download.transparent"),isChecked:O,onChange:E}],N=s.useState(!1),T=(0,i.Z)(N,2),I=T[0],D=T[1],L=s.useState(!1),W=(0,i.Z)(L,2),H=W[0],X=W[1],ee=s.useState(!1),re=(0,i.Z)(ee,2),ae=re[0],ce=re[1],le=s.useState(!1),de=(0,i.Z)(le,2),he=de[0],ue=de[1];return(0,V.jsxs)(l.v,{children:[(0,V.jsx)(d.j,{as:h.h,size:"sm",variant:"ghost",icon:(0,V.jsx)(p.uKn,{})}),(0,V.jsxs)(u.q,{children:[(0,V.jsx)(f.s,{icon:(0,V.jsx)(p.tfk,{}),onClick:function(){var e=(0,M.Ru)(k.ZP.getState().app);oe("RMP_".concat((new Date).valueOf(),".json"),"application/json",e)},children:e("header.download.config")}),(0,V.jsx)(f.s,{icon:(0,V.jsx)(p.e0s,{}),onClick:function(){return D(!0)},children:e("header.download.image")})]}),(0,V.jsxs)(_.u_,{size:"xl",isOpen:I,onClose:function(){return D(!1)},children:[(0,V.jsx)(J.Z,{}),(0,V.jsxs)(R.h,{children:[(0,V.jsx)(B.x,{children:e("header.download.image")}),(0,V.jsx)(P.o,{}),(0,V.jsxs)(G.f,{children:[(0,V.jsx)(j.M5,{fields:A}),"png"===o&&(0,V.jsx)(j.M5,{fields:z}),(0,V.jsx)("br",{}),(0,V.jsx)(Y.X,{isChecked:ae,onChange:function(e){return ce(e.target.checked)},children:(0,V.jsxs)(q.x,{children:[e("header.download.shareInfo1"),(0,V.jsxs)($.r,{color:"teal.500",onClick:function(){return window.open("https://railmapgen.github.io/rmp","_blank")},children:[e("header.about.rmp")," ",(0,V.jsx)(K.J,{as:p.jhj})]}),e("header.download.shareInfo2")]})}),(0,V.jsx)(Y.X,{isChecked:he,onChange:function(e){return ue(e.target.checked)},children:(0,V.jsxs)(q.x,{children:[e("header.download.termsAndConditionsInfo"),(0,V.jsxs)($.r,{color:"teal.500",onClick:function(){return X(!0)},children:[e("header.download.termsAndConditions")," ",(0,V.jsx)(K.J,{as:p.jhj})]}),e("header.download.period")]})})]}),(0,V.jsx)(F.m,{children:(0,V.jsx)(c.U,{children:(0,V.jsx)(U.z,{colorScheme:"teal",variant:"outline",size:"sm",disabled:!he,onClick:function(){D(!1);var e=(0,Q.fx)(n.current),t=e.xMin,r=e.yMin,s=e.xMax,a=e.yMax,c=s-t,l=a-r,d=document.getElementById("canvas").cloneNode(!0);if((0,y.Z)(d.children).filter((function(e){return n.current.hasNode(e.id)&&n.current.getNodeAttribute(e.id,"type")===te.Z.Virtual})).forEach((function(e){return d.removeChild(e)})),ae||d.appendChild(se(s-600,a-60)),d.setAttribute("viewBox","".concat(t," ").concat(r," ").concat(c," ").concat(l)),d.setAttribute("width",c.toString()),d.setAttribute("height",l.toString()),Object.entries({".rmp-name__zh":["font-family"],".rmp-name__en":["font-family"],".rmp-name-station":["paint-order","stroke","stroke-width"]}).forEach((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1],o=document.querySelector(t),s=window.getComputedStyle(o);d.querySelectorAll(t).forEach((function(e){r.forEach((function(n){e.setAttribute(n,s.getPropertyValue(n))})),e.removeAttribute("class")}))})),"svg"!==o){document.body.appendChild(d);var h="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(d.outerHTML)));document.body.removeChild(d);var u=document.createElement("canvas"),f=c*w/100,p=l*w/100;u.width=f,u.height=p;var x=u.getContext("2d");O||(x.fillStyle="#fff",x.fillRect(0,0,f,p));var j=new Image;j.onload=function(){x.drawImage(j,0,0,f,p),u.toBlob((function(e){return ie("RMP_".concat((new Date).valueOf(),".png"),e)}),"image/png")},j.src=h}else oe("RMP_".concat((new Date).valueOf(),".svg"),"image/svg+xml",d.outerHTML)},children:e("header.download.confirm")})})}),(0,V.jsx)(ne,{isOpen:H,onClose:function(){return X(!1)}})]})]})]})}var oe=function(e,n,t){var r=new Blob([t],{type:n});ie(e,r)},ie=function(e,n){var t=window.URL.createObjectURL(n),r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(t)},se=function(e,n){var t=document.createElementNS("http://www.w3.org/2000/svg","g");t.setAttribute("transform","translate(".concat(e,", ").concat(n,")scale(2)"));var r=document.createElementNS("http://www.w3.org/2000/svg","image");r.setAttribute("width","40"),r.setAttribute("height","40"),r.setAttribute("x","-50"),r.setAttribute("y","-20");var o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("font-size","20"),o.appendChild(document.createTextNode("Rail Map Painter"));var i=document.createElementNS("http://www.w3.org/2000/svg","text");return i.setAttribute("y","15"),i.appendChild(document.createTextNode("https://railmapgen.github.io/rmp/")),t.appendChild(r),t.appendChild(o),t.appendChild(i),t},ae=t(176),ce=t(76),le=t(4087),de=t(6718),he=t(7732),ue=function(e){var n=e.isOpen,t=e.onClose,r=(0,x.$G)().t,o=g.ZP.getAppVersion();return(0,V.jsxs)(_.u_,{isOpen:n,onClose:t,size:"xl",scrollBehavior:"inside",children:[(0,V.jsx)(J.Z,{}),(0,V.jsxs)(R.h,{children:[(0,V.jsx)(B.x,{children:r("header.about.title")}),(0,V.jsx)(P.o,{}),(0,V.jsxs)(G.f,{paddingBottom:10,children:[(0,V.jsxs)(ae.k,{direction:"row",children:[(0,V.jsx)(ce.E,{boxSize:"128px",src:"/rmp/logo192.png"}),(0,V.jsxs)(ae.k,{direction:"column",width:"100%",alignItems:"center",justifyContent:"center",children:[(0,V.jsx)(q.x,{fontSize:"xl",as:"b",children:r("header.about.rmp")}),(0,V.jsx)(q.x,{children:o}),(0,V.jsx)(q.x,{children:" "}),(0,V.jsx)(q.x,{fontSize:"sm",children:r("header.about.railmapgen")})]})]}),(0,V.jsx)(le.xu,{margin:5,children:(0,V.jsx)(q.x,{fontSize:"xl",children:r("header.about.desc")})}),(0,V.jsx)(a.X,{as:"h5",size:"sm",mt:3,mb:2,children:r("header.about.contributors")}),(0,V.jsx)(a.X,{as:"h6",size:"xs",my:2,children:r("header.about.coreContributors")}),(0,V.jsx)(I.g,{children:(0,V.jsxs)(de.Vp,{size:"lg",minW:"80%",onClick:function(){return window.open("https://github.com/thekingofcity","_blank")},cursor:"pointer",children:[(0,V.jsx)(he.q,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),(0,V.jsxs)(de.Sn,{display:"block",children:[(0,V.jsx)(q.x,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),(0,V.jsx)(q.x,{fontSize:"sm",children:r("header.about.content1")}),(0,V.jsx)(q.x,{fontSize:"sm",align:"right",children:r("header.about.content2")})]})]})})]})]})]})},fe=t(6690),pe=t(3627),xe=t(954),je=t(8574),me=function(){var e=s.useState(!1),n=(0,i.Z)(e,2),t=n[0],r=n[1],o=(0,k.Qy)((function(e){return e.app})).svgViewBoxZoom,a=(0,k.u5)(),c=[{type:"slider",label:"",value:400-o,min:10,max:390,step:1,onChange:function(e){return a((0,O.u4)(400-e))},leftIcon:(0,V.jsx)(p._a6,{}),rightIcon:(0,V.jsx)(p.Ers,{}),minW:160}];return(0,V.jsxs)(fe.J,{isOpen:t,onOpen:function(){return r(!0)},onClose:function(){return r(!1)},children:[(0,V.jsx)(pe.x,{children:(0,V.jsx)(h.h,{"aria-label":"zoom",variant:"ghost",size:"sm",icon:(0,V.jsx)(p._a6,{}),onClick:function(){return r(!t)}})}),(0,V.jsx)(xe.y,{children:(0,V.jsx)(je.b,{children:(0,V.jsx)(j.M5,{fields:c,noLabel:!0})})})]})};function ge(){var e=(0,x.$G)(),n=e.t,t=e.i18n,w=s.useState(!1),b=(0,i.Z)(w,2),y=b[0],C=b[1],Z=s.useState(g.Sy.DEV),S=(0,i.Z)(Z,2),k=S[0],O=S[1],E=s.useState("unknown"),M=(0,i.Z)(E,2),A=M[0],z=M[1];s.useEffect((function(){function e(){return(e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.ZP.ready();case 2:g.ZP.event(v.zW.APP_LOAD,{isStandaloneWindow:g.ZP.isStandaloneWindow()}),O(g.ZP.getEnv()),z(g.ZP.getAppVersion());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O,z]);var N=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.ZP.setLanguage(n),e.next=3,t.changeLanguage(n);case 3:o=e.sent,document.documentElement.lang=n,document.title=o("header.about.rmp");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,V.jsxs)(j.Td,{children:[(0,V.jsx)(a.X,{as:"h4",size:"md",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:n("header.about.rmp")}),(0,V.jsx)(j.xt,{environment:k,version:A,popoverHeader:k===g.Sy.PRD?void 0:(0,V.jsxs)(x.cC,{i18nKey:"header.popoverHeader",environment:k,children:["You're on ",{environment:k}," environment!"]}),popoverBody:k===g.Sy.PRD?void 0:(0,V.jsx)(x.cC,{i18nKey:"header.popoverBody",children:"This is a testing environment where we test the latest beta RMP."})}),(0,V.jsxs)(c.U,{ml:"auto",children:[(0,V.jsx)(me,{}),(0,V.jsx)(H,{}),(0,V.jsx)(re,{}),(0,V.jsxs)(l.v,{children:[(0,V.jsx)(d.j,{as:h.h,icon:(0,V.jsx)(p.mp2,{}),variant:"ghost",size:"sm"}),(0,V.jsxs)(u.q,{children:[(0,V.jsx)(f.s,{onClick:function(){return N(m.s.English)},children:"English"}),(0,V.jsx)(f.s,{onClick:function(){return N(m.s.ChineseSimp)},children:"\u7b80\u4f53\u4e2d\u6587"}),(0,V.jsx)(f.s,{onClick:function(){return N(m.s.ChineseTrad)},children:"\u7e41\u9ad4\u4e2d\u6587"})]})]}),(0,V.jsx)(h.h,{size:"sm",variant:"ghost","aria-label":"Help",icon:(0,V.jsx)(p.r$n,{}),onClick:function(){return C(!0)}})]}),(0,V.jsx)(ue,{isOpen:y,onClose:function(){return C(!1)}})]})}},3300:function(e,n,t){"use strict";t.d(n,{Z9:function(){return o},fx:function(){return i},yK:function(){return r}});var r=function(e){var n=e.currentTarget.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}},o=function(e,n){return Math.round(e/n)*n},i=function(e){var n=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],t=n[0],r=n[1],o=n[2],i=n[3];return e.forEachNode((function(e,n){t=Math.min(n.x,t),r=Math.min(n.y,r),o=Math.max(n.x,o),i=Math.max(n.y,i)})),{xMin:t-=150,yMin:r-=150,xMax:o+=150,yMax:i+=150}}},9681:function(e,n,t){var r={"./beijing.json":[4781,2639],"./guangzhou.json":[7845,5202],"./santiago.json":[8470,6398],"./shanghai.json":[7414,8233]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=9681,e.exports=o}}]);
//# sourceMappingURL=WindowHeader.c2341051.chunk.js.map