"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[619,7719,3166],{47432:function(e,t,n){n.d(t,{u:function(){return c}});var i=n(67294),a=n(90594),c=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],c=(0,a.jU)()&&window.LC_API||{},M=(0,i.useState)(!1),o=M[0],r=M[1],l=new URLSearchParams((0,a.jU)()&&window.location.search||"").get("is_livechat_open");return(0,i.useEffect)((function(){var e=null,t=null;if((0,a.jU)()){var i=(0,a.ge)();e=setInterval((function(){var e=(0,a.KR)(i);r(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==l?void 0:l.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),(0,i.useEffect)((function(){if((0,a.jU)()){var e=(0,a.ge)();t&&window.LiveChatWidget.on("ready",(function(){var t;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var n=(0,a.$Z)(e),i=(0,a.KR)(e),c=new URLSearchParams(window.location.search),M=n||{},r=M.utm_source,l=M.utm_medium,u=M.utm_campaign,N=i||{},d=N.loginid,g=N.email,D=N.landing_company_shortcode,m=N.currency,I=N.residence,j=N.first_name,w=N.last_name,s={is_logged_in:o,loginid:null!=d?d:"",landing_company_shortcode:null!=D?D:"",currency:null!=m?m:"",residence:null!=I?I:"",email:null!=g?g:"",platform:null!==(t=c.get("platform"))&&void 0!==t?t:"",utm_source:null!=r?r:"",utm_medium:null!=l?l:"",utm_campaign:null!=u?u:""};window.LiveChatWidget.call("set_session_variables",s),o?(g&&window.LiveChatWidget.call("set_customer_email",g),j&&w&&window.LiveChatWidget.call("set_customer_name",j+" "+w)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var z=c.get("is_livechat_open");"true"===(null==z?void 0:z.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(e){e.greeting&&window.LC_API.open_chat_window()}))}))}}),[o,t]),[t,c]}},77343:function(e,t,n){n.d(t,{d:function(){return I}});var i=n(67294),a=n(83494),c=n(67719),M=n(13166),o=n(10783),r=n(70349),l=n(63524),u=n(98367),N=n(19643),d=n(88879),g=a.default.div.withConfig({displayName:"_article__Content",componentId:"sc-fjf9vc-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),D=a.default.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-fjf9vc-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],N.Z.tabletL),m=a.default.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-fjf9vc-2"})(["margin-top:8rem;"]),I=function(e){var t=e.children,n=e.header,a=void 0===n?"":n,N=e.title,I=void 0===N?"":N,j=e.description,w=void 0===j?"":j,s=e.text,z=void 0===s?"":s,A=e.label,x=void 0===A?"":A,y=e.is_mounted,p=void 0!==y&&y,L=(0,d.O)(),f=L.platform,_=L.has_platform;return i.createElement(o.Z,null,i.createElement(u.HJ,{title:I,description:w,text:z,label:x,is_mounted:p}),i.createElement(u.W2,{align:"left",justify:"flex-start",direction:"column"},i.createElement(l.Fg,{to:_?"/help-centre/?platform="+f:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},(0,r.NC)("Back")),i.createElement(g,null,i.createElement(D,null,i.createElement(l.Uj,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:a},t)))),i.createElement(m,null,i.createElement(M.Community,null),i.createElement(c.DidntFindYourAnswerBanner,null)))}},13166:function(e,t,n){n.r(t),n.d(t,{Community:function(){return D}});var i=n(67294),a=n(83494),c=n(71082),M=n(63524),o=n(24313),r=n(70349),l=n(98367),u=n(19643),N=(0,a.default)(o.Qj).withConfig({displayName:"_community__StyledLinkButton",componentId:"sc-1kht508-0"})(["border-radius:4px;width:fit-content;@media ","{font-size:14px;padding:10px 16px;}"],u.Z.tablet),d=(0,a.default)(M.h4).withConfig({displayName:"_community__StyledHeader",componentId:"sc-1kht508-1"})(["@media ","{text-align:center;}"],u.Z.tablet),g=(0,a.default)(l.kC).withConfig({displayName:"_community__StyledFlex",componentId:"sc-1kht508-2"})(["@media ","{margin-left:unset;","{text-align:center;}}"],u.Z.tablet,M.xv),D=function(){var e=(0,c.useStaticQuery)("3807150758");return i.createElement(l.S$,{padding:"4rem",background:"var(--color-grey-25)"},i.createElement(l.W2,null,i.createElement(l.kC,{tablet_direction:"column",tablet_ai:"center",max_width:"92rem"},i.createElement(M.et,{alt:"community",data:e.community,width:"41rem"}),i.createElement(g,{tablet_ai:"center",ml:"5rem",direction:"column"},i.createElement(d,{mt:"1rem",as:"h3",type:"section-title"},(0,r.NC)("Have a question?")),i.createElement(M.xv,{size:"var(--text-size-m)",pt:"0.8rem",pb:"3.4rem"},(0,r.NC)("Our Deriv support community can help you find answers.")),i.createElement(N,{secondary:!0,to:"",type:"community",external:!0,target:"_blank",rel:"noopener noreferrer"},(0,r.NC)("Ask the community"))))))};t.default=D},67719:function(e,t,n){n.r(t),n.d(t,{DidntFindYourAnswerBanner:function(){return s},default:function(){return z}});var i=n(67294),a=n(83494),c=n(63524),M=n(24313),o=n(70349),r=n(98367),l=n(47432),u=n(19643);var N=n(30088),d=n(8616),g=a.default.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1xcbcsw-0"})(["background-color:var(--color-black-3);"]),D=(0,a.default)(r.W2).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1xcbcsw-1"})(["padding:3.5rem 0;@media ","{flex-wrap:wrap;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],u.Z.tablet,M.zx),m=a.default.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1xcbcsw-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],u.Z.tabletL),I=(0,a.default)(c.xv).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1xcbcsw-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],u.Z.tablet),j=a.default.button.withConfig({displayName:"_didnt-find-answer__WhatsAppButton",componentId:"sc-1xcbcsw-4"})(["background-color:var(--color-green-3);border:2px solid var(--color-green-3);color:var(--color-white);font-size:var(--text-size-xs);border-radius:4px;height:auto;padding:10px 16px;font-weight:bold;margin-left:16px;&:hover{background-color:var(--color-red);border:2px solid var(--color-red);color:var(--color-white);}"]),w=a.default.img.withConfig({displayName:"_didnt-find-answer__WhatsAppIcon",componentId:"sc-1xcbcsw-5"})(["margin:-3px 8px -3px 0;"]),s=function(){var e=(0,l.u)(),t=e[0],n=e[1],a=(0,N.F)(),c=a.is_south_africa,u=a.is_nigeria;return i.createElement(g,null,i.createElement(D,null,i.createElement(m,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iODcuOTcyJSIgeTI9IjEyLjAyOCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRjQ0NEYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjY0NDQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNNjIgMjFhMiAyIDAgMDEyIDJ2MzQuNzczYTIgMiAwIDAxLTMuMzI5IDEuNDk1TDUzLjYyIDUzSDE4YTIgMiAwIDAxLTItMlY0MGgydjExaDM1LjYyYy40OSAwIC45NjIuMTggMS4zMjkuNTA1TDYyIDU3Ljc3M1YyM0g1MnYtMmgxMHpNNDYgNGEyIDIgMCAwMTIgMnYyOGEyIDIgMCAwMS0yIDJIMTAuMzhsLTcuMDUgNi4yNjhBMiAyIDAgMDEwIDQwLjc3M1Y2YTIgMiAwIDAxMi0yem0wIDJIMnYzNC43NzNsNy4wNTEtNi4yNjhjLjM2Ny0uMzI1Ljg0LS41MDUgMS4zMy0uNTA1SDQ2VjZ6TTMwIDIyYTEgMSAwIDAxLjExNyAxLjk5M0wzMCAyNEg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAyMmgyMXptOS04YTEgMSAwIDAxLjExNyAxLjk5M0wzOSAxNkg5YTEgMSAwIDAxLS4xMTctMS45OTNMOSAxNGgzMHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",alt:"contact us icon"}),i.createElement(I,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},(0,o.NC)("Didn’t find your answer? We can help.")),t&&i.createElement(r.kC,null,i.createElement(M.zx,{secondary:!0,onClick:function(){n.open_chat_window()}},(0,o.NC)("Chat")),(c||u)&&i.createElement(j,{onClick:function(){return window.open(d.II,"_blank")}},i.createElement(w,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4MzUzXzQ2MykiPgo8cGF0aCBkPSJNMTEuNjQ4MSA5LjU4ODAzQzExLjQ1MDEgOS40ODg2OSAxMC40NzYxIDkuMDEwMDMgMTAuMjk0OCA4Ljk0MzM2QzEwLjExMjggOC44NzczNiA5Ljk4MDc1IDguODQ0NjkgOS44NDgwOSA5LjA0MzM2QzkuNzE2NzUgOS4yNDEzNiA5LjMzNjc1IDkuNjg3MzYgOS4yMjE0MiA5LjgxOTM2QzkuMTA2MDkgOS45NTIwMyA4Ljk5MDA5IDkuOTY4MDMgOC43OTIwOSA5Ljg2OTM2QzguNTk0MDkgOS43NjkzNiA3Ljk1NTQyIDkuNTYwNjkgNy4xOTg3NSA4Ljg4NjAzQzYuNjEwMDkgOC4zNjA2OSA2LjIxMjA5IDcuNzEyMDMgNi4wOTY3NSA3LjUxMzM2QzUuOTgxNDIgNy4zMTUzNiA2LjA4NDc1IDcuMjA4MDMgNi4xODM0MiA3LjEwOTM2QzYuMjcyNzUgNy4wMjA2OSA2LjM4MjA5IDYuODc4MDMgNi40ODA3NSA2Ljc2MjY5QzYuNTgwMDkgNi42NDY2OSA2LjYxMjc1IDYuNTY0MDMgNi42Nzk0MiA2LjQzMTM2QzYuNzQ1NDIgNi4yOTkzNiA2LjcxMjc1IDYuMTg0MDMgNi42NjI3NSA2LjA4NDY5QzYuNjEyNzUgNS45ODUzNiA2LjIxNjc1IDUuMDEwMDMgNi4wNTIwOSA0LjYxMzM2QzUuODkwNzUgNC4yMjczNiA1LjcyNzQyIDQuMjgwMDMgNS42MDYwOSA0LjI3MzM2QzUuNDkwNzUgNC4yNjgwMyA1LjM1ODc1IDQuMjY2NjkgNS4yMjYwOSA0LjI2NjY5QzUuMDk0MDkgNC4yNjY2OSA0Ljg3OTQyIDQuMzE2MDMgNC42OTgwOSA0LjUxNDY5QzQuNTE2NzUgNC43MTI2OSA0LjAwNDc1IDUuMTkyMDMgNC4wMDQ3NSA2LjE2NzM2QzQuMDA0NzUgNy4xNDIwMyA0LjcxNDc1IDguMDg0MDMgNC44MTM0MiA4LjIxNjY5QzQuOTEyNzUgOC4zNDg2OSA2LjIxMDc1IDEwLjM1IDguMTk4MDkgMTEuMjA4QzguNjcwNzUgMTEuNDEyIDkuMDM5NDIgMTEuNTM0IDkuMzI3NDIgMTEuNjI0N0M5LjgwMjA5IDExLjc3NiAxMC4yMzQxIDExLjc1NDcgMTAuNTc0OCAxMS43MDM0QzEwLjk1NTQgMTEuNjQ2NyAxMS43NDY4IDExLjIyNCAxMS45MTIxIDEwLjc2MTRDMTIuMDc3NCAxMC4yOTg3IDEyLjA3NzQgOS45MDIwMyAxMi4wMjc0IDkuODE5MzZDMTEuOTc4MSA5LjczNjY5IDExLjg0NjggOS42ODczNiAxMS42NDgxIDkuNTg4MDNaTTguMDMzNDIgMTQuNTIzNEg4LjAzMDc1QzYuODUwNiAxNC41MjM1IDUuNjkyMTQgMTQuMjA2MiA0LjY3Njc1IDEzLjYwNDdMNC40MzYwOSAxMy40NjJMMS45NDIwOSAxNC4xMTY3TDIuNjA3NDIgMTEuNjg0N0wyLjQ1MDc1IDExLjQzNTRDMS43OTEwNSAxMC4zODQ5IDEuNDQyMDUgOS4xNjkxNSAxLjQ0NDA5IDcuOTI4NjlDMS40NDQ3NSA0LjI5NTM2IDQuNDAxNDIgMS4zMzkzNiA4LjAzNjA5IDEuMzM5MzZDOS43OTYwOSAxLjMzOTM2IDExLjQ1MDggMi4wMjYwMyAxMi42OTQ4IDMuMjcxMzZDMTMuMzA4NSAzLjg4MjQ0IDEzLjc5NSA0LjYwOTE4IDE0LjEyNjEgNS40MDk1MkMxNC40NTcxIDYuMjA5ODcgMTQuNjI2MiA3LjA2NzkyIDE0LjYyMzQgNy45MzQwM0MxNC42MjE0IDExLjU2NzQgMTEuNjY1NCAxNC41MjM0IDguMDMzNDIgMTQuNTIzNFpNMTMuNjQyMSAyLjMyNTM2QzEyLjkwNzUgMS41ODU5OCAxMi4wMzM2IDAuOTk5NzE5IDExLjA3MDggMC42MDA1NjFDMTAuMTA4IDAuMjAxNDAzIDkuMDc1NjQgLTAuMDAyNzE3NSA4LjAzMzQyIDIuNzMxODRlLTA1QzMuNjYzNDIgMi43MzE4NGUtMDUgMC4xMDY3NTMgMy41NTY2OSAwLjEwNDc1MyA3LjkyODAzQzAuMTA0NzUzIDkuMzI1MzYgMC40Njk0MTkgMTAuNjg5NCAxLjE2MzQyIDExLjg5MTRMMC4wMzgwODU5IDE2TDQuMjQxNDIgMTQuODk3NEM1LjQwMzgxIDE1LjUzMDYgNi43MDYzOCAxNS44NjI1IDguMDMwMDkgMTUuODYyN0g4LjAzMzQyQzEyLjQwMjggMTUuODYyNyAxNS45NjAxIDEyLjMwNiAxNS45NjIxIDcuOTM0MDNDMTUuOTY1MyA2Ljg5MjIxIDE1Ljc2MTkgNS44NjAwOSAxNS4zNjM3IDQuODk3MzhDMTQuOTY1NSAzLjkzNDY3IDE0LjM4MDMgMy4wNjA0NyAxMy42NDIxIDIuMzI1MzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4MzUzXzQ2MyI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",alt:(0,o.NC)("whatsappicon"),height:"16",width:"16"}),(0,o.NC)("WhatsApp")))))},z=s},59187:function(e,t,n){n.d(t,{DO:function(){return o},dL:function(){return r},eb:function(){return l},qY:function(){return u}});var i=n(83494),a=n(63524),c=n(70349),M=n(19643),o=i.default.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"sc-zvcsgj-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],M.Z.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),M.Z.tabletL),r=(0,i.default)(c.UE).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"sc-zvcsgj-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}@media ","{font-size:16px;}"],M.Z.tabletL),l=(0,i.default)(a.h4).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"sc-zvcsgj-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),u=(0,i.default)(a.xv).withConfig({displayName:"_help-centre-style__StyledText",componentId:"sc-zvcsgj-3"})(["margin-top:1.7rem;"])}}]);
//# sourceMappingURL=0eb8df47b68eda465f4641c28efb72ad051efad7-59d17977f3dce03d5b23.js.map