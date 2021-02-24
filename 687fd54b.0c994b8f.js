(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return t?r.a.createElement(d,c(c({ref:n},p),{},{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(114)),o={title:"Max",description:"Max Monoid",layout:"guide",weight:70},c={unversionedId:"monoids/Max",id:"monoids/Max",isDocsHomePage:!1,title:"Max",description:"Max Monoid",source:"@site/docs/monoids/Max.md",slug:"/monoids/Max",permalink:"/crocks/docs/monoids/Max",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/monoids/Max.md",version:"current",sidebar:"sidebar",previous:{title:"Last",permalink:"/crocks/docs/monoids/Last"},next:{title:"Min",permalink:"/crocks/docs/monoids/Min"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"empty",id:"empty",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"equals",id:"equals",children:[]},{value:"concat",id:"concat",children:[]},{value:"valueOf",id:"valueof",children:[]}]}],p={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Max Number\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Max")," is a ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," that will combines (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"s, resulting in the largest\nof the two."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import Max from 'crocks/Max'\nimport mconcat from 'crocks/helpers/mconcat'\n\nMax(76)\n//=> Max 76\n\nmconcat(Max, [ 95, 102, 56 ])\n//=> Max 102\n\nMax(100)\n  .concat(Max(10))\n//=> Max 100\n\nMax.empty()\n  .concat(Max(100))\n//=> Max 100\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Setoid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")),Object(i.b)("h2",{id:"construction"},"Construction"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Max :: Number -> Max Number\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Max")," is a ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," fixed to the type of ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," and as such requires\na ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," instance to be passed to the constructor. A new ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," instance is\nreturned, wrapping the provided ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"."),Object(i.b)("p",null,"The values ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", ",Object(i.b)("inlineCode",{parentName:"p"},"null")," and ",Object(i.b)("inlineCode",{parentName:"p"},"NaN")," will map to the ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," (",Object(i.b)("inlineCode",{parentName:"p"},"-Infinity"),")\ninstead of throwing a ",Object(i.b)("inlineCode",{parentName:"p"},"TypeError"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import Max from 'crocks/Max'\n\nimport equals from 'crocks/pointfree/equals'\n\nMax(99)\n//=> Max 99\n\nMax(Infinity)\n//=> Max Infinity\n\nMax(null)\n//=> Max -Infinity\n\nequals(Max(undefined), Max.empty())\n//=> true\n")),Object(i.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(i.b)("h3",{id:"empty"},"empty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Max.empty :: () -> Max\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"empty")," provides the identity for the ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid")," in that when the value it\nprovides is ",Object(i.b)("inlineCode",{parentName:"p"},"concat"),"ed to any other value, it will return the other value. In\nthe case of ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," the result of ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," is ",Object(i.b)("inlineCode",{parentName:"p"},"-Infinity"),". ",Object(i.b)("inlineCode",{parentName:"p"},"empty")," is available on\nboth the Constructor and the Instance for convenience."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import Max from 'crocks/Max'\n\nMax.empty()\n//=> Max -Infinity\n\nMax.empty()\n  .concat(Max.empty())\n//=> Max -Infinity\n\nMax(32)\n  .concat(Max.empty())\n//=> Max 32\n\nMax.empty()\n  .concat(Max(34))\n//=> Max 34\n")),Object(i.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(i.b)("h3",{id:"equals"},"equals"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Max a ~> b -> Boolean\n")),Object(i.b)("p",null,"Used to compare the underlying values of (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," instances for equality by\nvalue, ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," takes any given argument and returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the passed\nargument is a ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," with an underlying value equal to the underlying value of\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," the method is being called on. If the passed argument is not\na ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," or the underlying values are not equal, ",Object(i.b)("inlineCode",{parentName:"p"},"equals")," will return ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import Max from 'crocks/Max'\n\nMax(5)\n  .equals(Max(5))\n//=> true\n\nMax(25)\n  .equals(Max(31))\n//=> false\n")),Object(i.b)("h3",{id:"concat"},"concat"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Max ~> Max -> Max\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"concat")," is used to combine (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),"s of the same type under an\noperation specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"Semigroup"),". In the case of ",Object(i.b)("inlineCode",{parentName:"p"},"Max"),", it will result\nin the largest of the (2) ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"s."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import Max from 'crocks/Max'\n\nMax(23)\n  .concat(Max(13))\n//=> Max 23\n\nMax(-23)\n  .concat(Max(-32))\n//=> Max -23\n\nMax.empty()\n  .concat(Max(Infinity))\n//=> Max Infinity\n")),Object(i.b)("h3",{id:"valueof"},"valueOf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-haskell"},"Max ~> () -> Number\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," is used on all ",Object(i.b)("inlineCode",{parentName:"p"},"crocks")," ",Object(i.b)("inlineCode",{parentName:"p"},"Monoid"),"s as a means of extraction. While the\nextraction is available, types that implement ",Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," are not necessarily\na ",Object(i.b)("inlineCode",{parentName:"p"},"Comonad"),". This function is used primarily for convenience for some of the\nhelper functions that ship with ",Object(i.b)("inlineCode",{parentName:"p"},"crocks"),". Calling ",Object(i.b)("inlineCode",{parentName:"p"},"valueOf")," on a ",Object(i.b)("inlineCode",{parentName:"p"},"Max")," instance\nwill result in the underlying ",Object(i.b)("inlineCode",{parentName:"p"},"Number"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"runkit",runkit:!0},"import Max from 'crocks/Max'\n\nMax(4)\n  .valueOf()\n//=> 4\n\nMax.empty()\n  .valueOf()\n//=> -Infinity\n\nMax(34)\n  .concat(Max(21))\n  .valueOf()\n//=> 34\n")))}b.isMDXComponent=!0}}]);