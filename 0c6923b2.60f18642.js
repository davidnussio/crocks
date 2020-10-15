(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},b=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=t,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||a;return r?o.a.createElement(d,c(c({ref:n},l),{},{components:r})):o.a.createElement(d,c({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(2),o=r(6),a=(r(0),r(100)),i={title:"Arrow",description:"Arrow Crock",slug:"/crocks/Arrow"},c={unversionedId:"crocks/Arrow",id:"crocks/Arrow",isDocsHomePage:!1,title:"Arrow",description:"Arrow Crock",source:"@site/docs/crocks/Arrow.md",slug:"/crocks/Arrow",permalink:"/docs/crocks/Arrow",editUrl:"https://github.com/evilsoft/crocks/edit/master/docs/docs/crocks/Arrow.md",version:"current",sidebar:"sidebar",previous:{title:"Crocks",permalink:"/docs/crocks/"},next:{title:"Async",permalink:"/docs/crocks/Async"}},p=[{value:"Implements",id:"implements",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Constructor Methods",id:"constructor-methods",children:[{value:"id",id:"id",children:[]}]},{value:"Instance Methods",id:"instance-methods",children:[{value:"both",id:"both",children:[]},{value:"compose",id:"compose",children:[]},{value:"contramap",id:"contramap",children:[]},{value:"first",id:"first",children:[]},{value:"map",id:"map",children:[]},{value:"promap",id:"promap",children:[]},{value:"runWith",id:"runwith",children:[]},{value:"second",id:"second",children:[]}]}],l={rightToc:p};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow a b\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," is a ",Object(a.b)("inlineCode",{parentName:"p"},"Profunctor")," that lifts a function of type ",Object(a.b)("inlineCode",{parentName:"p"},"a -> b")," and allows for\nlazy execution of the function. ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," can be considered a ",Object(a.b)("inlineCode",{parentName:"p"},"Strong Profunctor")," if\nthe underlying data running through the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," is a ",Object(a.b)("inlineCode",{parentName:"p"},"Pair"),", typically in the\nform of ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow (Pair a c) (Pair b d)"),"."),Object(a.b)("p",null,"This will allow you to split execution into two distinct paths, applying ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," to\na specific path. The parameters of ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," represent the function that it\nwraps, with the input being on the left, and the output on the right. When\nan ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," wraps an endomorphism, the signature typically represents both the input\nand output."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport chain from 'crocks/pointfree/chain'\nimport compose from 'crocks/helpers/compose'\nimport getProp from 'crocks/Maybe/getProp'\nimport isString from 'crocks/predicates/isString'\nimport option from 'crocks/pointfree/option'\nimport safe from 'crocks/Maybe/safe'\n\n// arrUpper :: Arrow String\nconst arrUpper =\n  Arrow(str => str.toUpperCase())\n\narrUpper\n  .runWith('nice')\n//=> 'NICE'\n\n// getName :: a -> String\nconst getName = compose(\n  option('no name'),\n  chain(safe(isString)),\n  getProp('name')\n)\n\n// arrUpperName :: Arrow a String\nconst arrUpperName =\n  arrUpper\n    .contramap(getName)\n\narrUpperName\n  .runWith({ name: 'joey' })\n//=> 'JOEY'\n\narrUpperName\n  .runWith({ age: 23 })\n//=> 'NO NAME'\n\narrUpperName\n  .runWith({ name: false })\n//=> 'NO NAME'\n")),Object(a.b)("h2",{id:"implements"},"Implements"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Semigroupoid"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Category"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Functor"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Contravariant"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Profunctor")),Object(a.b)("h2",{id:"construction"},"Construction"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow :: (a -> b) -> Arrow a b\n")),Object(a.b)("p",null,"An ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," is constructed with a unary function of type ",Object(a.b)("inlineCode",{parentName:"p"},"(a -> b)"),". The\ninput, or domain, of the function is the left parameter in the type signature\nand the output, or co-domain, of the function represents the right."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport compose from 'crocks/helpers/compose'\nimport getProp from 'crocks/Maybe/getProp'\nimport option from 'crocks/pointfree/option'\n\n// length :: a -> Integer\nconst length = compose(\n  option(0),\n  getProp('length')\n)\n\n// Arrow a Integer\nArrow(length)\n//=> Arrow (a -> Integer)\n")),Object(a.b)("h2",{id:"constructor-methods"},"Constructor Methods"),Object(a.b)("h3",{id:"id"},"id"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow.id :: () -> Arrow a\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"id")," provides the identity for the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," in that when it is composed to either\nthe left or right side of a given function, it will essentially result in a\nmorphism that is, for all intents and purposes, the given function. For ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),",\n",Object(a.b)("inlineCode",{parentName:"p"},"id")," is the simple ",Object(a.b)("inlineCode",{parentName:"p"},"identity")," function that echoes it's given argument\n(",Object(a.b)("inlineCode",{parentName:"p"},"x => x"),"). As a convenience, ",Object(a.b)("inlineCode",{parentName:"p"},"id")," is also available on the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," instance."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\n// arrId :: Arrow a\nconst id = Arrow.id()\n\n// arrow :: Arrow a String\nconst arrow =\n  Arrow(x => x.toString())\n\n// left :: Arrow a String\nconst left =\n  id.compose(arrow)\n\n// right :: Arrow a String\nconst right =\n  arrow.compose(id)\n\nright.runWith(12)\n//=> '12'\n\nleft.runWith(12)\n//=> '12'\n")),Object(a.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(a.b)("h3",{id:"both"},"both"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Pair p => Arrow a b ~> () -> Arrow (p a a) (p b b)\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"both")," allows for the mode of a given ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," to switch to a manner that applies\nitself to both slots of a ",Object(a.b)("inlineCode",{parentName:"p"},"Pair")," that is passed through the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),". As noted in\nthe type signature, ",Object(a.b)("inlineCode",{parentName:"p"},"both")," will give back an ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," has a new signature that\nutilizes a ",Object(a.b)("inlineCode",{parentName:"p"},"Pair")," on both sides."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\nimport Pair from 'crocks/Pair'\n\nimport merge from 'crocks/pointfree/merge'\n\n// double :: Number -> Number\nconst double =\n  x => x * 2\n\n// add :: (Number, Number) -> Number\nconst add =\n  (x, y) => x + y\n\n// arrDouble :: Arrow Number\nconst arrDouble =\n  Arrow(double)\n\n// arrDoubleAndAdd :: Arrow (Pair Number Number) Number\nconst arrDoubleAndAdd =\n  arrDouble\n    .both()\n    .map(merge(add))\n\narrDouble\n  .runWith(200)\n//=> 400\n\narrDoubleAndAdd\n  .runWith(Pair(200, 10))\n//=> 420\n")),Object(a.b)("h3",{id:"compose"},"compose"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow a b ~> Arrow b c -> Arrow a c\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"compose")," allows you to compose two ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),"s together, resulting in a\nnew ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," that is the result of the composition."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport filter from 'crocks/pointfree/filter'\nimport map from 'crocks/pointfree/map'\n\n// arrFilterEven :: Arrow [ Number ]\nconst arrFilterEven =\n  Arrow(filter(x => !(x % 2)))\n\n// arrDoubleNumbers :: Arrow [ Number ]\nconst arrDoubleNumbers =\n  Arrow(map(x => x * 2))\n\n// arrLength :: Arrow [ a ] -> Number\nconst arrLength =\n  Arrow(x => x.length)\n\n// arrDoubleEven :: Arrow [ Number ]\nconst arrDoubleEven =\n  arrFilterEven\n    .compose(arrDoubleNumbers)\n\n// arrEvenCount :: Arrow [ Number ] Number\nconst arrEvenCount =\n  arrFilterEven\n    .compose(arrLength)\n\n// data :: [ Number ]\nconst data =\n  [ 12, 2, 36, 35 ]\n\narrDoubleEven\n  .runWith(data)\n//=> [ 24, 4, 72 ]\n\narrEvenCount\n  .runWith(data)\n//=> 3\n")),Object(a.b)("h3",{id:"contramap"},"contramap"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow a b ~> (c -> a) -> Arrow c b\n")),Object(a.b)("p",null,"When using ",Object(a.b)("inlineCode",{parentName:"p"},"contramap")," on an ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),", a function can be lifted that will map a\ngiven type into the type required for the original ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),'\'s input. This allows\nfor "adaption" of given ',Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),"'s input for better reuse. The resulting type of\nthe lifted function must match the input type of the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport chain from 'crocks/pointfree/chain'\nimport compose from 'crocks/helpers/compose'\nimport getProp from 'crocks/Maybe/getProp'\nimport isNumber from 'crocks/predicates/isNumber'\nimport option from 'crocks/pointfree/option'\nimport safe from 'crocks/Maybe/safe'\n\n// getValue :: (String, Number) -> a -> Number\nconst getValue = (key, def) => compose(\n  option(def),\n  chain(safe(isNumber)),\n  getProp(key)\n)\n\n// arrAdd10 :: Arrow Number\nconst arrAdd10 =\n  Arrow(x => x + 10)\n\n// arrAdd10Value :: Arrow Object Number\nconst arrAdd10Value =\n  arrAdd10\n    .contramap(getValue('value', 0))\n\narrAdd10\n  .runWith(23)\n//=> 33\n\narrAdd10Value\n  .runWith({ value: 23 })\n//=> 33\n\narrAdd10Value\n  .runWith({ value: '23' })\n//=> 10\n\narrAdd10Value\n  .runWith({ num: 23 })\n//=> 10\n")),Object(a.b)("h3",{id:"first"},"first"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Pair p => Arrow a b ~> () -> Arrow (p a c) (p b c)\n")),Object(a.b)("p",null,"When calling ",Object(a.b)("inlineCode",{parentName:"p"},"first")," on an ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),", a new ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," is returned that will expect\na ",Object(a.b)("inlineCode",{parentName:"p"},"Pair")," with the original input type in the first slot of the ",Object(a.b)("inlineCode",{parentName:"p"},"Pair"),". When run,\nthe ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," will only be applied to the first slot in the ",Object(a.b)("inlineCode",{parentName:"p"},"Pair"),", leaving\nthe second slot untouched."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\nimport branch from 'crocks/Pair/branch'\n\n// arrToUpper :: Arrow String\nconst arrToUpper =\n  Arrow(x => x.toUpperCase())\n\narrToUpper\n  .runWith('burrito bounce')\n//=> 'BURRITO BOUNCE'\n\n// join :: Pair String -> Object\nconst join = p => ({\n  original: p.snd(),\n  result: p.fst()\n})\n\n// flow :: Arrow String Object\nconst flow =\n  arrToUpper\n    .first()\n    .promap(branch, join)\n\nflow\n  .runWith('taco time')\n//=> { original: 'taco time', result: 'TACO TIME' }\n")),Object(a.b)("h3",{id:"map"},"map"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow a b ~> (b -> c) -> Arrow a c\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"map")," allows a function to be lifted that will map the right side of the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),".\nWhere ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"#contramap"}),Object(a.b)("inlineCode",{parentName:"a"},"contramap"))," is used to map the input, ",Object(a.b)("inlineCode",{parentName:"p"},"map")," maps the result\nof the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),', allowing the result to be "adapted" or modified. The input type\nto the lifted function must match the result the ',Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport B from 'crocks/combinators/composeB'\n\n// arrFullScale :: Arrow Number\nconst arrFullScale =\n  Arrow(x => 20 * Math.log10(Math.abs(x)))\n\narrFullScale\n  .runWith(-0.35)\n//=> -9.118639112994488\n\n// round :: Number -> Number\nconst round =\n  x => Math.floor(x * 100) / 100\n\n// stringRep :: Number -> String\nconst stringRep =\n  x => `${x} dBFS`\n\n// Arrow :: Number String\nconst arrStringFS =\n  arrFullScale\n    .map(B(stringRep, round))\n\narrStringFS\n  .runWith(0.35)\n//=> '-9.12 dbFS'\n")),Object(a.b)("h3",{id:"promap"},"promap"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow a b ~> ((c -> a), (b -> d)) -> Arrow c d\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"promap")," can be used to adapt BOTH ends of an ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," allowing for existing ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),"s\nto be reused in places in a flow where the types do not line up. It combines\nboth ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"#map"}),Object(a.b)("inlineCode",{parentName:"a"},"map"))," and ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"#contramap"}),Object(a.b)("inlineCode",{parentName:"a"},"contramap"))," into one operation. Just pass\nthe function for ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"#contramap"}),Object(a.b)("inlineCode",{parentName:"a"},"contramap"))," as the first argument and the\nfunction ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"#map"}),Object(a.b)("inlineCode",{parentName:"a"},"map"))," as the second."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport chain from 'crocks/pointfree/chain'\nimport compose from 'crocks/helpers/compose'\nimport getProp from 'crocks/Maybe/getProp'\nimport isString from 'crocks/predicates/isString'\nimport objOf from 'crocks/helpers/objOf'\nimport option from 'crocks/pointfree/option'\nimport safe from 'crocks/Maybe/safe'\n\n// upperFirst :: String -> String\nconst upperFirst = x =>\n  x.charAt(0)\n    .toUpperCase()\n    .concat(x.slice(1).toLowerCase())\n\n// arrTitleize :: Arrow String\nconst arrTitleize =\n  Arrow(x => x.split(' ').map(upperFirst).join(' '))\n\narrTitleize\n  .runWith('tHis is siLLy')\n//=> 'This Is Silly'\n\n// stringProp :: String -> Object -> String\nconst stringProp = key => compose(\n  option(''),\n  chain(safe(isString)),\n  getProp(key)\n)\n\n// arrTitleObject :: Arrow Object\nconst arrTitleObject =\n  arrTitleize\n    .promap(stringProp('title'), objOf('title'))\n\narrTitleObject\n  .runWith({ title: 'SaY wHaT!?!' })\n// { title: 'Say What!?!' }\n\narrTitleObject\n  .runWith({ title: true })\n// { title: '' }\n")),Object(a.b)("h3",{id:"runwith"},"runWith"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Arrow a b ~> a -> b\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Arrow"),"s are lazy to make combining and extending them easy. Once you have your\nfinal computation built out and you are ready to execute it, all you have to\ndo is call ",Object(a.b)("inlineCode",{parentName:"p"},"runWith")," on it, passing in the argument you what to run it with."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\nimport Sum from 'crocks/Sum'\n\nimport branch from 'crocks/Pair/branch'\nimport merge from 'crocks/pointfree/merge'\nimport mreduce from 'crocks/helpers/mreduce'\n\n// data :: [ Number ]\nconst data =\n  [ 35, 60, 22, 100 ]\n\n// arrLength :: Arrow [ a ] Number\nconst arrLength =\n  Arrow(x => x.length)\n\narrLength\n  .runWith(data)\n//=> 4\n\n// arrSum :: Arrow [ Number ] Number\nconst arrSum =\n  Arrow(mreduce(Sum))\n\narrSum\n  .runWith(data)\n//=> 217\n\n// arrAvgList :: Arrow [ Number ] Number\nconst arrAvgList =\n  arrSum.first()\n    .compose(arrLength.second())\n    .promap(branch, merge((x, y) => x / y))\n\narrAvgList\n  .runWith(data)\n//=> 54.25\n")),Object(a.b)("h3",{id:"second"},"second"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-haskell"}),"Pair p => Arrow a b ~> () -> Arrow (p c a) (p c b)\n")),Object(a.b)("p",null,"Used to apply a given ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," over the second slot of a ",Object(a.b)("inlineCode",{parentName:"p"},"Pair"),", leaving the\nfirst slot untouched. The input to the ",Object(a.b)("inlineCode",{parentName:"p"},"Arrow")," must match the expected type on\nthe second slot of the incoming ",Object(a.b)("inlineCode",{parentName:"p"},"Pair"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js",metastring:"runkit",runkit:!0}),"import Arrow from 'crocks/Arrow'\n\nimport assign from 'crocks/helpers/assign'\nimport branch from 'crocks/Pair/branch'\nimport merge from 'crocks/pointfree/merge'\nimport objOf from 'crocks/helpers/objOf'\n\n// names :: Object\nconst names = {\n  first: 'Joey',\n  last: 'Fella'\n}\n\n// arrFull :: Arrow Object\nconst arrFull =\n  Arrow(({ first, last }) => `${first} ${last}`)\n    .map(objOf('full'))\n//=> { full: 'Joey Fella' }\n\n// arrAddFull :: Arrow Object\nconst arrAddFull =\n  arrFull\n    .second()\n    .promap(branch, merge(assign))\n\narrAddFull\n  .runWith(names)\n//=> { full: 'Joey Fella', first: 'Joey', last: 'Fella' }\n")))}s.isMDXComponent=!0}}]);