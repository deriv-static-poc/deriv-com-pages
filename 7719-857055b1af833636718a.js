"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[7719],{47432:function(M,n,i){i.d(n,{u:function(){return t}});var e=i(67294),N=i(90594),t=function(){var M=(0,e.useState)(!1),n=M[0],i=M[1],t=(0,N.jU)()&&window.LC_API||{},c=(0,e.useState)(!1),D=c[0],g=c[1],a=new URLSearchParams((0,N.jU)()&&window.location.search||"").get("is_livechat_open");return(0,e.useEffect)((function(){var M=null,n=null;if((0,N.jU)()){var e=(0,N.ge)();M=setInterval((function(){var M=(0,N.KR)(e);g(!!M)}),1e3),n=setTimeout((function(){var M,n;M=function(){window.LiveChatWidget.on("ready",(function(){i(!0),"true"===(null==a?void 0:a.toLowerCase())&&window.LC_API.open_chat_window()}))},(n=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(n),M&&M()}),2e3)}return function(){clearInterval(M),clearTimeout(n)}}),[]),(0,e.useEffect)((function(){if((0,N.jU)()){var M=(0,N.ge)();n&&window.LiveChatWidget.on("ready",(function(){var n;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var i=(0,N.$Z)(M),e=(0,N.KR)(M),t=new URLSearchParams(window.location.search),c=i||{},g=c.utm_source,a=c.utm_medium,u=c.utm_campaign,o=e||{},I=o.loginid,j=o.email,w=o.landing_company_shortcode,A=o.currency,r=o.residence,d=o.first_name,l=o.last_name,z={is_logged_in:D,loginid:null!=I?I:"",landing_company_shortcode:null!=w?w:"",currency:null!=A?A:"",residence:null!=r?r:"",email:null!=j?j:"",platform:null!==(n=t.get("platform"))&&void 0!==n?n:"",utm_source:null!=g?g:"",utm_medium:null!=a?a:"",utm_campaign:null!=u?u:""};window.LiveChatWidget.call("set_session_variables",z),D?(j&&window.LiveChatWidget.call("set_customer_email",j),d&&l&&window.LiveChatWidget.call("set_customer_name",d+" "+l)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var x=t.get("is_livechat_open");"true"===(null==x?void 0:x.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(M){M.greeting&&window.LC_API.open_chat_window()}))}))}}),[D,n]),[n,t]}},67719:function(M,n,i){i.r(n),i.d(n,{DidntFindYourAnswerBanner:function(){return z},default:function(){return x}});var e=i(67294),N=i(83494),t=i(63524),c=i(24313),D=i(70349),g=i(98367),a=i(47432),u=i(19643);var o=i(30088),I=i(8616),j=N.default.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1xcbcsw-0"})(["background-color:var(--color-black-3);"]),w=(0,N.default)(g.W2).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1xcbcsw-1"})(["padding:3.5rem 0;@media ","{flex-wrap:wrap;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],u.Z.tablet,c.zx),A=N.default.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1xcbcsw-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],u.Z.tabletL),r=(0,N.default)(t.xv).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1xcbcsw-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],u.Z.tablet),d=N.default.button.withConfig({displayName:"_didnt-find-answer__WhatsAppButton",componentId:"sc-1xcbcsw-4"})(["background-color:var(--color-green-3);border:2px solid var(--color-green-3);color:var(--color-white);font-size:var(--text-size-xs);border-radius:4px;height:auto;padding:10px 16px;font-weight:bold;margin-left:16px;&:hover{background-color:var(--color-red);border:2px solid var(--color-red);color:var(--color-white);}"]),l=N.default.img.withConfig({displayName:"_didnt-find-answer__WhatsAppIcon",componentId:"sc-1xcbcsw-5"})(["margin:-3px 8px -3px 0;"]),z=function(){var M=(0,a.u)(),n=M[0],i=M[1],N=(0,o.F)(),t=N.is_south_africa,u=N.is_nigeria;return e.createElement(j,null,e.createElement(w,null,e.createElement(A,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),e.createElement(r,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},(0,D.NC)("Didn’t find your answer? We can help.")),n&&e.createElement(g.kC,null,e.createElement(c.zx,{secondary:!0,onClick:function(){i.open_chat_window()}},(0,D.NC)("Chat")),(t||u)&&e.createElement(d,{onClick:function(){return window.open(I.II,"_blank")}},e.createElement(l,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4MzUzXzQ2MykiPgo8cGF0aCBkPSJNMTEuNjQ4MSA5LjU4ODAzQzExLjQ1MDEgOS40ODg2OSAxMC40NzYxIDkuMDEwMDMgMTAuMjk0OCA4Ljk0MzM2QzEwLjExMjggOC44NzczNiA5Ljk4MDc1IDguODQ0NjkgOS44NDgwOSA5LjA0MzM2QzkuNzE2NzUgOS4yNDEzNiA5LjMzNjc1IDkuNjg3MzYgOS4yMjE0MiA5LjgxOTM2QzkuMTA2MDkgOS45NTIwMyA4Ljk5MDA5IDkuOTY4MDMgOC43OTIwOSA5Ljg2OTM2QzguNTk0MDkgOS43NjkzNiA3Ljk1NTQyIDkuNTYwNjkgNy4xOTg3NSA4Ljg4NjAzQzYuNjEwMDkgOC4zNjA2OSA2LjIxMjA5IDcuNzEyMDMgNi4wOTY3NSA3LjUxMzM2QzUuOTgxNDIgNy4zMTUzNiA2LjA4NDc1IDcuMjA4MDMgNi4xODM0MiA3LjEwOTM2QzYuMjcyNzUgNy4wMjA2OSA2LjM4MjA5IDYuODc4MDMgNi40ODA3NSA2Ljc2MjY5QzYuNTgwMDkgNi42NDY2OSA2LjYxMjc1IDYuNTY0MDMgNi42Nzk0MiA2LjQzMTM2QzYuNzQ1NDIgNi4yOTkzNiA2LjcxMjc1IDYuMTg0MDMgNi42NjI3NSA2LjA4NDY5QzYuNjEyNzUgNS45ODUzNiA2LjIxNjc1IDUuMDEwMDMgNi4wNTIwOSA0LjYxMzM2QzUuODkwNzUgNC4yMjczNiA1LjcyNzQyIDQuMjgwMDMgNS42MDYwOSA0LjI3MzM2QzUuNDkwNzUgNC4yNjgwMyA1LjM1ODc1IDQuMjY2NjkgNS4yMjYwOSA0LjI2NjY5QzUuMDk0MDkgNC4yNjY2OSA0Ljg3OTQyIDQuMzE2MDMgNC42OTgwOSA0LjUxNDY5QzQuNTE2NzUgNC43MTI2OSA0LjAwNDc1IDUuMTkyMDMgNC4wMDQ3NSA2LjE2NzM2QzQuMDA0NzUgNy4xNDIwMyA0LjcxNDc1IDguMDg0MDMgNC44MTM0MiA4LjIxNjY5QzQuOTEyNzUgOC4zNDg2OSA2LjIxMDc1IDEwLjM1IDguMTk4MDkgMTEuMjA4QzguNjcwNzUgMTEuNDEyIDkuMDM5NDIgMTEuNTM0IDkuMzI3NDIgMTEuNjI0N0M5LjgwMjA5IDExLjc3NiAxMC4yMzQxIDExLjc1NDcgMTAuNTc0OCAxMS43MDM0QzEwLjk1NTQgMTEuNjQ2NyAxMS43NDY4IDExLjIyNCAxMS45MTIxIDEwLjc2MTRDMTIuMDc3NCAxMC4yOTg3IDEyLjA3NzQgOS45MDIwMyAxMi4wMjc0IDkuODE5MzZDMTEuOTc4MSA5LjczNjY5IDExLjg0NjggOS42ODczNiAxMS42NDgxIDkuNTg4MDNaTTguMDMzNDIgMTQuNTIzNEg4LjAzMDc1QzYuODUwNiAxNC41MjM1IDUuNjkyMTQgMTQuMjA2MiA0LjY3Njc1IDEzLjYwNDdMNC40MzYwOSAxMy40NjJMMS45NDIwOSAxNC4xMTY3TDIuNjA3NDIgMTEuNjg0N0wyLjQ1MDc1IDExLjQzNTRDMS43OTEwNSAxMC4zODQ5IDEuNDQyMDUgOS4xNjkxNSAxLjQ0NDA5IDcuOTI4NjlDMS40NDQ3NSA0LjI5NTM2IDQuNDAxNDIgMS4zMzkzNiA4LjAzNjA5IDEuMzM5MzZDOS43OTYwOSAxLjMzOTM2IDExLjQ1MDggMi4wMjYwMyAxMi42OTQ4IDMuMjcxMzZDMTMuMzA4NSAzLjg4MjQ0IDEzLjc5NSA0LjYwOTE4IDE0LjEyNjEgNS40MDk1MkMxNC40NTcxIDYuMjA5ODcgMTQuNjI2MiA3LjA2NzkyIDE0LjYyMzQgNy45MzQwM0MxNC42MjE0IDExLjU2NzQgMTEuNjY1NCAxNC41MjM0IDguMDMzNDIgMTQuNTIzNFpNMTMuNjQyMSAyLjMyNTM2QzEyLjkwNzUgMS41ODU5OCAxMi4wMzM2IDAuOTk5NzE5IDExLjA3MDggMC42MDA1NjFDMTAuMTA4IDAuMjAxNDAzIDkuMDc1NjQgLTAuMDAyNzE3NSA4LjAzMzQyIDIuNzMxODRlLTA1QzMuNjYzNDIgMi43MzE4NGUtMDUgMC4xMDY3NTMgMy41NTY2OSAwLjEwNDc1MyA3LjkyODAzQzAuMTA0NzUzIDkuMzI1MzYgMC40Njk0MTkgMTAuNjg5NCAxLjE2MzQyIDExLjg5MTRMMC4wMzgwODU5IDE2TDQuMjQxNDIgMTQuODk3NEM1LjQwMzgxIDE1LjUzMDYgNi43MDYzOCAxNS44NjI1IDguMDMwMDkgMTUuODYyN0g4LjAzMzQyQzEyLjQwMjggMTUuODYyNyAxNS45NjAxIDEyLjMwNiAxNS45NjIxIDcuOTM0MDNDMTUuOTY1MyA2Ljg5MjIxIDE1Ljc2MTkgNS44NjAwOSAxNS4zNjM3IDQuODk3MzhDMTQuOTY1NSAzLjkzNDY3IDE0LjM4MDMgMy4wNjA0NyAxMy42NDIxIDIuMzI1MzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4MzUzXzQ2MyI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",alt:(0,D.NC)("whatsappicon"),height:"16",width:"16"}),(0,D.NC)("WhatsApp")))))},x=z}}]);
//# sourceMappingURL=7719-857055b1af833636718a.js.map