(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),i=(r(0),r(79)),a={title:"Frequently Asked Questions"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Is Upptime free and open-source software (FOSS)?",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/upptime/upptime.js.org/blob/master/docs/faq.md",version:"current",sidebar:"sidebar",previous:{title:"Contributing",permalink:"/docs/contributing"}},p=[{value:"Is Upptime free and open-source software (FOSS)?",id:"is-upptime-free-and-open-source-software-foss",children:[]},{value:"My status website is broken (CSS is not loading)",id:"my-status-website-is-broken-css-is-not-loading",children:[]},{value:"My status website doesn&#39;t work with my private repository.",id:"my-status-website-doesnt-work-with-my-private-repository",children:[]},{value:"How do I remove the &quot;Powered by Upptime&quot; in the footer of my website?",id:"how-do-i-remove-the-powered-by-upptime-in-the-footer-of-my-website",children:[]},{value:"I&#39;m getting a 404 error in Setup CI",id:"im-getting-a-404-error-in-setup-ci",children:[]}],c={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"is-upptime-free-and-open-source-software-foss"},"Is Upptime free and open-source software (FOSS)?"),Object(i.b)("p",null,"Yes, Upptime is 100% free and open-source, with all components licensed under the permissive MIT License."),Object(i.b)("h2",{id:"my-status-website-is-broken-css-is-not-loading"},"My status website is broken (CSS is not loading)"),Object(i.b)("p",null,"You are probably running the website on a non-root domain, for example at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://user.github.io/repo/"}),"https://user.github.io/repo/"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"user")," is your GitHub username and ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," is the repository name. You should add the ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl")," configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".upptimerc.yml"',title:'".upptimerc.yml"'}),'status-website:\n  baseUrl: /repo # "repo" is your repository name\n')),Object(i.b)("h2",{id:"my-status-website-doesnt-work-with-my-private-repository"},"My status website doesn't work with my private repository."),Object(i.b)("p",null,"By default, Upptime only supports publishing status websites from public repositories, since the GitHub API is used to fetch data. However, you can set up a proxy API (for example, using a personal access token with readonly access to your private repository) and set that as the ",Object(i.b)("inlineCode",{parentName:"p"},"apiBaseUrl")," configuration key under ",Object(i.b)("inlineCode",{parentName:"p"},"status-website"),". See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/upptime/upptime/issues/54"}),"#54")," and the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://upptime.js.org/docs/configuration#custom-api-base-url"}),"Configuration for ",Object(i.b)("inlineCode",{parentName:"a"},"apiBaseUrl"))," to learn how to set up a status website from your private repository."),Object(i.b)("h2",{id:"how-do-i-remove-the-powered-by-upptime-in-the-footer-of-my-website"},'How do I remove the "Powered by Upptime" in the footer of my website?'),Object(i.b)("p",null,"You can add an internationalization object that overwrites some keys, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuration#internationalization"}),"Internationalization"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".upptimerc.yml"',title:'".upptimerc.yml"'}),"i18n:\n  footer: This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)\n")),Object(i.b)("h2",{id:"im-getting-a-404-error-in-setup-ci"},"I'm getting a 404 error in Setup CI"),Object(i.b)("p",null,"Make sure you've changed the ",Object(i.b)("inlineCode",{parentName:"p"},"owner")," and ",Object(i.b)("inlineCode",{parentName:"p"},"repo")," in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuration/"}),"Configuration"),"."))}u.isMDXComponent=!0},79:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(a,".").concat(m)]||b[m]||l[m]||i;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);