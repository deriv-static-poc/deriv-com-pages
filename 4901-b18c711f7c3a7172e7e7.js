"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[4901],{64901:function(e,t,n){n.r(t);var o=n(67294),i=n(83494),a=n(73377),l=n(63524),r=n(70349),c=n(19643),m=i.default.div.withConfig({displayName:"_article-component__ArticleDiv",componentId:"sc-pn1yqm-0"})(["display:flex;flex-direction:column;"]),d=i.default.div.withConfig({displayName:"_article-component__ListWrapper",componentId:"sc-pn1yqm-1"})(["margin-right:2.4rem;width:35rem;line-height:1.5;@media ","{width:30rem;}@media ","{width:26rem;}@media ","{width:auto;}@media ","{padding-top:3.55rem;}"],c.Z.laptopL,c.Z.laptopM,c.Z.tabletS,c.Z.tabletL),p=(0,i.default)(l.h4).withConfig({displayName:"_article-component__StyledHeader",componentId:"sc-pn1yqm-2"})(["font-size:2.4rem;margin-bottom:1.6rem;",";@media ","{margin-top:40px;}"],(function(e){var t=e.row,n=e.col,o="4rem";switch(t){case 0:o="8rem";break;case 1:o=n?"7.2rem":o}return(0,i.css)(["margin-top:",";"],o)}),c.Z.mobileL),s=i.default.ul.withConfig({displayName:"_article-component__ListNoBullets",componentId:"sc-pn1yqm-3"})(["margin-bottom:1.6rem;list-style:none;li{max-width:38.4rem;@media ","{max-width:100%;width:100%;}}> *:not(:last-child){padding-bottom:1.6rem;}"],c.Z.tabletS),u=i.default.li.withConfig({displayName:"_article-component__ShowItem",componentId:"sc-pn1yqm-4"})(["display:",";"],(function(e){return e.should_show_item?"block":"none"})),_=(0,i.default)(r.UE).withConfig({displayName:"_article-component__StyledLink",componentId:"sc-pn1yqm-5"})(["text-decoration:none;color:var(--color-black-3);font-size:16px;:hover{color:red;text-decoration:underline;}"]),h=i.default.div.withConfig({displayName:"_article-component__StyledView",componentId:"sc-pn1yqm-6"})(["text-decoration:none;color:var(--color-red);font-size:16px;font-weight:normal;:hover{cursor:pointer;}"]);t.default=function(e){var t=e.idx,n=e.item,i=e.all_categories,l=e.toggleArticle,c=e.is_eu_country,y=e.param;return o.createElement(m,{key:t},o.createElement(d,null,o.createElement(p,{type:"section-title"},n.category),n.articles.map((function(e,t){var m=e.category in i&&i[e.category].is_expanded,d=t<3||m,p=n.articles.length>3,f=!m&&p&&3===t,g=m&&p&&t===n.articles.length-1,w=c&&e.title_eu?e.title_eu:e.title,x=c&&e.label_eu?e.label_eu:e.label;return o.createElement(s,{key:t},o.createElement(u,{should_show_item:d},o.createElement(_,{to:(0,a.hT)(n.category.props.translate_text,x,y)},w)),(f||g)&&o.createElement("li",null,o.createElement(h,{onClick:function(){return l(e.category)}},f?o.createElement(r.Xx,{translate_text:"<0>View all questions</0>",components:[o.createElement("p",{key:0})]}):o.createElement(r.Xx,{translate_text:"<0>View fewer questions</0>",components:[o.createElement("p",{key:0})]}))))}))))}}}]);
//# sourceMappingURL=4901-b18c711f7c3a7172e7e7.js.map