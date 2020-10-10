(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var l=t(0),a=t.n(l);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=l,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return t?a.a.createElement(d,i(i({ref:n},p),{},{components:t})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var l=t(2),a=t(6),r=(t(0),t(100)),o={title:"All",description:"All Monoid",layout:"guide",weight:10},i={unversionedId:"monoids/All",id:"monoids/All",isDocsHomePage:!1,title:"All",description:"All Monoid",source:"@site/docs/monoids/All.md",slug:"/monoids/All",permalink:"/crocks/docs/monoids/All",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/All.md",version:"current",sidebar:"sidebar",previous:{title:"Monoids",permalink:"/crocks/docs/monoids/"},next:{title:"Any",permalink:"/crocks/docs/monoids/Any"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],p={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-haskell"}),"All Boolean\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"All")," is a ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," that will combine (2) values of any type using logical\nconjunction (AND) on their coerced ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," values, mapping truthy values\nto ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and falsy values to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import All from 'crocks/All'\n\nimport mconcat from 'crocks/helpers/mconcat'\n\nconst trueNum = All(13)\nconst falseNum = All(0)\nconst trueString = All('So true')\n\ntrueNum.concat(falseNum)\n//=> All false\n\ntrueNum.concat(trueString)\n//=> All true\n\nconst allGood =\n  mconcat(All)\n\nallGood([ 1, 5, 89 ])\n//=> All true\n\nallGood([ 'nice', '00', null ])\n//=> All false\n")),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")),Object(r.b)("h2",{id:"construction"},"Construction"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-haskell"}),"All :: a -> All Boolean\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"All")," is constructed by calling the constructor with any type ",Object(r.b)("inlineCode",{parentName:"p"},"a"),". This will\nreturn an ",Object(r.b)("inlineCode",{parentName:"p"},"All")," wrapping the provided value, coerced to a ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean"),". For\nexample, providing a non-zero ",Object(r.b)("inlineCode",{parentName:"p"},"Number")," will result in an ",Object(r.b)("inlineCode",{parentName:"p"},"All(true)"),". While\npassing a zero results in an ",Object(r.b)("inlineCode",{parentName:"p"},"All(false)"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import All from 'crocks/All'\n\nAll('')\n//=> All(false)\n\nAll('string')\n//=> All(true)\n\nAll({ a: 0 })\n//=> All(true)\n")),Object(r.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(r.b)("h3",{id:"empty"},"empty"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-haskell"}),"All.empty :: () -> All\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(r.b)("inlineCode",{parentName:"p"},"concat"),"ed to any other value, it will return the other value. In\nthe case of ",Object(r.b)("inlineCode",{parentName:"p"},"All")," the result of ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". ",Object(r.b)("inlineCode",{parentName:"p"},"empty")," is available on both\nthe Constructor and the Instance for convenience."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import All from 'crocks/All'\n\nAll.empty() //=> All true\n\nAll(true).concat(All.empty())   //=> All true\nAll(false).concat(All.empty())  //=> All false\n")),Object(r.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(r.b)("h3",{id:"equals"},"equals"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-haskell"}),"All a ~> b -> Boolean\n")),Object(r.b)("p",null,"Used to compare the underlying values of (2) ",Object(r.b)("inlineCode",{parentName:"p"},"All")," instances for equality by\nvalue, ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the passed argument\nis an ",Object(r.b)("inlineCode",{parentName:"p"},"All")," with an underlying value equal to the underlying value of the ",Object(r.b)("inlineCode",{parentName:"p"},"All")," the\nmethod is being called on. If the passed argument is not an ",Object(r.b)("inlineCode",{parentName:"p"},"All")," or the underlying\nvalues are not equal, ",Object(r.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import All from 'crocks/All'\n\nAll(true)\n  .equals(All(true))\n//=> true\n\nAll(true)\n  .equals(All(false))\n//=> false\n")),Object(r.b)("h3",{id:"concat"},"concat"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-haskell"}),"All ~> All -> All\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"concat")," is used to combine (2) ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an operation\nspecified by the ",Object(r.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(r.b)("inlineCode",{parentName:"p"},"All"),", it will combine the (2)\nusing logical AND (conjunction)."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import All from 'crocks/All'\n\nAll(true).concat(All(true))   //=> All true\nAll(true).concat(All(false))  //=> All false\nAll(false).concat(All(true))  //=> All false\nAll(false).concat(All(false)) //=> All false\n")),Object(r.b)("h3",{id:"valueof"},"valueOf"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-haskell"}),"All ~> () -> Boolean\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(r.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(r.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction. While the\nextraction is available, types that implement ",Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," are not necessarily\na ",Object(r.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience for some of the\nhelper functions that ship with ",Object(r.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(r.b)("inlineCode",{parentName:"p"},"valueOf")," on an ",Object(r.b)("inlineCode",{parentName:"p"},"All")," instance\nwill result in the underlying ",Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," value."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import All from 'crocks/All'\n\nAll(0).valueOf()          //=> false\nAll('string').valueOf() //=> true\n\n//=> false\nAll(true)\n  .concat('')\n  .valueOf()\n")))}s.isMDXComponent=!0}}]);