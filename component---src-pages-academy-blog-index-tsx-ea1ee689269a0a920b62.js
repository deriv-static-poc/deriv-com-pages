"use strict";(self.webpackChunkderiv_com=self.webpackChunkderiv_com||[]).push([[9445],{51416:function(e,t,a){a(67294);t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuODI0IDhMNS4xMyAyLjgzNmEuNS41IDAgMTEuNzQtLjY3Mmw1IDUuNWEuNS41IDAgMDEwIC42NzJsLTUgNS41YS40OTkuNDk5IDAgMTEtLjc0LS42NzJMOS44MjQgOHoiIGZpbGw9IiMzMzMiLz48L3N2Zz4="},56806:function(e,t,a){var r=a(67294),i=a(83494),n=a(71082),o=a(24313),l=a(98367),c=a(90594),d=(0,i.default)(l.kC).withConfig({displayName:"pagination__StyledFlex",componentId:"sc-yz7kdq-0"})(["margin-bottom:40px;align-items:center;"]),m=(0,i.default)(o.zx).withConfig({displayName:"pagination__StyledButton",componentId:"sc-yz7kdq-1"})(["border:1px solid var(--color-grey-2);padding:7px 13px;font-size:14px;margin:0 4px;color:",";font-weight:normal;background:",";",";"],(function(e){return e.grey?"var(--color-grey-2)":"var(--color-black-3)"}),(function(e){return e.disabled&&"var(--color-grey-2)"}),(function(e){if(e.active)return(0,i.css)(["pointer-events:none;border:1px solid var(--color-black-3);"])}));t.Z=function(e){for(var t=e.items_per_page,a=e.total_items,i=e.paginate,o=e.current_page,l=[],p=Math.ceil(a/t),s=1;s<=p;s++)l.push(s);var g=l.length,u=o>2&&o-1,h=g>5?l.slice(u,o+1):l;return r.useEffect((function(){c.SP.set({page:o})}),[o]),o>g&&(0,n.navigate)("/404/"),r.createElement(d,null,r.createElement(m,{disabled:1===o,tertiary:!0,m:"4px",onClick:function(){return i(o-1)}},"<"),o>2&&g>5&&r.createElement(r.Fragment,null,r.createElement(m,{active:1===o,tertiary:!0,m:"4px",onClick:function(){return i(1)}},1),r.createElement(m,{tertiary:!0,grey:!0,m:"4px"},"...")),h.map((function(e){return r.createElement(m,{active:e===o,tertiary:!0,m:"4px",key:e,onClick:function(){return i(e)}},e)})),o+2<g&&g>5&&r.createElement(r.Fragment,null,r.createElement(m,{tertiary:!0,grey:!0,m:"4px"},"..."),r.createElement(m,{active:g===o,tertiary:!0,m:"4px",onClick:function(){return i(g)}},g)),r.createElement(m,{disabled:o===g,tertiary:!0,m:"4px",onClick:function(){return i(o+1)}},">"))}},21904:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var r=a(67294),i=a(83494),n=a(24275),o=a(19138),l=a(16698),c=a(98367),d=a(63524),m=a(70349),p=a(90594),s=a(19643),g=(0,i.default)(c.kC).withConfig({displayName:"_article-card__ArticleCardWrapper",componentId:"sc-1b2ig8q-0"})(["box-sizing:border-box;max-width:384px;flex-direction:column;justify-content:flex-start;text-decoration:none;position:relative;min-height:400px;height:100%;border-radius:8px;border:1px solid var(--color-grey-8);background:var(--color-white);overflow:hidden;transition:transform 0.3s;cursor:pointer;&:hover{transform:translateY(-1.1rem) scale(1.02);}@media ","{min-height:unset;}"],s.Z.mobileL),u=(0,i.default)(d.h4).withConfig({displayName:"_article-card__StyledCategories",componentId:"sc-1b2ig8q-1"})(["width:fit-content;border-radius:8px;background-color:var(--color-blue-10);color:var(--color-blue-9);padding:2px 8px 0;margin:0 8px 8px 0;"]),h=i.default.div.withConfig({displayName:"_article-card__ContentWrapper",componentId:"sc-1b2ig8q-2"})(["height:auto;padding:16px 24px;@media ","{padding:16px;}"],s.Z.mobileL),x=(0,i.default)(m.UE).withConfig({displayName:"_article-card__RedirectLink",componentId:"sc-1b2ig8q-3"})(["text-decoration:none;"]),f=function(e){var t,a,i,n=e.item;return r.createElement(x,{to:"/academy/blog/posts/"+n.slug+"/"},r.createElement(g,null,r.createElement(l.tX,{width:"384px",height:"230px",border_radius:"unset",tabletL_border_radius:"unset"},r.createElement(d.et,{data:null==n||null===(t=n.main_image)||void 0===t||null===(a=t.imageFile)||void 0===a||null===(i=a.childImageSharp)||void 0===i?void 0:i.gatsbyImageData,alt:n.main_image.description||"",className:"standard-query-img"})),r.createElement(h,null,r.createElement(c.kC,{jc:"flex-start",height:"auto",fw:"wrap"},n.tags&&n.tags.slice(0,2).map((function(e){var t;return r.createElement(u,{as:"h4",type:"paragraph-2",key:e.id},null==e||null===(t=e.tags_id)||void 0===t?void 0:t.tag_name)})),n.tags.length>2&&r.createElement(u,{as:"h4",type:"paragraph-2"},"+"+n.tags.slice(2).length.toString()),r.createElement(d.h4,{as:"h5",type:"paragraph-2",weight:"normal",color:"grey-5",width:"auto"},"• "+(0,p.N6)(null==n?void 0:n.blog_post))),r.createElement(d.h4,{as:"h3",type:"subtitle-2"},n.blog_title),r.createElement(d.h4,{as:"p",type:"paragraph-2",weight:"normal",mt:"8px",color:"grey-5"},n.blog_description))))},b=(0,i.default)(c.kC).withConfig({displayName:"_first-article__StyledFlex",componentId:"sc-slbjuo-0"})(["border-radius:8px;height:300px;border:1px solid var(--color-grey-8);overflow:hidden;transition:transform 0.3s;cursor:pointer;width:100vw;max-width:1200px;&:hover{transform:translateY(-1.1rem) scale(1.02);}@media (max-width:1333px){width:100%;min-width:800px;}@media (max-width:823px){flex-direction:column;height:auto;width:90vw;max-width:384px;min-width:unset;margin-top:40px;}"]),y=(0,i.default)(d.h4).withConfig({displayName:"_first-article__StyledCategories",componentId:"sc-slbjuo-1"})(["width:fit-content;border-radius:8px;background-color:var(--color-blue-10);color:var(--color-blue-9);padding:1px 8px;margin:0 8px 8px 0;"]),w=(0,i.default)(c.kC).withConfig({displayName:"_first-article__FirstContentWrapper",componentId:"sc-slbjuo-2"})(["@media (max-width:823px){width:100%;padding:24px 16px;}"]),v=(0,i.default)(m.UE).withConfig({displayName:"_first-article__RedirectLink",componentId:"sc-slbjuo-3"})(["text-decoration:none;margin-top:96px;"]),_=function(e){var t,a,i,n=e.item;return r.createElement(v,{to:"/academy/blog/posts/"+n.slug+"/"},r.createElement(b,{jc:"flex-start"},r.createElement(l.tX,{width:"592px",border_radius:"6px 0 0 6px",tabletL_border_radius:"6px 6px 0 0"},r.createElement(d.et,{data:null==n||null===(t=n.main_image)||void 0===t||null===(a=t.imageFile)||void 0===a||null===(i=a.childImageSharp)||void 0===i?void 0:i.gatsbyImageData,alt:n.main_image.description||"",width:"100%",className:"standard-query-img",loading:"eager"})),r.createElement(w,{fd:"column",p:"35px 40px",width:"45%"},r.createElement(c.kC,{jc:"flex-start",height:"auto",fw:"wrap"},(null==n?void 0:n.tags)&&n.tags.slice(0,2).map((function(e){var t;return r.createElement(y,{as:"h4",type:"paragraph-2",key:null==e?void 0:e.id},null==e||null===(t=e.tags_id)||void 0===t?void 0:t.tag_name)})),(null==n?void 0:n.tags.length)>2&&r.createElement(y,{as:"h4",type:"paragraph-2"},"+"+n.tags.slice(2).length.toString()),r.createElement(d.h4,{color:"grey-5",as:"h5",weight:"normal",type:"paragraph-2",width:"auto"},"• "+(0,p.N6)(null==n?void 0:n.blog_post))),r.createElement(d.h4,{as:"h3",type:"heading-3"},n.blog_title),r.createElement(d.h4,{as:"p",type:"paragraph-1",weight:"normal",mt:"8px",color:"grey-5"},n.blog_description))))},E=a(56806),k=a(51416),C=a(9847),N=function(e){var t=e.article_data,a=Number(p.SP.get("page")||1),i=(0,C.G)()[0],n=(0,C.G)(1333)[0],o=(0,r.useState)(a),m=o[0],s=o[1],g=(i?10:n&&12)||18,u=m*g,h=u-g,x=t[0],b=t.slice(1),y=b.slice(h,u),w=(0,r.useRef)(null);return r.createElement(l.W2,{ref:w,m:"0 auto",fd:"column",ai:"center"},r.createElement(c.kC,{jc:"flex-start",ai:"center",mt:"40px"},r.createElement(d.Th,{to:"/academy/",color:"grey-5"},"Home"),r.createElement(l.L6,{src:k.Z,height:"16",width:"16"}),r.createElement(d.xv,null,"All articles")),1===m&&r.createElement(_,{item:x}),r.createElement(l.P2,{margin:"40px 0"},y.map((function(e){return r.createElement(f,{key:e.id,item:e})}))),r.createElement(E.Z,{items_per_page:g,total_items:b.length,paginate:function(e){w.current.scrollIntoView({behavior:"smooth"}),s(e)},current_page:m}))},I=a(10783),S=a.p+"static/deriv-blog-95129064c0eae5d6b4f3f24b83bec9e0.png",L=(0,i.default)(c.W2).withConfig({displayName:"blog__SmallContainer",componentId:"sc-1msifp1-0"})(["width:62%;max-width:734px;flex-direction:column;@media ","{max-width:1000px;}@media ","{width:calc(100% - 32px);}"],s.Z.desktopL,s.Z.tabletS),Z=(0,i.default)(c.kC).withConfig({displayName:"blog__Hero",componentId:"sc-1msifp1-1"})(["height:40rem;width:90%;max-width:1200px;margin:0 auto;background:var(--color-white);background-image:url(",");background-size:cover;background-position:center;border-radius:8px;@media ","{max-width:1600px;}@media ","{height:348px;width:calc(100% - 32px);}"],S,s.Z.desktopL,s.Z.tabletL),j=(0,m.Wm)()((function(e){var t=e.data,a=(0,o.lg)(t.directus.blog);return r.createElement(I.Z,{type:"academy",margin_top:"14.4"},r.createElement(c.HJ,{title:(0,m.NC)("Articles, trading guide and resources | Deriv"),description:(0,m.NC)("If you are looking for trading guide or tutorials, visit Deriv's trading academy and learn how to trade online."),meta_attributes:{og_title:"Trading tips, guides, and more.",og_description:"Educational content at your fingertips – everything you need to know to start trading or upgrade your trading skills."}}),r.createElement(c.kC,{pt:"40px"},r.createElement(Z,{jc:"center",ai:"center"},r.createElement(L,null,r.createElement(d.h4,{as:"h1",type:"subtitle-1",color:"white",weight:"regular",align:"left"},(0,m.NC)("Blog")),r.createElement(d.h4,{as:"h2",type:"heading-2",color:"white",align:"left",tabletL:{mt:"8px"}},(0,m.NC)("The latest articles and resources"))))),a&&r.createElement(N,{article_data:a}),r.createElement(c.W2,{pb:"80px",tabletL:{pb:"40px"}},r.createElement(c.kC,{direction:"column",ai:"flex-start",jc:"space-between"},r.createElement(n.Z,null))))}))}}]);
//# sourceMappingURL=component---src-pages-academy-blog-index-tsx-ea1ee689269a0a920b62.js.map