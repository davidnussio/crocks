(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),m=i,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return t?a.a.createElement(d,c(c({ref:n},p),{},{components:t})):a.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var i=t(2),a=t(6),r=(t(0),t(100)),o={title:"Min",description:"Min Monoid",layout:"guide",weight:80},c={unversionedId:"monoids/Min",id:"monoids/Min",isDocsHomePage:!1,title:"Min",description:"Min Monoid",source:"@site/docs/monoids/Min.md",slug:"/monoids/Min",permalink:"/crocks/docs/monoids/Min",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/Min.md",version:"current",sidebar:"sidebar",previous:{title:"Max",permalink:"/crocks/docs/monoids/Max"},next:{title:"Prod",permalink:"/crocks/docs/monoids/Prod"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-haskell"}),"Min Number\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Min")," is a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," that will combines (2) ",Object(r.b)("inlineCode",{parentName:"p"},"Number"),"s, resulting in the smallest\nof the two."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Min from 'crocks/Min'\nimport mconcat from 'crocks/helpers/mconcat'\n\nMin(76)\n//=> Min 76\n\nmconcat(Min, [ 95, 12, 56 ])\n//=> Min 12\n\nMin(100)\n  .concat(Min(10))\n//=> Min 10\n\nMin.empty()\n  .concat(Min(100))\n//=> Min 100\n")),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")),Object(r.b)("h2",{id:"construction"},"Construction"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-haskell"}),"Min :: Number -> Min Number\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Min")," is a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," fixed to the type of ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," and as such requires\na ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," instance to be passed to the constructor. A new ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," instance is\nreturned, wrapping the provided ",Object(r.b)("inlineCode",{parentName:"p"},"Number"),"."),Object(r.b)("p",null,"The values ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),", ",Object(r.b)("inlineCode",{parentName:"p"},"null")," and ",Object(r.b)("inlineCode",{parentName:"p"},"NaN")," will map to the ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," (",Object(r.b)("inlineCode",{parentName:"p"},"Infinity"),")\ninstead of throwing a ",Object(r.b)("inlineCode",{parentName:"p"},"TypeError"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Min from 'crocks/Min'\n\nimport equals from 'crocks/pointfree/equals'\n\nMin(42)\n//=> Min 42\n\nMin(-Infinity)\n//=> Min -Infinity\n\nMin(undefined)\n//=> Min Infinity\n\nequals(Min(NaN), Min.empty())\n//=> true\n")),Object(r.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(r.b)("h3",{id:"empty"},"empty"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-haskell"}),"Min.empty :: () -> Min\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(r.b)("inlineCode",{parentName:"p"},"concat"),"ed to any other value, it will return the other value. In\nthe case of ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," the result of ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," is ",Object(r.b)("inlineCode",{parentName:"p"},"Infinity"),". ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," is available on\nboth the Constructor and the Instance for convenience."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Min from 'crocks/Min'\n\nMin.empty()\n//=> Min Infinity\n\nMin.empty()\n  .concat(Min.empty())\n//=> Min Infinity\n\nMin(32)\n  .concat(Min.empty())\n//=> Min 32\n\nMin.empty()\n  .concat(Min(34))\n//=> Min 34\n")),Object(r.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(r.b)("h3",{id:"equals"},"equals"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-haskell"}),"Min a ~> b -> Boolean\n")),Object(r.b)("p",null,"Used to compare the underlying values of (2) ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," instances for equality by\nvalue, ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the passed\nargument is a ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," with an underlying value equal to the underlying value of\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," the method is being called on. If the passed argument is not\na ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," or the underlying values are not equal, ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Min from 'crocks/Min'\n\nMin(5)\n  .equals(Min(5))\n//=> true\n\nMin(25)\n  .equals(Min(31))\n//=> false\n")),Object(r.b)("h3",{id:"concat"},"concat"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-haskell"}),"Min ~> Min -> Min\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"concat")," is used to combine (2) ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an\noperation specified by the ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(r.b)("inlineCode",{parentName:"p"},"Min"),", it will result\nin the smallest of the (2) ",Object(r.b)("inlineCode",{parentName:"p"},"Number"),"s."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Min from 'crocks/Min'\n\nMin(50)\n  .concat(Min(24))\n//=> Min 24\n\nMin(-120)\n  .concat(Min(-50))\n//=> Min -120\n\nMin.empty()\n  .concat(Min(-Infinity))\n//=> Min -Infinity\n")),Object(r.b)("h3",{id:"valueof"},"valueOf"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-haskell"}),"Min ~> () -> Number\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(r.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction. While the\nextraction is available, types that implement ",Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," are not necessarily\na ",Object(r.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience for some of the\nhelper functions that ship with ",Object(r.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," on a ",Object(r.b)("inlineCode",{parentName:"p"},"Min")," instance\nwill result in the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Number"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Min from 'crocks/Min'\n\nMin(33)\n  .valueOf()\n//=> 33\n\nMin.empty()\n  .valueOf()\n//=> Infinity\n\nMin(35)\n  .concat(Min(20))\n  .valueOf()\n//=> 20\n")))}b.isMDXComponent=!0}}]);