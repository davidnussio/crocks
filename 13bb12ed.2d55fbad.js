(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||s;return t?i.a.createElement(d,o(o({ref:n},l),{},{components:t})):i.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(6),s=(t(0),t(100)),r={title:"Assign",description:"Assign Monoid",layout:"guide",weight:30},o={unversionedId:"monoids/Assign",id:"monoids/Assign",isDocsHomePage:!1,title:"Assign",description:"Assign Monoid",source:"@site/docs/monoids/Assign.md",slug:"/monoids/Assign",permalink:"/docs/docs/monoids/Assign",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/Assign.md",version:"current",sidebar:"sidebar",previous:{title:"Any",permalink:"/docs/docs/monoids/Any"},next:{title:"Endo",permalink:"/docs/docs/monoids/Endo"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],l={rightToc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Assign Object\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Assign")," is a ",Object(s.b)("inlineCode",{parentName:"p"},"Monoid")," that will combine (2) objects under assignment\nusing ",Object(s.b)("inlineCode",{parentName:"p"},"Object.assign")," on the (2) ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),"s."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Assign from 'crocks/Assign'\n\nconst first = { name: 'Bob' }\nconst last = { lastName: 'Smith' }\n\nAssign(first)\n  .concat(Assign(last))\n//=> Assign { name: 'Bob', lastName: 'Smith' }\n")),Object(s.b)("h2",{id:"implements"},"Implements"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Monoid")),Object(s.b)("h2",{id:"construction"},"Construction"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Assign :: Object -> Assign Object\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Assign")," is constructed by calling the constructor with an ",Object(s.b)("inlineCode",{parentName:"p"},"Object")," instance.\nThis will return a new ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," instance, wrapping the reference to the\nprovided ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Assign from 'crocks/Assign'\n\nAssign({ a: 123, b: false })\n//=> Assign({ a: 123, b: false })\n")),Object(s.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(s.b)("h3",{id:"empty"},"empty"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Assign.empty :: () -> Assign\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(s.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(s.b)("inlineCode",{parentName:"p"},"concat"),"ed to object other value, it will return the other value.\nIn the case of ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," the result of ",Object(s.b)("inlineCode",{parentName:"p"},"empty")," is an empty ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),". ",Object(s.b)("inlineCode",{parentName:"p"},"empty")," is\navailable on both the Constructor and the Instance for convenience."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Assign from 'crocks/Assign'\n\nAssign.empty()\n//=> Assign {}\n\nAssign({})\n  .concat(Assign.empty())\n//=> Assign {}\n\nAssign({ a: 1 })\n  .concat(Assign.empty())\n//=> Assign { a: 1 }\n")),Object(s.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(s.b)("h3",{id:"equals"},"equals"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Assign a ~> b -> Boolean\n")),Object(s.b)("p",null,"Used to compare the underlying values of (2) ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," instances for equality by\nvalue, ",Object(s.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(s.b)("inlineCode",{parentName:"p"},"true")," if the passed argument\nis an ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," with an underlying value equal to the underlying value of\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," the method is being called on. If the passed argument is not\nan ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," or the underlying values are not equal, ",Object(s.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(s.b)("inlineCode",{parentName:"p"},"false"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Assign from 'crocks/Assign'\n\nAssign({ a: 5 })\n  .equals(Assign({ a: 5 }))\n//=> true\n\nAssign({ a: 5 })\n  .equals(Assign({ a: 15 }))\n//=> false\n")),Object(s.b)("h3",{id:"concat"},"concat"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Assign ~> Assign -> Assign\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"concat")," is used to combine (2) ",Object(s.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an\noperation specified by the ",Object(s.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(s.b)("inlineCode",{parentName:"p"},"Assign"),", it will\ncombine (2) objects, overwriting the first ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),"'s previous values with\nthe values of the second ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Assign from 'crocks/Assign'\n\nAssign({})\n  .concat(Assign({}))\n//=> Assign {}\n\nAssign({ a: 1 })\n  .concat(Assign({ b: 2 }))\n//=> Assign { a: 1, b: 2 }\n\nAssign({ a: 1, b: 2 })\n  .concat(Assign({ a: 3, b: 4 }))\n//=> Assign { a: 3, b: 4 }\n\nAssign({ b: 4 })\n  .concat(Assign({ a: 1 }))\n//=> Assign { b: 4, a: 1 }\n")),Object(s.b)("h3",{id:"valueof"},"valueOf"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Assign ~> () -> Object\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(s.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(s.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction.\nWhile the extraction is available, types that implement ",Object(s.b)("inlineCode",{parentName:"p"},"valueOf")," are\nnot necessarily a ",Object(s.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience\nfor some of the helper functions that ship with ",Object(s.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(s.b)("inlineCode",{parentName:"p"},"valueOf")," on\nan ",Object(s.b)("inlineCode",{parentName:"p"},"Assign")," instance will result in the underlying ",Object(s.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Assign from 'crocks/Assign'\n\nAssign({})\n  .valueOf()\n//=> {}\n\nAssign({ a: 1 })\n  .valueOf()\n//=> { a: 1 }\n\nAssign({ a: 1 })\n  .concat({ b: 25 })\n  .valueOf()\n//=> { a: 1, b: 25 }\n")))}b.isMDXComponent=!0}}]);