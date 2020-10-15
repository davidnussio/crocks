(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=p(n),u=a,d=l["".concat(s,".").concat(u)]||l[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var b=2;b<i;b++)s[b]=n[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(101)),s={title:"First",description:"First Monoid",layout:"guide",weight:50},o={unversionedId:"monoids/First",id:"monoids/First",isDocsHomePage:!1,title:"First",description:"First Monoid",source:"@site/docs/monoids/First.md",slug:"/monoids/First",permalink:"/docs/monoids/First",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/First.md",version:"current",sidebar:"sidebar",previous:{title:"Endo",permalink:"/docs/monoids/Endo"},next:{title:"Last",permalink:"/docs/monoids/Last"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"option",id:"option",children:[]},{value:"valueOf",id:"valueof",children:[]}]},{value:"Transformation Functions",id:"transformation-functions",children:[{value:"eitherToFirst",id:"eithertofirst",children:[]},{value:"lastToFirst",id:"lasttofirst",children:[]},{value:"maybeToFirst",id:"maybetofirst",children:[]},{value:"resultToFirst",id:"resulttofirst",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First a = First (Maybe a)\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"First")," is a ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," that will always return the first, non-empty value when\ntwo ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instances are combined. ",Object(i.b)("inlineCode",{parentName:"p"},"First")," is able to be a ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," because\nit implements a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," under the hood. The use of\nthe ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," allows for an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," ",Object(i.b)("inlineCode",{parentName:"p"},"First")," to be represented\nwith a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#nothing"}),Object(i.b)("inlineCode",{parentName:"a"},"Nothing")),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"First")," can be constructed with either a value or a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," instance.\nAny value passed to the constructor will be wrapped in a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#just"}),Object(i.b)("inlineCode",{parentName:"a"},"Just"))," to\nrepresent a non-empty instance of ",Object(i.b)("inlineCode",{parentName:"p"},"First"),". Any ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe")),' passed to the\nconstructor will be lifted as is, allowing the ability to "choose" a value based\non some disjunction.'),Object(i.b)("p",null,"While most ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid"),"s only provide a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#valueof"}),Object(i.b)("inlineCode",{parentName:"a"},"valueOf"))," function used for\nextraction, ",Object(i.b)("inlineCode",{parentName:"p"},"First")," takes advantage of its underlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," to\nprovide an additional ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#option"}),Object(i.b)("inlineCode",{parentName:"a"},"option"))," method.\nUsing ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#valueof"}),Object(i.b)("inlineCode",{parentName:"a"},"valueOf"))," will extract the underlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe")),",\nwhile ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#option"}),Object(i.b)("inlineCode",{parentName:"a"},"option"))," will extract the underlying value in\nthe ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe")),", using the provided default value when the\nunderlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," is a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#nothing"}),Object(i.b)("inlineCode",{parentName:"a"},"Nothing"))," instance."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\n\nimport and from 'crocks/logic/and'\nimport isNumber from 'crocks/predicates/isNumber'\nimport mconcatMap from 'crocks/helpers/mconcatMap'\nimport safe from 'crocks/Maybe/safe'\n\n// isEven :: Number -> Boolean\nconst isEven =\n  x => !(x % 2)\n\n// isValid :: a -> Boolean\nconst isValid =\n  and(isNumber, isEven)\n\n// chooseFirst :: [ * ] -> First Number\nconst chooseFirst =\n  mconcatMap(First, safe(isValid))\n\nchooseFirst([ 21, 45, 2, 22, 19 ])\n  .valueOf()\n//=> Just 2\n\nchooseFirst([ 'a', 'b', 'c' ])\n  .option('')\n//=> \"\"\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")),Object(i.b)("h2",{id:"construction"},"Construction"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First :: a -> First (Maybe a)\nFirst :: Maybe a -> First (Maybe a)\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance can be constructed by passing either a direct (unwrapped)\nvalue ",Object(i.b)("inlineCode",{parentName:"p"},"a")," or a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe a")," to the constructor. When a direct value is passed, the\nconstructor will always wrap the value in a ",Object(i.b)("inlineCode",{parentName:"p"},"Just")," and return a\nnew ",Object(i.b)("inlineCode",{parentName:"p"},"First Just a")," instance."),Object(i.b)("p",null,"Alternatively, by passing a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe a"),", the user can programmatically provide an\nempty case to a given ",Object(i.b)("inlineCode",{parentName:"p"},"First")," by passing a ",Object(i.b)("inlineCode",{parentName:"p"},"Nothing"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\nimport Maybe from 'crocks/Maybe'\n\nconst { Just, Nothing } = Maybe\n\nFirst(Just(22))\n//=> First( Just 22 )\n\nFirst(Nothing())\n//=> First( Nothing )\n\nFirst(undefined)\n//=> First( Just undefined )\n\nFirst('string')\n//=> First( Just \"string\" )\n")),Object(i.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(i.b)("h3",{id:"empty"},"empty"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First.empty :: () -> First a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(i.b)("inlineCode",{parentName:"p"},"concat"),"ed to any other value, it will return the other value. In\nthe case of ",Object(i.b)("inlineCode",{parentName:"p"},"First")," the result of ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#nothing"}),Object(i.b)("inlineCode",{parentName:"a"},"Nothing")),". ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," is\navailable on both the Constructor and the Instance for convenience."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\n\nconst { empty } = First\n\nFirst.empty()\n//=> First( Nothing )\n\nFirst(3)\n  .concat(empty())\n//=> First( Just 3 )\n\nempty()\n  .concat(First(3))\n//=> First( Just 3 )\n")),Object(i.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(i.b)("h3",{id:"equals"},"equals"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First a ~> b -> Boolean\n")),Object(i.b)("p",null,"Used to compare the underlying values of two ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instances for equality by\nvalue, ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the passed\narguments is a ",Object(i.b)("inlineCode",{parentName:"p"},"First")," with an underlying value equal to the underlying value\nof the ",Object(i.b)("inlineCode",{parentName:"p"},"First")," the method is being called on. If the passed argument is not\na ",Object(i.b)("inlineCode",{parentName:"p"},"First")," or the underlying values are not equal, ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\n\nimport Maybe from 'crocks/Maybe'\n\nFirst(33)\n  .equals(First(33))\n//=> true\n\nFirst(42)\n  .equals(First(10))\n//=> false\n\nFirst({ a: 5 })\n  .equals({ a: 5 })\n//=> false\n\nFirst(95)\n  .equals(95)\n//=> false\n\nFirst(95)\n  .equals(Maybe.of(95))\n//=> false\n")),Object(i.b)("h3",{id:"concat"},"concat"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First a ~> First a -> First a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"concat")," is used to combine two ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an operation\nspecified by the ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(i.b)("inlineCode",{parentName:"p"},"First"),", it will always provide the\nfirst non-empty value. Any subsequent non-empty values will be thrown away and\nwill always result in the first non-empty value."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\nimport concat from 'crocks/pointfree/concat'\n\nconst a = First('a')\nconst b = First('b')\nconst c = First('c')\n\na.concat(b)\n//=> First( Just \"a\" )\n\nb.concat(a)\n//=> First( Just \"b\" )\n\nconcat(c, concat(b, a))\n//=> First( Just \"a\" )\n\nconcat(concat(c, b), a)\n//=> First( Just \"a\" )\n\nconcat(concat(a, b), c)\n//=> First( Just \"c\" )\n")),Object(i.b)("h3",{id:"option"},"option"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First a ~> a -> a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"First")," wraps an underlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," which provides the ability to\noption out a value in the case of an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," instance. Just like\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#option"}),Object(i.b)("inlineCode",{parentName:"a"},"option"))," on a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," instance, it takes a value as its\nargument. When run on an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," instance, the provided default\nwill be returned. If ",Object(i.b)("inlineCode",{parentName:"p"},"option")," is run on a non-empty instance however, the\nwrapped value will be extracted not only from the ",Object(i.b)("inlineCode",{parentName:"p"},"First")," but also from\nthe underlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#just"}),Object(i.b)("inlineCode",{parentName:"a"},"Just")),"."),Object(i.b)("p",null,"If the underlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," is desired, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#valueof"}),Object(i.b)("inlineCode",{parentName:"a"},"valueOf")),"\nmethod can be used and will return the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," instead."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\n\nimport compose from 'crocks/helpers/compose'\nimport chain from 'crocks/pointfree/chain'\nimport getProp from 'crocks/Maybe/getProp'\nimport isString from 'crocks/predicates/isString'\nimport mconcatMap from 'crocks/helpers/mconcatMap'\nimport safe from 'crocks/Maybe/safe'\n\n// stringVal :: a -> Maybe String\nconst stringVal = compose(\n  chain(safe(isString)),\n  getProp('val')\n)\n\n// firstValid :: [ a ] -> First String\nconst firstValid =\n  mconcatMap(First, stringVal)\n\n// good :: [ Object ]\nconst good =\n  [ { val: 23 }, { val: 'string' }, { val: '23' } ]\n\n// bad :: [ Object ]\nconst bad =\n  [ { val: 23 }, { val: null }, {} ]\n\nfirstValid(good)\n  .option('')\n//=> \"string\"\n\nfirstValid(bad)\n  .option('')\n//=> \"\"\n")),Object(i.b)("h3",{id:"valueof"},"valueOf"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"First a ~> () -> Maybe a\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction. While the\nextraction is available, types that implement ",Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," are not necessarily\na ",Object(i.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience for some of the\nhelper functions that ship with ",Object(i.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," on\na ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance will result in the underlying ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\n\nimport Maybe from 'crocks/Maybe'\nimport valueOf from 'crocks/pointfree/valueOf'\n\nconst { Nothing } = Maybe\n\nvalueOf(First(56))\n//=> Just 56\n\nvalueOf(First.empty())\n//=> Nothing\n\nFirst(37)\n  .concat(First(99))\n  .valueOf()\n//=> Just 37\n\nFirst(Nothing())\n  .concat(First.empty())\n  .valueOf()\n//=> Nothing\n")),Object(i.b)("h2",{id:"transformation-functions"},"Transformation Functions"),Object(i.b)("h3",{id:"eithertofirst"},"eitherToFirst"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crocks/First/eitherToFirst")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"eitherToFirst :: Either b a -> First a\neitherToFirst :: (a -> Either c b) -> a -> First b\n")),Object(i.b)("p",null,"Used to transform a given ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either"}),Object(i.b)("inlineCode",{parentName:"a"},"Either"))," instance to\na ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance, ",Object(i.b)("inlineCode",{parentName:"p"},"eitherToFirst")," will turn a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either#right"}),Object(i.b)("inlineCode",{parentName:"a"},"Right"))," instance into a\nnon-empty ",Object(i.b)("inlineCode",{parentName:"p"},"First"),", wrapping the original value contained in\nthe ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either#right"}),Object(i.b)("inlineCode",{parentName:"a"},"Right")),". All ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either#left"}),Object(i.b)("inlineCode",{parentName:"a"},"Left"))," instances will map to\nan ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," ",Object(i.b)("inlineCode",{parentName:"p"},"First"),", mapping the originally contained value to\na ",Object(i.b)("inlineCode",{parentName:"p"},"Unit"),". Values on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either#left"}),Object(i.b)("inlineCode",{parentName:"a"},"Left"))," will be lost and as such this\ntransformation is considered lossy in that regard."),Object(i.b)("p",null,"Like all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," transformation functions, ",Object(i.b)("inlineCode",{parentName:"p"},"eitherToFirst")," has two possible\nsignatures and will behave differently when passed either\nan ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either"}),Object(i.b)("inlineCode",{parentName:"a"},"Either"))," instance or a function that returns an instance\nof ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either"}),Object(i.b)("inlineCode",{parentName:"a"},"Either")),". When passed the instance, a transformed ",Object(i.b)("inlineCode",{parentName:"p"},"First")," is\nreturned. When passed an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Either"}),Object(i.b)("inlineCode",{parentName:"a"},"Either"))," returning function, a function will\nbe returned that takes a given value and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"First"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\nimport Either from 'crocks/Either'\nimport eitherToFirst from 'crocks/First/eitherToFirst'\n\nimport concat from 'crocks/pointfree/concat'\nimport constant from 'crocks/combinators/constant'\nimport flip from 'crocks/combinators/flip'\nimport ifElse from 'crocks/logic/ifElse'\nimport isNumber from 'crocks/predicates/isNumber'\nimport mapReduce from 'crocks/helpers/mapReduce'\n\nconst { Left, Right } = Either\n\n// someNumber :: a -> Either String Number\nconst someNumber = ifElse(\n  isNumber,\n  Right,\n  constant(Left('Nope'))\n)\n\n// firstNumber :: [ a ] -> First Number\nconst firstNumber = mapReduce(\n  eitherToFirst(someNumber),\n  flip(concat),\n  First.empty()\n)\n\n// \"Bad Times\" is lost, mapped to Nothing\neitherToFirst(Left('Bad Times'))\n//=> First( Nothing )\n\neitherToFirst(Right('correct'))\n//=> First( Just \"correct\" )\n\nfirstNumber([ 'string', null, 34, 76 ])\n//=> First( Just 34 )\n\nfirstNumber([ 'string', null, true ])\n//=> First( Nothing )\n")),Object(i.b)("h3",{id:"lasttofirst"},"lastToFirst"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crocks/First/lastToFirst")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"lastToFirst :: Last a -> First a\nlastToFirst :: (a -> Last b) -> a -> First b\n")),Object(i.b)("p",null,"Used to transform a given ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./Last"}),Object(i.b)("inlineCode",{parentName:"a"},"Last"))," instance to a ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance,\n",Object(i.b)("inlineCode",{parentName:"p"},"lastToFirst")," will turn a non-empty instance into a non-empty ",Object(i.b)("inlineCode",{parentName:"p"},"First")," wrapping\nthe original value contained within the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./Last"}),Object(i.b)("inlineCode",{parentName:"a"},"Last")),".\nAll ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," instances will map to an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," ",Object(i.b)("inlineCode",{parentName:"p"},"First"),"."),Object(i.b)("p",null,"Like all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," transformation functions, ",Object(i.b)("inlineCode",{parentName:"p"},"lastToFirst")," has two possible\nsignatures and will behave differently when passed either\na ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./Last"}),Object(i.b)("inlineCode",{parentName:"a"},"Last"))," instance or a function that returns an instance\nof ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./Last"}),Object(i.b)("inlineCode",{parentName:"a"},"Last")),". When passed the instance, a transformed ",Object(i.b)("inlineCode",{parentName:"p"},"First")," is returned.\nWhen passed a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./Last"}),Object(i.b)("inlineCode",{parentName:"a"},"Last"))," returning function, a function will be returned\nthat takes a given value and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"First"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\nimport Last  from 'crocks/Last'\nimport lastToFirst from 'crocks/First/lastToFirst'\n\nimport isString from 'crocks/predicates/isString'\nimport mconcatMap from 'crocks/helpers/mconcatMap'\nimport safe from 'crocks/Maybe/safe'\n\n// lastString :: [ a ] -> Last String\nconst lastString =\n  mconcatMap(Last, safe(isString))\n\n// fixLastString :: [ a ] -> First String\nconst fixLastString =\n  lastToFirst(lastString)\n\nlastToFirst(Last.empty())\n//=> First( Nothing )\n\nlastToFirst(Last(false))\n//=> First( Just false )\n\nfixLastString([ 'one', 2, 'Three', 4 ])\n  .concat(First('another string'))\n//=> First( Just \"Three\" )\n\nfixLastString([ 1, 2, 3, 4 ])\n  .concat(First('First String'))\n//=> First( Just \"First String\" )\n")),Object(i.b)("h3",{id:"maybetofirst"},"maybeToFirst"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crocks/First/maybeToFirst")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"maybeToFirst :: Maybe a -> First a\nmaybeToFirst :: (a -> Maybe b) -> a -> First b\n")),Object(i.b)("p",null,"Used to transform a given ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," instance to\na ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance, ",Object(i.b)("inlineCode",{parentName:"p"},"maybeToFirst")," will turn a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#just"}),Object(i.b)("inlineCode",{parentName:"a"},"Just"))," into a\nnon-empty ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance, wrapping the original value contained within\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"First"),". All ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe#nothing"}),Object(i.b)("inlineCode",{parentName:"a"},"Nothing"))," instances will map to\nan ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance."),Object(i.b)("p",null,"This function is available mostly for completion sake, as ",Object(i.b)("inlineCode",{parentName:"p"},"First")," can always\ntake a ",Object(i.b)("inlineCode",{parentName:"p"},"Maybe")," as its argument during construction. So while there is not a\nreal need for this to be used for transforming instances, it can come in\nhandy for lifting ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," returning functions."),Object(i.b)("p",null,"Like all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," transformation functions, ",Object(i.b)("inlineCode",{parentName:"p"},"maybeToFirst")," has two possible\nsignatures and will behave differently when passed either a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe")),"\ninstance or a function that returns an instance of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe")),". When\npassed the instance, a transformed ",Object(i.b)("inlineCode",{parentName:"p"},"First")," is returned. When passed\na ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Maybe"}),Object(i.b)("inlineCode",{parentName:"a"},"Maybe"))," returning function, a function will be returned that\ntakes a given value and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"First"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\nimport Maybe from 'crocks/Maybe'\nimport maybeToFirst from 'crocks/First/maybeToFirst'\n\nimport chain from 'crocks/pointfree/chain'\nimport compose from 'crocks/helpers/compose'\nimport getProp from 'crocks/Maybe/getProp'\nimport isNumber from 'crocks/predicates/isNumber'\nimport safe from 'crocks/Maybe/safe'\n\nconst { Nothing, Just } = Maybe\n\n// numVal :: a -> Maybe Number\nconst numVal = compose(\n  chain(safe(isNumber)),\n  getProp('val')\n)\n\n// firstNumVal :: a -> First Number\nconst firstNumVal =\n  maybeToFirst(numVal)\n\nmaybeToFirst(Just(99))\n//=> First( Just 99 )\n\nmaybeToFirst(Nothing())\n//=> First( Nothing )\n\nFirst(Just(99))\n//=> First( Just 99 )\n\nFirst(Nothing())\n//=> First( Nothing )\n\nfirstNumVal({ val: 97 })\n  .concat(First(80))\n//=> First( Just 97 )\n\nfirstNumVal({ val: '97' })\n  .concat(First(80))\n//=> First( Just 80 )\n\nfirstNumVal(null)\n  .concat(First(80))\n//=> First( Just 80 )\n")),Object(i.b)("h3",{id:"resulttofirst"},"resultToFirst"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crocks/First/resultToFirst")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-haskell"}),"resultToFirst :: Result e a -> First a\nresultToFirst :: (a -> Result e b) -> a -> First b\n")),Object(i.b)("p",null,"Used to transform a given ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Result"}),Object(i.b)("inlineCode",{parentName:"a"},"Result"))," instance to a ",Object(i.b)("inlineCode",{parentName:"p"},"First")," instance,\n",Object(i.b)("inlineCode",{parentName:"p"},"resultToFirst")," will turn an ",Object(i.b)("inlineCode",{parentName:"p"},"Ok")," instance into a non-empty ",Object(i.b)("inlineCode",{parentName:"p"},"First"),",\nwrapping the original value contained in the ",Object(i.b)("inlineCode",{parentName:"p"},"Ok"),". All ",Object(i.b)("inlineCode",{parentName:"p"},"Err")," instances will map\nto an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#empty"}),Object(i.b)("inlineCode",{parentName:"a"},"empty"))," ",Object(i.b)("inlineCode",{parentName:"p"},"First"),", mapping the originally contained value to\na ",Object(i.b)("inlineCode",{parentName:"p"},"Unit"),". Values on the ",Object(i.b)("inlineCode",{parentName:"p"},"Err")," will be lost and as such this transformation is\nconsidered lossy in that regard."),Object(i.b)("p",null,"Like all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," transformation functions, ",Object(i.b)("inlineCode",{parentName:"p"},"resultToFirst")," has two possible\nsignatures and will behave differently when passed either an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Result"}),Object(i.b)("inlineCode",{parentName:"a"},"Result"))," instance\nor a function that returns an instance of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Result"}),Object(i.b)("inlineCode",{parentName:"a"},"Result")),". When passed the instance,\na transformed ",Object(i.b)("inlineCode",{parentName:"p"},"First")," is returned. When passed a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../crocks/Result"}),Object(i.b)("inlineCode",{parentName:"a"},"Result"))," returning function,\na function will be returned that takes a given value and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"First"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import First from 'crocks/First'\nimport Result from 'crocks/Result'\nimport resultToFirst from 'crocks/First/resultToFirst'\n\nimport isNumber from 'crocks/predicates/isNumber'\nimport tryCatch from 'crocks/Result/tryCatch'\n\nconst { Err, Ok } = Result\n\nfunction onlyNums(x) {\n  if(!isNumber(x)) {\n    throw new Error('something amiss')\n  }\n  return x\n}\n\n// firstNum :: a -> First Number\nconst firstNum =\n  resultToFirst(tryCatch(onlyNums))\n\n// \"this is bad\" is lost, mapped to Nothing\nresultToFirst(Err('this is bad'))\n//=> First( Nothing )\n\nresultToFirst(Ok('this is great'))\n//=> First( Just \"this is great\" )\n\nfirstNum(90)\n  .concat(First(0))\n//=> First( Just 90 )\n\nfirstNum(null)\n  .concat(First(0))\n//=> First( Just 0 )\n")))}p.isMDXComponent=!0}}]);