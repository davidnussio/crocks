(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(100)),i={title:"Any",description:"Any Monoid",layout:"guide",weight:20},c={unversionedId:"monoids/Any",id:"monoids/Any",isDocsHomePage:!1,title:"Any",description:"Any Monoid",source:"@site/docs/monoids/Any.md",slug:"/monoids/Any",permalink:"/crocks/docs/monoids/Any",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/Any.md",version:"current",sidebar:"sidebar",previous:{title:"All",permalink:"/crocks/docs/monoids/All"},next:{title:"Assign",permalink:"/crocks/docs/monoids/Assign"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Any Boolean\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Any")," is a ",Object(o.b)("inlineCode",{parentName:"p"},"Monoid")," that will combine (2) values of any type using logical\ndisjunction (OR) on their coerced ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," values, mapping truthy values\nto ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and falsy values to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Any from 'crocks/Any'\n\nimport isNumber from 'crocks/predicates/isNumber'\nimport mconcatMap from 'crocks/helpers/mconcat'\n\nconst trueString = Any('string')\nconst falseString = Any('')\nconst object = Any({ nice: true })\n\ntrueString.concat(falseString)\n//=> Any false\n\ntrueString.concat(object)\n//=> Any true\n\nconst anyNumber =\n  mconcatMap(Any, isNumber)\n\nanyNumber([ 'string', 3 ])\n//=> Any true\n\nanyNumber([ true, 'string' ])\n//=> Any false\n")),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Monoid")),Object(o.b)("h2",{id:"construction"},"Construction"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Any :: a -> Any Boolean\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Any")," is constructed by calling the constructor with any type ",Object(o.b)("inlineCode",{parentName:"p"},"a"),". This will\nreturn an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," wrapping the provided value, coerced to a ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),". For\nexample, providing an non-empty ",Object(o.b)("inlineCode",{parentName:"p"},"String")," will result in an ",Object(o.b)("inlineCode",{parentName:"p"},"Any(true)"),". While\npassing an empty ",Object(o.b)("inlineCode",{parentName:"p"},"String")," results in an ",Object(o.b)("inlineCode",{parentName:"p"},"Any(false)"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Any from 'crocks/Any'\n\nAny(0)\n//=> Any(false)\n\nAny(1)\n//=> Any(true)\n\nAny([])\n//=> Any(true)\n")),Object(o.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(o.b)("h3",{id:"empty"},"empty"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Any.empty :: () -> Any\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(o.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(o.b)("inlineCode",{parentName:"p"},"concat"),"ed to any other value, it will return the other value. In\nthe case of ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," the result of ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," is available on both\nthe Constructor and the Instance for convenience."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Any from 'crocks/Any'\n\nAny.empty() //=> Any false\n\nAny(true).concat(Any.empty())   //=> Any true\nAny(false).concat(Any.empty())  //=> Any false\n")),Object(o.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(o.b)("h3",{id:"equals"},"equals"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Any a ~> b -> Boolean\n")),Object(o.b)("p",null,"Used to compare the underlying values of (2) ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," instances for equality by\nvalue, ",Object(o.b)("inlineCode",{parentName:"p"},"equals ")," takes any given argument and returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the passed argument\nis an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," with an underlying value equal to the underlying value of\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," the method is being called on. If the passed argument is not\nan ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," or the underlying values are not equal, ",Object(o.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Any from 'crocks/Any'\n\nAny(true)\n  .equals(Any(true))\n//=> true\n\nAny(true)\n  .equals(Any(false))\n//=> false\n")),Object(o.b)("h3",{id:"concat"},"concat"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Any ~> Any -> Any\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"concat")," is used to combine (2) ",Object(o.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an operation\nspecified by the ",Object(o.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(o.b)("inlineCode",{parentName:"p"},"Any"),", it will combine the (2)\nusing logical OR (disjunction)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Any from 'crocks/Any'\n\nAny(true).concat(Any(true))   //=> Any true\nAny(true).concat(Any(false))  //=> Any true\nAny(false).concat(Any(true))  //=> Any true\nAny(false).concat(Any(false)) //=> Any false\n")),Object(o.b)("h3",{id:"valueof"},"valueOf"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"Any ~> () -> Boolean\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(o.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(o.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction. While the\nextraction is available, types that implement ",Object(o.b)("inlineCode",{parentName:"p"},"valueOf")," are not necessarily\na ",Object(o.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience for some of the\nhelper functions that ship with ",Object(o.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(o.b)("inlineCode",{parentName:"p"},"valueOf")," on an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," instance\nwill result in the underlying ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Any from 'crocks/Any'\n\nAny(0).valueOf()        //=> false\nAny('string').valueOf() //=> true\n\n//=> true\nAny(45)\n  .concat('')\n  .valueOf()\n")))}p.isMDXComponent=!0}}]);