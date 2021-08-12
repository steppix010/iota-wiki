"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[7918],{51384:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(19756),r=n(67294),i=n(73727),l=n(6832),o=n(71699),s=n(19901),c=(0,r.createContext)({collectLink:function(){}}),d=n(51402),u=n(79861),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,f=e.to,p=e.href,h=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,_=void 0===E||E,k=(0,a.Z)(e,m),w=(0,l.Z)().siteConfig,N=w.trailingSlash,L=w.baseUrl,Z=(0,d.C)().withBaseUrl,U=(0,r.useContext)(c),y=f||p,C=(0,o.Z)(y),T=null==y?void 0:y.replace("pathname://",""),A=void 0!==T?(n=T,_&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;A&&C&&(A=(0,u.applyTrailingSlash)(A,{trailingSlash:N,baseUrl:L}));var O,B=(0,r.useRef)(!1),M=v?i.OL:i.rU,S=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!S&&C&&null!=A&&window.docusaurus.prefetch(A),function(){S&&O&&O.disconnect()}}),[A,S,C]);var x=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,I=!A||!C||x;return A&&C&&!x&&!g&&U.collectLink(A),I?r.createElement("a",Object.assign({href:A},y&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):r.createElement(M,Object.assign({},k,{onMouseEnter:function(){B.current||null==A||(window.docusaurus.preload(A),B.current=!0)},innerRef:function(e){var t,n;S&&e&&C&&(t=e,n=function(){null!=A&&window.docusaurus.prefetch(A)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),n())}))}))).observe(t))},to:A||""},v&&{isActive:b,activeClassName:h}))}},71699:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},51402:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(6832),r=n(71699);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2662:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(67294),r=n(86010),i=n(57617),l=n(27213),o=n(51384),s=n(54416);var c=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=n(6832),u=n(63382);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.versionMetadata,r=(0,d.Z)().siteConfig.title,l=(0,i.useActivePlugin)({failfast:!0}).pluginId,o=(0,u.J)(l).savePreferredVersionName,s=(0,i.useDocVersionSuggestions)(l),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,p=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:m.label,to:p.path,onClick:function(){return o(m.name)}})))}var h=function(e){var t=e.versionMetadata;return"none"===t.banner?a.createElement(a.Fragment,null):a.createElement(p,{versionMetadata:t})},b=n(37027);function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement(a.Fragment,null,a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var k=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},w="tableOfContents_35-E",N="table-of-contents__link";function L(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:N,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(L,{isChild:!0,toc:e.children}))}))):null}var Z=function(e){var t=e.toc;return k(N,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(w,"thin-scrollbar")},a.createElement(L,{toc:t}))},U="tocCollapsible_1PrD",y="tocCollapsibleButton_2O1e",C="tocCollapsibleContent_2Ydz",T="tocCollapsibleExpanded_3GYr";function A(e){var t,n=e.toc,i=e.className,l=(0,u.uR)({initialState:!0}),o=l.collapsed,c=l.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(U,(t={},t[T]=!o,t),i)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",y),onClick:c},a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:C,collapsed:o},a.createElement(L,{toc:n})))}var O=n(22122),B=n(19756),M="iconEdit_2_ui",S=["className"],x=function(e){var t=e.className,n=(0,B.Z)(e,S);return a.createElement("svg",(0,O.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(M,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function I(e){var t=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(e.editUrl);return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(x,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var D=n(60153),P="docItemContainer_33ec",V="lastUpdated_3DPF",j="docItemCol_3FnS",z="tocMobile_3Hoh";var R=function(e){var t,n=e.content,o=e.versionMetadata,s=n.metadata,d=n.frontMatter,u=d.image,m=d.keywords,v=d.hide_title,f=d.hide_table_of_contents,p=s.description,g=s.title,E=s.editUrl,k=s.lastUpdatedAt,w=s.formattedLastUpdatedAt,N=s.lastUpdatedBy,L=(0,i.useActivePlugin)({failfast:!0}).pluginId,U=(0,i.useVersions)(L).length>1,y=!v&&void 0===n.contentTitle,C=(0,l.Z)(),T=!f&&n.toc&&n.toc.length>0,O=T&&("desktop"===C||"ssr"===C);return a.createElement(a.Fragment,null,a.createElement(b.Z,{title:g,description:p,keywords:m,image:u}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[j]=!f,t))},a.createElement(h,{versionMetadata:o}),a.createElement("div",{className:P},a.createElement("article",null,U&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",o.label),T&&a.createElement(A,{toc:n.toc,className:z}),a.createElement("div",{className:"markdown"},y&&a.createElement(D.N,null,g),a.createElement(n,null)),(E||k||N)&&a.createElement("footer",{className:"row docusaurus-mt-lg"},a.createElement("div",{className:"col"},E&&a.createElement(I,{editUrl:E})),a.createElement("div",{className:(0,r.Z)("col",V)},(k||N)&&a.createElement(_,{lastUpdatedAt:k,formattedLastUpdatedAt:w,lastUpdatedBy:N})))),a.createElement(c,{metadata:s}))),O&&a.createElement("div",{className:"col col--3"},a.createElement(Z,{toc:n.toc}))))}},60153:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return v}});var a=n(19756),r=n(22122),i=n(67294),l=n(86010),o=n(54416),s=n(63382),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,u),m=(0,s.LU)().navbar.hideOnScroll;return r?i.createElement(t,d,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[c]=!m,n)),id:r}),d.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,d)});var t}},37027:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(9932),i=n(63382),l=n(51402);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=(0,i.LU)().image,d=(0,i.pe)(t),u=(0,l.Z)(s||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}))}},27213:function(e,t,n){var a=n(67294),r=n(19901),i="desktop",l="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){if(r.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(s())}}),[]),t}},54357:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},79861:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(54357);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(45479);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},45479:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);