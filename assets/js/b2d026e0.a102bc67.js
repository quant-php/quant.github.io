"use strict";(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"quant_core",title:"Core"},l="quant/core",c={unversionedId:"packages/quant/core/quant_core",id:"packages/quant/core/quant_core",title:"Core",description:"Low-level API providing contracts, base classes and commonly-used functionality.",source:"@site/docs/packages/quant/core/index.md",sourceDirName:"packages/quant/core",slug:"/packages/quant/core/",permalink:"/docs/packages/quant/core/",draft:!1,editUrl:"https://github.com/quant-php/quant.github.io/tree/main/docs/packages/quant/core/index.md",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1685390591,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id:"quant_core",title:"Core"},sidebar:"docs",previous:{title:"Packages",permalink:"/docs/packages"},next:{title:"AbstractList",permalink:"/docs/packages/quant/core/abstractlist"}},i={},s=[{value:"Installation",id:"installation",level:2},{value:"Available Documentation",id:"available-documentation",level:2},{value:"Benchmarks",id:"benchmarks",level:2},{value:"Resources",id:"resources",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quantcore"},"quant/core"),(0,r.kt)("p",null,"Low-level API providing contracts, base classes and commonly-used functionality."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"quant/core")," comes bundled with ",(0,r.kt)("strong",{parentName:"p"},"quant"),". To install it separately, follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation#packages"},"installation instructions"),"."),(0,r.kt)("h2",{id:"available-documentation"},"Available Documentation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/packages/quant/core/abstractlist"},"AbstractList")),(0,r.kt)("td",{parentName:"tr",align:null},"A strongly typed list maintaining objects by a numeric index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/packages/quant/core/trait/accessortrait"},"AccessorTrait")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides accessor automation for object properties attributed with ",(0,r.kt)("inlineCode",{parentName:"td"},"#[Setter]")," and/or ",(0,r.kt)("inlineCode",{parentName:"td"},"#[Getter]"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/packages/quant/core/contract/arrayable"},"Arrayable")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the availability of an array-representative for the implementing class' instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/packages/quant/core/contract/comparable"},"Comparable")),(0,r.kt)("td",{parentName:"tr",align:null},"Implements a total order on objects of ",(0,r.kt)("inlineCode",{parentName:"td"},"T : Comparable"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/packages/quant/core/contract/equatable"},"Equatable")),(0,r.kt)("td",{parentName:"tr",align:null},"Implements an equivalence relation for objects of ",(0,r.kt)("inlineCode",{parentName:"td"},"T : Equatable"))))),(0,r.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"quant/core")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/phpbench/phpbench"},"phpbench")," for benchmarking selected functionality of this package. The command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vendor/bin/phpbench run Tests/Benchmarks --report=aggregate --retry-threshold=5\n")),(0,r.kt)("p",null,"starts the Benchmarks. Please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://phpbench.readthedocs.io/"},"documentation")," for details on how to configure the benchmark-runner to your needs."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/quant-php/quant/issues"},"Report issues")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/quant-php/quant/pulls"},"send Pull Requests"),"\nin the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/quant-php/quant"},"main quant repository"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A writeup and closer look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessorTrait")," can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://thorsten.suckow-homberg.de/docs/articles/getter-setter-automation-with-php-attributes"},"https://thorsten.suckow-homberg.de")))))}d.isMDXComponent=!0}}]);