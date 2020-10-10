(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),l=function(e){var n=r.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=l(t),s=a,d=p["".concat(o,".").concat(s)]||p[s]||b[s]||i;return t?r.a.createElement(d,c(c({ref:n},m),{},{components:t})):r.a.createElement(d,c({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=t[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),i=(t(0),t(100)),o={title:"Sum",description:"Sum Monoid",layout:"guide",weight:100},c={unversionedId:"monoids/Sum",id:"monoids/Sum",isDocsHomePage:!1,title:"Sum",description:"Sum Monoid",source:"@site/docs/monoids/Sum.md",slug:"/monoids/Sum",permalink:"/crocks/docs/monoids/Sum",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/Sum.md",version:"current",sidebar:"sidebar",previous:{title:"Prod",permalink:"/crocks/docs/monoids/Prod"},next:{title:"Functions",permalink:"/crocks/docs/functions/"}},u=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],m={rightToc:u};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Sum Number\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sum")," is a ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," that will combine (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"s under addition."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Sum from 'crocks/Sum'\nimport mconcat from 'crocks/helpers/mconcat'\nimport mconcatMap from 'crocks/helpers/mconcatMap'\n\nSum(13)\n//=> Sum 13\n\nmconcat(Sum, [ 5, 2 ])\n//=> Sum 7\n\nSum(10)\n  .concat(Sum(10))\n//=> Sum 20\n\n// sumByTen :: [ Number ] -> Sum\nconst sumByTen =\n  mconcatMap(Sum, x => x * 10)\n\nsumByTen([ 2, 2 ])\n//=> Sum 40\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")),Object(i.b)("h2",{id:"construction"},"Construction"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Sum :: Number -> Sum Number\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sum")," provides addition on ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"s and needs to be constructed with\na ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," instance. Calling the constructor with a ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),", results in a\nnew ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," that wraps the provided ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"."),Object(i.b)("p",null,"Passing ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", ",Object(i.b)("inlineCode",{parentName:"p"},"NaN")," or ",Object(i.b)("inlineCode",{parentName:"p"},"null")," to the constructor will result in\nan ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," instance, or an instance containing a ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Sum from 'crocks/Sum'\n\nimport equals from 'crocks/pointfree/equals'\n\nSum(41)\n//=> Sum 41\n\nSum(Infinity)\n//=> Sum Infinity\n\nSum(NaN)\n//=> Sum 0\n\nequals(Sum(undefined), Sum.empty())\n//=> true\n")),Object(i.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(i.b)("h3",{id:"empty"},"empty"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Sum.empty :: () -> Sum\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(i.b)("inlineCode",{parentName:"p"},"concat"),"ed to any other value, it will return the other value. In\nthe case of ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," the result of ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," is ",Object(i.b)("inlineCode",{parentName:"p"},"0"),". ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," is available on both\nthe Constructor and the Instance for convenience."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Sum from 'crocks/Sum'\n\nSum.empty()\n//=> Sum 0\n\nSum.empty()\n  .concat(Sum.empty())\n//=> Sum 0\n\nSum(4)\n  .concat(Sum.empty())\n//=> Sum 4\n\nSum.empty()\n  .concat(Sum(4))\n//=> Sum 4\n")),Object(i.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(i.b)("h3",{id:"equals"},"equals"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Sum a ~> b -> Boolean\n")),Object(i.b)("p",null,"Used to compare the underlying values of (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," instances for equality by\nvalue, ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the passed\nargument is a ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," with an underlying value equal to the underlying value of\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," the method is being called on. If the passed argument is not\na ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," or the underlying values are not equal, ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Sum from 'crocks/Sum'\n\nSum(5)\n  .equals(Sum(5))\n//=> true\n\nSum(25)\n  .equals(Sum(31))\n//=> false\n")),Object(i.b)("h3",{id:"concat"},"concat"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Sum ~> Sum -> Sum\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"concat")," is used to combine (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an\noperation specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(i.b)("inlineCode",{parentName:"p"},"Sum"),", it will add the\n(2) ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"s."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Sum from 'crocks/Sum'\n\nSum(5)\n  .concat(Sum(4))\n//=> Sum 9\n\nSum(45)\n  .concat(Sum(32))\n//=> Sum 77\n\nSum(1000)\n  .concat(Sum(Infinity))\n//=> Sum Infinity\n\nSum(1)\n  .concat(Sum(3))\n//=> Sum 4\n")),Object(i.b)("h3",{id:"valueof"},"valueOf"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Sum ~> () -> Number\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction. While the\nextraction is available, types that implement ",Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," are not necessarily\na ",Object(i.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience for some of the\nhelper functions that ship with ",Object(i.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," on a ",Object(i.b)("inlineCode",{parentName:"p"},"Sum")," instance\nwill result in the underlying ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Sum from 'crocks/Sum'\n\nSum(4)\n  .valueOf()\n//=> 4\n\nSum.empty()\n  .valueOf()\n//=> 0\n\nSum(34)\n  .concat(Sum(21))\n  .valueOf()\n//=> 55\n")))}l.isMDXComponent=!0}}]);