"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[7275],{47432:function(e,n,t){t.d(n,{u:function(){return a}});var i=t(67294),o=t(90594),a=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],a=(0,o.jU)()&&window.LC_API||{},c=(0,i.useState)(!1),u=c[0],r=c[1],M=new URLSearchParams((0,o.jU)()&&window.location.search||"").get("is_livechat_open");return(0,i.useEffect)((function(){var e=null,n=null;if((0,o.jU)()){var i=(0,o.ge)();e=setInterval((function(){var e=(0,o.KR)(i);r(!!e)}),1e3),n=setTimeout((function(){var e,n;e=function(){window.LiveChatWidget.on("ready",(function(){t(!0),"true"===(null==M?void 0:M.toLowerCase())&&window.LC_API.open_chat_window()}))},(n=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(n),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(n)}}),[]),(0,i.useEffect)((function(){if((0,o.jU)()){var e=(0,o.ge)();n&&window.LiveChatWidget.on("ready",(function(){var n;window.LC_API.open_chat_window(),window.LC_API.hide_chat_window();var t=(0,o.$Z)(e),i=(0,o.KR)(e),a=new URLSearchParams(window.location.search),c=t||{},r=c.utm_source,M=c.utm_medium,w=c.utm_campaign,l=i||{},d=l.loginid,g=l.email,s=l.landing_company_shortcode,I=l.currency,m=l.residence,_=l.first_name,D=l.last_name,A={is_logged_in:u,loginid:null!=d?d:"",landing_company_shortcode:null!=s?s:"",currency:null!=I?I:"",residence:null!=m?m:"",email:null!=g?g:"",platform:null!==(n=a.get("platform"))&&void 0!==n?n:"",utm_source:null!=r?r:"",utm_medium:null!=M?M:"",utm_campaign:null!=w?w:""};window.LiveChatWidget.call("set_session_variables",A),u?(g&&window.LiveChatWidget.call("set_customer_email",g),_&&D&&window.LiveChatWidget.call("set_customer_name",_+" "+D)):window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")};var x=a.get("is_livechat_open");"true"===(null==x?void 0:x.toLowerCase())&&window.LC_API.open_chat_window(),window.LiveChatWidget.on("new_event",(function(e){e.greeting&&window.LC_API.open_chat_window()}))}))}}),[u,n]),[n,a]}},97275:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(67294),o=t(83494),a=t(47432);var c=t(19643),u=t(36681),r=o.default.div.withConfig({displayName:"livechat__StyledLiveChat",componentId:"sc-1tec5qy-0"})(["position:fixed;bottom:",";right:1.6rem;background-color:var(--color-white);box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);-webkit-tap-highlight-color:transparent;user-select:none;padding:1.6rem;display:flex;cursor:pointer;border-radius:50%;z-index:999;",""],(function(e){return e.is_eu_country?"9rem":"1.6rem"}),(function(e){if(e.is_eu_country)return(0,o.css)(["@media (max-width:1269px){bottom:11rem;}@media ","{bottom:14rem;}@media ","{bottom:",";padding:1rem;}@media ","{bottom:",";}@media (max-width:538px){bottom:",";}@media ","{bottom:",";}"],c.Z.tabletL,c.Z.tablet,(function(e){return e.is_banner_shown?"29rem":"14rem"}),c.Z.tabletS,(function(e){return e.is_banner_shown?"28rem":"13rem"}),(function(e){return e.is_banner_shown?"30rem":"15rem"}),c.Z.mobileM,(function(e){return e.is_banner_shown?"32rem":"16rem"}))})),M=function(e){var n=e.is_banner_shown,t=(0,i.useState)(!1),o=t[0],c=t[1],M=(0,a.u)(),w=M[0],l=M[1],d=i.useContext(u.cs).is_eu_country;return i.createElement(i.Fragment,null,w&&i.createElement(r,{className:"gtm-deriv-livechat",is_banner_shown:n,is_eu_country:d,onClick:function(){l.open_chat_window()},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},i.createElement("img",{src:o?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzg1QUNCMCIgZD0iTTIxIDJIM2EzIDMgMCAwMC0zIDN2MTZsLjAwNi4xMTRjLjA4Ny44MTQgMS4wOTkgMS4xOTYgMS43MDEuNTkzTDUuNDE0IDE4SDIxYTMgMyAwIDAwMy0zVjVhMyAzIDAgMDAtMy0zeiIvPjxwYXRoIGZpbGw9IiM4NUFDQjAiIGQ9Ik0yNiAxMHY2YzAgMi4yMS0xLjc5IDQtNCA0SDh2M2EzIDMgMCAwMDIuODI0IDIuOTk1TDExIDI2aDE1LjU4NmwzLjcwNyAzLjcwN2MuNjAyLjYwMyAxLjYxNC4yMiAxLjcwMS0uNTkzTDMyIDI5VjEzYTMgMyAwIDAwLTIuODI0LTIuOTk1TDI5IDEwaC0zeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMSAxMGExIDEgMCAwMS4xMTcgMS45OTNMMTEgMTJIN2ExIDEgMCAwMS0uMTE3LTEuOTkzTDcgMTBoNHptNi00YTEgMSAwIDAxLjExNyAxLjk5M0wxNyA4SDdhMSAxIDAgMDEtLjExNy0xLjk5M0w3IDZoMTB6Ii8+PC9nPjwvc3ZnPg==":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iIzg1QUNCMCIgZD0iTTI5IDEwbC4xNzYuMDA1QTMgMyAwIDAxMzIgMTN2MTZsLS4wMDYuMTE0Yy0uMDg3LjgxNC0xLjA5OSAxLjE5Ni0xLjcwMS41OTNMMjYuNTg2IDI2SDExbC0uMTc2LS4wMDVBMyAzIDAgMDE4IDIzdi0zaDJ2M2wuMDA3LjExN0ExIDEgMCAwMDExIDI0aDE2bC4xMzEuMDA5Yy4yMTcuMDI4LjQyLjEyOC41NzYuMjg0TDMwIDI2LjU4NFYxM2wtLjAwNy0uMTE3QTEgMSAwIDAwMjkgMTJoLTN2LTJoM3ptLTgtOGEzIDMgMCAwMTMgM3YxMGEzIDMgMCAwMS0zIDNINS40MTRsLTMuNzA3IDMuNzA3Yy0uNjAyLjYwMy0xLjYxNC4yMi0xLjcwMS0uNTkzTDAgMjFWNWEzIDMgMCAwMTMtM3ptMCAySDNhMSAxIDAgMDAtMSAxdjEzLjU4NGwyLjI5My0yLjI5MWEuOTk2Ljk5NiAwIDAxLjU3Ni0uMjg0TDUgMTZoMTZhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTF6bS0xMCA2YTEgMSAwIDAxLjExNyAxLjk5M0wxMSAxMkg3YTEgMSAwIDAxLS4xMTctMS45OTNMNyAxMGg0em02LTRhMSAxIDAgMDEuMTE3IDEuOTkzTDE3IDhIN2ExIDEgMCAwMS0uMTE3LTEuOTkzTDcgNmgxMHoiLz48L3N2Zz4=",width:"32",height:"32",alt:"livechat icon"})))}}}]);
//# sourceMappingURL=7275-1fc1794685aa4c5c8866.js.map