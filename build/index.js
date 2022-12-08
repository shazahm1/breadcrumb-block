!function(){var e,t={890:function(e,t,r){"use strict";var a=window.wp.blocks,n=window.wp.element,l=(r(184),window.wp.i18n),o=window.wp.blockEditor,c=window.wp.components;const{UnitControl:i=c.__experimentalUnitControl}=wp.components;var s,m,u=window.React;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}var p=JSON.parse('{"TN":"Breadcrumb Block"}');(0,a.registerBlockType)("boldblocks/breadcrumb-block",{title:p.TN,icon:function(e){return u.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",role:"img"},e),s||(s=u.createElement("rect",{width:256,height:256,ry:33.703,fill:"#d20962"})),m||(m=u.createElement("g",{fill:"#fff",strokeWidth:1.093},u.createElement("path",{d:"M142.502 139.779 69.19 214.875c-8.639 8.863-22.173 1.66-22.173-11.79V52.892a13.373 15.658 0 0 1 22.187-11.79l73.286 75.096a13.373 15.658 0 0 1 0 23.58z"}),u.createElement("path",{fillRule:"evenodd",d:"M126.28 38.641a6.032 7.032 0 0 1 8.542 0l72.39 84.382a6.032 7.032 0 0 1 0 9.957l-72.39 84.382a6.04 7.04 0 0 1-8.542-9.957l68.13-79.403-68.13-79.403a6.032 7.032 0 0 1 0-9.958z"}))))},edit:function(e){let{attributes:{gap:t,separator:r,hideCurrentPage:a},setAttributes:s,isSelected:m}=e;const u=[{label:"/",value:"/"},{label:(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 16 16"},(0,n.createElement)("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})),value:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16">\n      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>\n    </svg>'},{label:(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 16 16"},(0,n.createElement)("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})),value:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>'}];return(0,n.createElement)(n.Fragment,null,m&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(c.PanelBody,{title:(0,l.__)("Block settings")},(0,n.createElement)("div",{className:"breadrumb-setings"},(0,n.createElement)(i,{label:(0,l.__)("Gap","breadcrumb-block"),value:t,onChange:e=>s({gap:e})}),(0,n.createElement)("div",{className:"toggle-group-control"},(0,n.createElement)(c.BaseControl,{className:"toggle-group-control__label",label:(0,l.__)("Separator","breadcrumb-block")}),(0,n.createElement)(c.ButtonGroup,{"aria-label":(0,l.__)("Separator icon","breadcrumb-block")},u.map((e=>{let{label:t,value:a,disabled:l=!1}=e;return(0,n.createElement)(c.Button,{key:a,isSmall:!0,variant:a===r?"primary":void 0,onClick:()=>s({separator:a}),style:{verticalAlign:"top"},disabled:l},t)})))),(0,n.createElement)(c.ToggleControl,{label:(0,l.__)("Hide current page","breadcrumb-block"),checked:a,onChange:e=>s({hideCurrentPage:e})}))))),(0,n.createElement)("div",(0,o.useBlockProps)({style:{"--bb--crumb-gap":t},className:a?"hide-current-page":""}),(0,n.createElement)("nav",{role:"navigation","aria-label":"breadcrumb",class:"breadcrumb"},(0,n.createElement)("ol",{class:"breadcrumb-items"},(0,n.createElement)("li",{class:"breadcrumb-item"},(0,n.createElement)("a",{href:"#",rel:"home"},(0,n.createElement)("span",{class:"breadcrumb-item-name"},(0,l.__)("Home","breadcrumb-block"))),(0,n.createElement)("span",{className:"sep",dangerouslySetInnerHTML:{__html:r}})),(0,n.createElement)("li",{class:"breadcrumb-item breadcrumb-item--parent"},(0,n.createElement)("a",{href:"#"},(0,n.createElement)("span",{class:"breadcrumb-item-name"},(0,l.__)("Dummy parent","breadcrumb-block"))),(0,n.createElement)("span",{className:"sep",dangerouslySetInnerHTML:{__html:r}})),(0,n.createElement)("li",{class:"breadcrumb-item breadcrumb-item--current"},(0,n.createElement)("span",{class:"breadcrumb-item-name"},(0,l.__)("Dummy title","breadcrumb-block")))))))}})},184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=function(t,r,n,l){if(!r){var o=1/0;for(m=0;m<e.length;m++){r=e[m][0],n=e[m][1],l=e[m][2];for(var c=!0,i=0;i<r.length;i++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(c=!1,l<o&&(o=l));if(c){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,n,l]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,o=r[0],c=r[1],i=r[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(i)var m=i(a)}for(t&&t(r);s<o.length;s++)l=o[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(m)},r=self.webpackChunkbreadcrumb_block=self.webpackChunkbreadcrumb_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=a.O(void 0,[431],(function(){return a(890)}));n=a.O(n)}();